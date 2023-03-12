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
          <span class="setting__text">Описание</span>
          <div class="setting__field">
            <this-input 
              :key="keyLabelInput"
              type="text"
              placeholder="Введите описание"
              @input="w => labelInput = w"
              :maxlength="70"
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
          <div class="setting-checkbox">
            <input class="setting-checkbox__input" type="checkbox" id="coding" name="interest" value="coding" />
            <label class="setting-checkbox__text" for="coding">{{labelInput}}</label>
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
  name: 'SettingCheckbox',
  components: {
    ThisInput, ThisButton
  },
  data() {
    return {
      labelInput: '',
      nameValue: '',
      keyNameValue: 0,
      keyLabelInput: 0,
      structure: {namevalue: '',label: '',style: '', class: 'null-form-checkbox'}
    }
  },
  methods: {
    setStructure() {
      if (this.nameValue === '') {
        alert('Не введено имя свойства')
        return
      }
      this.structure.typeName = 'FormCheckbox'
      this.structure.id = Date.now()
      this.$emit('setStructure', this.structure)

      this.labelInput = ''
      this.keyLabelInput += 1
      this.keyNameValue += 1
      this.nameValue = ''
      this.structure = {namevalue: '',label: '',style: '', class: 'null-form-checkbox'}
    },
  },
  watch: {
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
  .setting-checkbox {
    position: relative;
    margin: 10px 5px;

    &__text {
      position: absolute;
      left: 15px;
      top: 0;
      font-size: 14px;
      width: 100%;
    }
  }
</style>
