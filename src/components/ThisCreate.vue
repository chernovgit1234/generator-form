<template>
    <div class="create">
      <div class="create__option option">
        <div class="option__body">
          <div class="option__dropdown">
            <this-dropdown 
              @choiseElement="(el) => choiseElement(el)"
              :options="options"
            ></this-dropdown>
          </div>
          <div class="option__info">
            <span class="option__text">Выбран элемент:</span>
            <span class="option__text-element">{{ elementOption}}</span> 
          </div>
        </div>
      </div>
      <div class="create__settings settings">
        <div class="settings__body">
          <div class="settings__content">
            <transition name="fade">
              <keep-alive>
                <component
                  :is="elementOption"
                  @setStructure="e => setStructure(e)"
                ></component>
              </keep-alive>
            </transition>
          </div>
        </div>
      </div>
      <div class="create__action">
        <this-button :disabled="Object.keys(this.structureElement).length === 0" @click="addElement()" :text="'Добавить'"></this-button>
      </div>
    </div>
  </template>
  
  <script>
  import ThisButton from '@/components/uiComponents/ThisButton.vue'
  import ThisDropdown from '@/components/uiComponents/ThisDropdown.vue'
  import Checkbox from '@/components/settingsComponents/SettingCheckbox.vue'
  import Input from '@/components/settingsComponents/SettingInput.vue'
  import Textarea from '@/components/settingsComponents/SettingTextarea.vue'
  import Dropdown from '@/components/settingsComponents/SettingDropdown.vue'
  import Button from '@/components/settingsComponents/SettingButton.vue'

  export default {
    name: 'HomeView',
    components: {
      ThisButton, ThisDropdown, Button, Textarea, Dropdown, Input, Checkbox
    },
    data() {
      return {
        elementOption: '',
        options: [
          {id: 1, name: 'Button'},
          {id: 2, name: 'Input'},
          {id: 3, name: 'Textarea'},
          {id: 4, name: 'Checkbox'},
          {id: 5, name: 'Dropdown'}
        ],
        structureElement: {}
      }
    },
    methods: {
      choiseElement(el) {
        this.elementOption = el
      },
      addElement() {
        const namevalue = this.structureElement.namevalue
        const structureByNamevalue = this.$store.getters.structureByNamevalue(namevalue)

        if (structureByNamevalue !== undefined && structureByNamevalue.typeName !== 'FormButton') {
          alert('Название свойства (поле namevalue) уже занято. Введите другое')
          return
        }
        this.$store.dispatch('addElement', this.structureElement)
      },
      setStructure(structure) {
        this.structureElement = structure
      }
    },
  }
  </script>
