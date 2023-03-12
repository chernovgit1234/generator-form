<template>
  <div class="form-input-wrapper">
    <div class="form-input" :style="styles">
      <span class="form-input__text">{{label}}</span>
        <input
          :type="type"
          :placeholder="placeholder"
          :style="styles"
          :maxlength="maxlength"
          class="null-form-input"
          v-model="value"
          @input="inputHandler()"
      />
      </div>
  </div>
  </template>
  
  <script>
  export default {
    name: 'FormInput',
    data() {
      return {
        value: ''
      }
    },
    emits: ['inputHandlerValue', 'inputHandlerNameValue'],
    methods: {
      inputHandler() {
        this.$emit('inputHandlerValue', this.value)
        this.$emit('inputHandlerNameValue')
      }
    },
    watch: {
      value(value) {
        this.value = value
      }
    },
    props: {
      type: {
        type: String
      },
      placeholder: {
        type: String
      },
      label: {
        type: String
      },
      styles: {
        type: String
      },
      namevalue: {
        
      },
      maxlength: {},
    }
  }
  </script>
  
  <style scoped lang="scss">
  .form-input-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .form-input {
    position: relative;

    &__text {
      font-family: 'UbuntuRegular';
      position: absolute;
      left: 0;
      top: -15px;
      color: rgb(82, 80, 80) !important;
    }
  }
  </style>
  