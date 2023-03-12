
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
          <span class="setting__text">Название(<span class="setting__text-attr">label</span>)</span>
          <div class="setting__field">
            <this-input 
              :key="keyLabelInput"
              type="text"
              placeholder="Введите название"
              @input="w => labelDropdown = w"
              :maxlength="10"
            ></this-input>
          </div>
        </div>
        <div class="setting__item">
          <span class="setting__text">Значение по умолчанию</span>
          <div class="setting__field">
            <this-dropdown 
              :options="options"
              @choiseElement="(el) => nameOptionDefault = el"
              :key="keyNameOptionDefault"
            ></this-dropdown>
          </div>
        </div>
        <div class="setting__item">
          <span class="setting__text">Текст опции</span>
          <div class="setting__field">
            <this-input 
              type="text"
              placeholder="Введите название опции"
              @input="w => nameOption = w"
              :key="keyNameOption"
              :maxlength="10"
            ></this-input>
            <button @click="addOption()" class="setting__btn-add">
              <img class="setting__add" src="@/assets/icons/plus-circle-svgrepo-com.svg" alt="">
            </button>
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
        <div class="setting__example">
          <div class="setting-dropdown">
            <this-dropdown 
              :options="options"
              @choiseElement="(el) => nameOptionDefault = el"
              :defaultText="nameOptionDefault"
            ></this-dropdown>
            <span class="setting-dropdown__text">{{labelDropdown}}</span>
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
  name: 'SettingDropdown',
  components: {
    ThisInput, ThisDropdown, ThisButton
  },
  data() {
    return {
      options: [],
      labelDropdown: '',
      nameOption: '',
      nameOptionDefault: '',
      keyNameOption: 0,
      keyNameOptionDefault: 0,
      nameValue: '',
      keyNameValue: 0,
      keyLabelInput: 0,
      structure: {namevalue: '',options: [], style: '', defaultvalueid: '', label: ''}
    }
  },
  methods: {
    addOption() {
      this.options.push({id: Date.now(), name: this.nameOption})
      this.structure.options.push({id: Date.now(), name: this.nameOption})
      this.keyNameOption++
      this.nameOption = ''
    },
    setStructure() {
      if (this.nameValue === '') {
        alert('Не введено имя свойства')
        return
      }

      if (this.options.length) {
        this.structure.typeName = 'FormDropdown' 
        this.$emit('setStructure', this.structure)

        this.nameOption = ''
        this.nameOptionDefault = ''
        this.keyNameOption++
        this.nameValue = ''
        this.keyNameValue++
        this.keyNameOptionDefault++
        this.structure = {namevalue: '',options: [], style: '', defaultvalueid: '', label: ''}

      } else {
        alert( "Необходимо добавить опции для поля Dropdown" );
      }
      
    },
  },
  watch: {
    nameOptionDefault(val) {
      for (let item of this.options) {
        if (val === item.name) {
          this.structure.defaultvalueid = item.id
        }
      }
    },
    labelDropdown(val) {
      this.structure.label = val
    },
    nameValue(val) {
      this.structure.namevalue = val
    }
  }
}
</script>

<style scoped lang="scss">
  .setting-dropdown {
    position: relative;
    margin: 10px 5px;

    &__text {
      position: absolute;
      left: 0;
      top: -15px;
    }
  }
</style>
