<template>
  <div class="setting">
    <div class="setting__body">
      <div class="setting__settings">
        <div class="setting__item hr-bottom fw-bold">
          <span class="setting__text">Аттрибут</span>
          <span class="setting__text">Настройка</span>
        </div>

        <div class="setting__item">
          <span class="setting__text">Отключение кнопки (<span class="setting__text-attr">disabled</span>)</span>
          <div class="setting__field">
            <this-checkbox :key="keyDisabledButton" @change="e => disabledButton = e"></this-checkbox>
          </div>
        </div>

        <div class="setting__item">
          <span class="setting__text">Тип кнопки (<span class="setting__text-attr">type</span>)</span>
          <div class="setting__field">
            <this-dropdown 
              :options="optionsTypeButton"
              @choiseElement="(el) => typeButton = el"
              :defaultText="typeButton"
            ></this-dropdown>
          </div>
        </div>

        <div class="setting__item">
          <span class="setting__text">Текст кнопки (<span class="setting__text-attr">name</span>)</span>
          <div class="setting__field">
            <this-input 
              type="text"
              placeholder="Введите текст кнопки"
              @input="w => nameButton = w"
              :key="keyInputNameButton"
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
        <div class="setting__example">
          <button 
            class="null-btn"
            :type="typeButton"
            :disabled="disabledButton"
          >
          {{nameButton}}
          </button>
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
import ThisCheckbox from '@/components/uiComponents/ThisSettingCheckbox.vue'
import ThisDropdown from '@/components/uiComponents/ThisDropdown.vue'
import ThisButton from '@/components/uiComponents/ThisButton.vue'

export default {
  name: 'SettingButton',
  components: {
    ThisInput, ThisDropdown, ThisCheckbox, ThisButton
  },
  mounted() {
    this.disabledButton = false
  },
  data() {
    return {
      optionsTypeButton: [
        {id: 1, name: 'button'},
        {id: 2, name: 'submit'}
      ],
      typeButton: 'button',
      disabledButton: 'false',
      nameButton: 'default name',
      keyDisabledButton: 0,
      keyInputNameButton: 0,
      structure: {style: '', class: 'null-form-btn',type: 'button', name: 'default name', disabled: false}
    }
  },
  methods: {
    setStructure() {
      this.structure.typeName = 'FormButton' 
      this.$emit('setStructure', this.structure)

      this.disabledButton = false
      this.typeButton = 'button'
      this.nameButton = 'default name'
      this.keyDisabledButton += 1
      this.keyInputNameButton += 1
      this.structure = {style: '', class: 'null-form-btn',type: 'button', name: 'default name', disabled: false}
    },

  },
  watch: {
    typeButton(val) {
      this.structure.type = val
    },
    bindByForm(val) {
      if (val === true) {
        val ='form-id'
      }
      this.structure.form = val 
    },
    disabledButton(val) {
      this.structure.disabled = val
    },
    nameButton(val) {
      this.structure.name = val
    }
  }
}
</script>
