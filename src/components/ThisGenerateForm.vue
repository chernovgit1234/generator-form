<template>
  <div class="generate">
    <this-modal 
      :key="keyModal"  
      class="popup-test" 
      v-show="activeLine" 
      @closePopup="closePopup()"
    > 
      <template #field="{styles}">
        <component
          :is="structureById.typeName"
          :classb="structureById.class"
          :nameb="structureById.name"
          :disabled="structureById.disabled"
          :type="structureById.type"
          :idx="structureById.id"
          :styles="styles"
          :placeholder="structureById.placeholder"
          :label="structureById.label"
          :maxlength="structureById.maxlength"
          :options="structureById.options"
          :defaultvalueid="structureById.defaultvalueid"
          :namevalue="structureById.namevalue"
        ></component>
      </template>
    </this-modal>
    <div class="generate__form form">
      <div class="form__body">
        <h3 v-if="!schemaFields.length">Структуры не обнаружено. Создайте первый элемен вручную</h3>
        <form v-else class="form__content" @submit.prevent="submitForm()">
          <transition-group name="list">
            <div v-for="(field, i) in schemaFields" :key="i" class="form__item" @click="openModalCastom(field.id)">
              <component
                :styles="field.style"
                :is="field.typeName"
                :classb="field.class"
                :nameb="field.name"
                :disabled="field.disabled"
                :type="field.type"
                :idx="field.id"
                :placeholder="field.placeholder"
                :label="field.label"
                :maxlength="field.maxlength"
                :options="field.options"
                :defaultvalueid="field.defaultvalueid"
                :namevalue="field.namevalue"
                @click="click()"
              ></component>
            </div>
          </transition-group>
        </form>
      </div>
    </div>
    <div class="generate__action">
      <this-button 
        :disabled="!schemaFields.length" 
        :text="'Сгенерировать'"
        @click="generateForm()"
      ></this-button>
    </div>
  </div>
</template>
  
<script>
import ThisModal from '@/components/ThisModalCastom.vue'
import FormButton from '@/components/formComponents/FormButton.vue'
import FormInput from '@/components/formComponents/FormInput.vue'
import ThisButton from '@/components/uiComponents/ThisButton.vue'
import FormTextarea from '@/components/formComponents/FormTextarea.vue'
import FormDropdown from '@/components/formComponents/FormDropdown.vue'
import FormCheckbox from '@/components/formComponents/FormCheckbox.vue'
export default {
  name: 'GenerateForm',
  components: {
    ThisButton, FormButton, ThisModal, FormInput, FormTextarea, FormCheckbox, FormDropdown
  },
  computed: {
    schemaFields() {
      return this.$store.getters.schemaFields
    },
    structureById() {
      return {...this.$store.getters.structureById(this.idActive)}
    }
  },
  data() {
    return {
      formValues: {},
      activeLine: false,
      idActive: '',
      styles: '',
      keyModal: 0
    }
  },
  methods: {
    submitForm() {
      console.log('Событие submitForm')
    },
    click() {
      console.log('Событие click')
    },
    openModalCastom(id) {
      this.keyModal++
      this.activeLine = true
      this.idActive = id
      this.$store.dispatch('setActiveId', id)
      const structureById = this.structureById
      console.log('openModalCastom', structureById)
    },
    closePopup() {
      setTimeout(() => {
        this.activeLine = false
      }, 0);
    },
    generateForm() {
      this.$store.dispatch('createObjectForm')
      this.$router.push('/form')
    }
  }
}
</script>

<style scoped lang="scss">
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}
.popup-test {
  position: absolute;
  left: 40px;
  top: 40px;
}
</style>
