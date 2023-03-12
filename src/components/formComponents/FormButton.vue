<template>
    <div class="form-button">
      <button
        :class="classb"
        :disabled="disabled"
        :type="type"
        @click="click()"
        :style="styles"
      >
      {{ nameb }}
    </button>
    </div>
  </template>
  <script>
  export default {
    name: 'FormButton',
    props: {
      nameb: {
        type: String
      },
      classb: {
        type: String
      },
      disabled: {
        type: Boolean
      },
      type: {
        type: String
      },
      styles: {
        type: String
      },
    },
    emits: ['submitForm', 'click'],
    methods: {
      click() {
        if (this.type === 'submit') {
          this.$emit('submitForm')
        } else {
          console.log('click')
          this.$emit('click')
        }
      },
    },
  }
  </script>
  
  <style scoped lang="scss">
  .form-button {
    display: flex;
    justify-content: center;
  }
  .form-button__btn {
    background-color: transparent;
  }
  </style>
  