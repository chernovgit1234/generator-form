<template>
  <div class="form-checkbox-wrapper">
    <div class="form-checkbox" :style="styles">
      <input
        type="checkbox"
        :id="idx"
        :style="styles"
        v-model="value"
        @input="inputHandler()"
      />
      <label :for="idx" :value="idx" class="form-checkbox__text">{{label}}</label>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'FormCheckbox',
  data() {
    return {
      value: ''
    }
  },
  methods: {
    inputHandler() {
      this.$emit('inputHandlerValue', this.value)
      this.$emit('inputHandlerNameValue')
    }
  },
  props: {
    label: {
      type: String
    },
    idx: {
      type: Number
    },
    styles: {
      type: String
    },
    namevalue: {
      type: String
    }
  },
  emits: ['inputHandlerValue', 'inputHandlerNameValue']
}
</script>

<style scoped lang="scss">
.form-checkbox-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .form-checkbox {
    display: flex;
    flex-direction: row;
    gap: 10px;

    &__text {
      font-family: 'RobotoLight';
      color: rgb(82, 80, 80) !important;
      font-size: 16px;
    }
  }
  </style>
  