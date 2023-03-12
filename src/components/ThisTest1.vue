<template>
  <div class="ready-form">
    <div class="ready-form__body" v-if="schemaFieldsTest1.length">
      <form ref="form" @submit.prevent="submitHandler()" class="ready-form__content">
        <div v-for="(field, i) in schemaFieldsTest1" :key="i" class="ready-form__field">
        <component
          :styles="field.style"
          :is="field.typeName"
          :classb="field.class"
          :nameb="field.name"
          :disabled="field.disabled"
          :type="field.type"
          :placeholder="field.placeholder"
          :label="field.label"
          :maxlength="field.maxlength"
          :options="field.options"
          :defaultvalueid="field.defaultvalueid"
          :namevalue="field.namevalue"
          @click="clickButton"
          @submitForm="submitForm()"
          @inputHandlerValue="inputHandlerValue"
          @inputHandlerNameValue="inputHandlerNameValue(field.namevalue)"
        ></component>
        </div>
      </form>
      <div class="ready-form__object">
        <span>Обьект формы:</span>
        <pre>
          <code>{{ objectForm }}</code>
        </pre>
      </div>
    </div>
    <h3 class="ready-form__text" v-else>Нет данных для формы</h3>
  </div>
</template>
<script>
  import FormButton from '@/components/formComponents/FormButton.vue'
  import FormCheckbox from '@/components/formComponents/FormCheckbox.vue'
  import FormInput from '@/components/formComponents/FormInput.vue'
  import FormDropdown from '@/components/formComponents/FormDropdown.vue'
  import FormTextarea from '@/components/formComponents/FormTextarea.vue'
  export default {
    name: 'ready-form',
    components: {
      FormButton, FormInput, FormTextarea, FormCheckbox, FormDropdown
    },
    data() {
      return {
        inputvalue: '',
      }
    },
    mounted() {
      this.$store.dispatch('manuallyCreate')
      this.$store.dispatch('createFormForTest1')
    },
    methods: {
      clickButton() {
        alert('Событие click кнопки') 
      },
      submitForm(){
        this.$refs.form.$el.submit()
      },
      submitHandler() {
        console.log('submitHandler')
        alert('Форма отправлена')  
      },
      inputHandlerValue(value) { 
        this.inputvalue = value
      },
      inputHandlerNameValue(namevalue) { 
        const value = this.inputvalue
        this.$store.dispatch('modifyForm', {namevalue, value})
      }
    },
    computed: {
      objectForm() {
        return this.$store.getters.objectForm
      },
      schemaFieldsTest1() {
          return this.$store.getters.schemaFieldsTest1
      }
    },
  }
</script>
