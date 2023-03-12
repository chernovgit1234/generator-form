<template>
  <div class="setting">
    <div class="setting__body">
      <div class="setting__settings">
        <div class="setting__item hr-bottom fw-bold">
          <span class="setting__text">Аттрибут</span>
          <span class="setting__text">Настройка</span>
        </div>
        <div class="setting__item">
          <span class="setting__text">Название свойства для привязки значения (на англ.; для формы;)(<span class="setting__text-attr">v-model</span>)</span>
          <div class="setting__field">
            <this-input 
              :key="keyNameValue"
              type="text"
              placeholder="Введите название"
              @input="w => nameValue = w"
            ></this-input>
          </div>
        </div>
        <div class="setting__item">
          <span class="setting__text">Плэйсхолдер(<span class="setting__text-attr">placeholder</span>)</span>
          <div class="setting__field">
            <this-input 
              :key="keyPlaceholderInput"
              type="text"
              placeholder="Введите плэйсхолдер"
              @input="w => placeholderInput = w"
            ></this-input>
          </div>
        </div>
        <div class="setting__item">
          <span class="setting__text">Название(<span class="setting__text-attr">label</span>)</span>
          <div class="setting__field">
            <this-input 
              :key="keyLabelInput"
              type="text"
              placeholder="Введите название"
              @input="w => labelInput = w"
              :maxlength="10"
            ></this-input>
          </div>
        </div>

        <div class="setting__item">
          <span class="setting__text">Максимальная длина(<span class="setting__text-attr">maxlength</span>)</span>
          <div class="setting__field">
            <this-input 
              :modelx="maxLength"
              type="number"
              placeholder="Введите длину max"
              @input="w => maxLength = w"
            ></this-input>
          </div>
        </div>
        
      </div>
      <div class="setting__structure">
        <span>Структура:</span>
        <div class="setting__code">
          <code class="">{{ structure }}</code>
        </div>
      </div>
      <div class="setting__result">
        <span>Предварительное отображение:</span>
        <div class="setting__example ">
          <div class="setting-textarea">
            <span class="setting-textarea__text">{{labelInput}}</span>
            <textarea
              class="null-form-textarea"
              :placeholder="placeholderInput"
              :maxlength="maxLength"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
    <div class="setting__actions">
      <this-button @click='setStructure()' :text="'Зафиксировать настройки'"></this-button>
    </div>
  </div>
</template>

<script>
import ThisInput from '@/components/uiComponents/ThisSettingInput.vue'
import ThisButton from '@/components/uiComponents/ThisButton.vue'

export default {
  name: 'SettingTextarea',
  components: {
    ThisInput, ThisButton
  },
  mounted() {
   this.maxLength = 50
  },
  data() {
    return {
      maxLength: null,
      placeholderInput: '',
      labelInput: '',
      nameValue: '',
      keyNameValue: 0,
      keyLabelInput: 0,
      keyPlaceholderInput: 0,
      structure: {namevalue: '',label: '',placeholder: '',style: '', class: 'null-form-textarea', maxlength: null}
    }
  },
  methods: {
    setStructure() {
      if (this.nameValue === '') {
        alert('Не введено имя свойства')
        return
      }

      this.structure.typeName = 'FormTextarea' 
      this.$emit('setStructure', this.structure)
      
      this.labelInput = ''
      this.placeholderInput = ''
      this.nameValue = ''
      this.maxLength = 50
      this.keyLabelInput += 1
      this.keyNameValue += 1
      this.keyPlaceholderInput += 1
      this.structure = {namevalue: '',label: '',placeholder: '',style: '', class: 'null-form-input',type: '', maxlength: null}
    },
  },
  watch: {
    maxLength(val) {
      this.structure.maxlength = val
    },
    placeholderInput(val) {
      this.structure.placeholder = val
    },
    labelInput(val) {
      this.structure.label = val
    },
    nameValue(val) {
      this.structure.namevalue = val
    }
  }
}
</script>

<style scoped lang="scss">
  .setting-textarea {
    position: relative;
    margin: 10px 5px;

    &__text {
      position: absolute;
      left: 0;
      top: -15px;
    }
  }
</style>
