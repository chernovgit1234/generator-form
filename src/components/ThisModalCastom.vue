<template>
  <div class="modal-custom">
    <div class="modal-custom__body">
      <span class="modal-custom__text">Кастомизация вручную</span>
      <button @click="closePopup">
        <img class="modal-custom__close" src="@/assets/icons/close-svgrepo-com.svg" alt="svg">
      </button>
      <div class="modal-custom__content">
        <slot :styles="styles" name="field">Поля не обнаружено</slot>
      </div>
      <div class="modal-custom__options options">
        <div class="options__location">
          <div class="options__item">
            <button class="options__button" @click="moveToLeft()">
              <img class="options__img" src="@/assets/icons/arrow-left-circle-svgrepo-com.svg" alt="com">
            </button>
            <span class="options__text">влево</span>
          </div>
          <div class="options__item" v-if="centre">
            <button class="options__button" @click="centered()">
              <img class="options__img" src="@/assets/icons/four-converging-arrows-at-the-center-svgrepo-com.svg" alt="com">
            </button>
            <span class="options__text">по центру</span>
          </div>
          <div class="options__item" v-else>
            <button class="options__button" @click="fullExpand()">
              <img class="options__img" src="@/assets/icons/double-arrow-svgrepo-com.svg" alt="com">
            </button>
            <span class="options__text">на всю ширину</span>
          </div>
          
          <div class="options__item">
            <button class="options__button" @click="moveToRight()">
              <img style="transform: rotate(-180deg);" class="options__img" src="@/assets/icons/arrow-left-circle-svgrepo-com.svg" alt="com">
            </button>
            <span class="options__text">вправо</span>
          </div>
        </div>
        <div v-if="typeNameById !== 'FormDropdown' && typeNameById !== 'FormCheckbox'" class="options__color">
          <div class="options__color-item">
            <verte class="options__color-picker" picker="wheel" model="rgb" @input="e => changeColor(e)"></verte>
            <span class="options__color-text">Цвет текста</span>
          </div>
          <div class="options__color-item">
            <verte class="options__color-picker" picker="wheel" model="rgb" @input="e => changeBackgroundColor(e)"></verte>
            <span class="options__color-text">Цвет фона</span>
          </div>
          <div class="options__color-item">
            <verte class="options__color-picker" picker="wheel" model="rgb" @input="e => changeBorderColor(e)"></verte>
            <span class="options__color-text">Цвет границ</span>
          </div>
        </div>
      </div>
      <div class="modal-custom__actions">
        <button class="modal-custom__button null-btn" @click="saveStructure()">Сохранить</button>
        <button class="modal-custom__button null-btn" @click="deleteStructure()">Удалить</button>
      </div>
    </div>
  </div>
</template>
  
<script>
  export default {
    name: 'PopupCastom',
    data() {
      return {
        stylesObject: {background: null, location: null, color: null, borderColor: null},
        styles: '',
        centre: false,
        stylesColor: '',
        stylesBackColor: '',
        stylesLocation: ''
      }
    },
    computed: {
      styleById() {
        return this.$store.getters.styleById
      },
      typeNameById() {
        return this.$store.getters.typeNameById
      },
    },
    mounted() {
      const styleArray = this.styleById.split(';')
      styleArray.forEach(item => {
        if (item.includes('margin') || item.includes('width')) {
          this.stylesObject.location = `${item};`
        } else if (item.includes('background-color')) {
          this.stylesObject.background = `${item};`
        } else if (item.includes('border-color')) {
          this.stylesObject.borderColor = `${item};`
        } else if (item.includes('color')) {
          this.stylesObject.color = `${item};`
        } 
      })
      
      this.checkStylesObject()
    },
    methods:  {
      checkStylesObject() {
        var newStyles = ''
        for (const value of Object.values(this.stylesObject)) {
          if (value !== null) {
            newStyles += `${value}`
          }
        }

        this.styles = newStyles
      },
      changeColor(e) {
        if (e !== 'rgb(0,0,0)') {
          this.stylesObject.color = `color:${e};`
          this.checkStylesObject()
        }
      },
      changeBorderColor(e) {
        if (e !== 'rgb(0,0,0)') {
          this.stylesObject.borderColor = `border-color:${e};`
          this.checkStylesObject()
        }
      },
      changeBackgroundColor(e) {
        if (e !== 'rgb(0,0,0)') {
          this.stylesObject.background = `background-color:${e};`
          this.checkStylesObject()
        }
      },
      closePopup() {
        this.$emit('closePopup')
      },
      moveToLeft() {
        this.stylesObject.location = 'margin-right: auto;'
        this.checkStylesObject()
      },
      moveToRight() {
        this.stylesObject.location = 'margin-left: auto;'
        this.checkStylesObject()
      },
      fullExpand() {
        this.centre = true
        this.stylesObject.location = 'width: 100%;'
        this.checkStylesObject()
      },
      centered() {
        this.centre = false
        this.stylesObject.location = 'width: auto;'
        this.checkStylesObject()
      },
      saveStructure() {
        this.$store.dispatch('saveStructure', this.styles)
      },
      deleteStructure() {
        this.$store.dispatch('deleteStructure')
        this.closePopup()
      }
    },
  }
</script>
  
<style scoped lang="scss">
  .modal-custom { 
  position: absolute;
  padding: 45px 45px 25px 45px;
  transform: translateX(-50px);
  background-color: rgba(59, 59, 59, 0.973);
  border-radius: 8px;
  z-index: 100;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(80, 47, 34, 0.2);
  
  &__body {
    display: flex;
    flex-direction: column;
  }

  &__content {
    border: 1px dashed rgb(231, 231, 231);
    transition: background-color 0.5s;
    border-radius: 2px;
    min-width: 500px;
    padding: 5px 0;
    margin: 5px 0;
    color: #e9e9e9;
  }

  &__text {
    position: absolute;
    left: 10px;
    top: 10px;
    text-align: center;
    color: #e9e9e9;
  }

  &__actions {
    display: flex;
    justify-content: center;
    gap: 20px;  
  }

  &__button {
    font-family: 'UbuntuRegular';
    &:hover {
      background-color: #dbdada;
    }
  }

  &__close {
    position: absolute;
    right: 5px;
    top: 5px;
    border-radius: 100%;
    fill: aliceblue;
    max-width: 25px;
    max-height: 25px;
    object-fit: cover;
    background-color: #ffffff;

    &:hover {
      background-color: #e9e9e9;
    }
  }
  .options {
    display: flex;
    flex-direction: column;
    color: #e9e9e9;

    &__color {
      display: flex;
      margin-bottom: 20px;
      gap: 10px;
    }

    &__color-item {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    &__color-picker {
      
    }

    &__color-text {
       
    }

    &__location {
      margin-bottom: 10px;
      min-width: 100%;
      left: 0px;
      
      bottom: 20px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    } 

    &__item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 5px;

    }

    &__button {
      background-color: transparent;
    }

    &__img {
      margin: 0 auto;
      max-width: 35px;
      max-height: 35px;
    }

    &__text {
      color: #e9e9e9;
    }
  }
}
</style>