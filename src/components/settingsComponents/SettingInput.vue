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
          <span class="setting__text">Тип поля  (<span class="setting__text-attr">type</span>)</span>
          <div class="setting__field">
            <this-dropdown 
              :options="optionsTypeInput"
              @choiseElement="(el) => typeInput = el"
              :defaultText="typeInput"
            ></this-dropdown>
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
          <div class="setting-input">
            <span class="setting-input__text">{{labelInput}}</span>
            <input
              class="null-form-input"
              :type="typeInput"
              :placeholder="placeholderInput"
              :maxlength="maxLength"
            />
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
import ThisDropdown from '@/components/uiComponents/ThisDropdown.vue'
import ThisButton from '@/components/uiComponents/ThisButton.vue'

export default {
  name: 'SettingButton',
  components: {
    ThisInput, ThisDropdown, ThisButton
  },
  mounted() {
   this.typeInput = 'text'
   this.maxLength = 30
  },
  data() {
    return {
      maxLength: null,
      placeholderInput: '',
      labelInput: '',
      optionsTypeInput: [
        {id: 1, name: 'text'},
        {id: 2, name: 'email'},
        {id: 3, name: 'password'}
      ],
      nameValue: '',
      keyNameValue: 0,
      typeInput: '',
      keyLabelInput: 0,
      keyPlaceholderInput: 0,
      structure: {namevalue: '',label: '',placeholder: '',style: '', class: 'null-form-input',type: '', maxlength: null}
    }
  },
  methods: {
    setStructure() {
      if (this.nameValue === '') {
        alert('Не введено имя свойства')
        return
      }

      this.structure.typeName = 'FormInput' 
      this.$emit('setStructure', this.structure)
      
      this.typeInput = 'text'
      this.labelInput = ''
      this.placeholderInput = ''
      this.maxLength = 30
      this.keyLabelInput += 1
      this.keyNameValue += 1
      this.nameValue = ''
      this.keyPlaceholderInput += 1
      this.structure = {namevalue: '', label: '',placeholder: '',style: '', class: 'null-form-input',type: '', maxlength: null}
    },

  },
  watch: {
    typeInput(val) {
      this.structure.type = val
    },
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
  .setting-input {
    position: relative;
    margin: 10px 5px;

    &__text {
      position: absolute;
      left: 0;
      top: -15px;
    }
  }
</style>
