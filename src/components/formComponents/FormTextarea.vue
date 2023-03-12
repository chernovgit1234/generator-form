<template>
  <div class="form-textarea-wrapper">
    <div class="form-textarea" :style="styles">
        <span class="form-textarea__text">{{label}}</span>
        <textarea
          class="null-form-textarea"
          :placeholder="placeholder"
          :maxlength="maxlength"
          :style="styles"
          v-model="value"
          @input="inputHandler()"
        ></textarea>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    name: 'FormTextarea',
    data() {
      return {
        text: '',
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
      namevalue: {
        type: String
      },
      styles: {
        type: String
      },
      maxlength: {},
    }
  }
</script>
  
<style scoped lang="scss">
  .form-textarea-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .form-textarea {
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
  