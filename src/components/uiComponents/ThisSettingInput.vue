<template>
  <div>
    <input
      :value="modelx"
      :id="id"
      :type="type"
      :placeholder="placeholder"
      @input="event => input(event.target.value)"
      :maxlength="maxlength"
      :class="classx"
    />
  </div>
</template>
  
<script>
  export default {
    name: 'ThisInput',
    props: {
      type: {
        type: String
      },
      placeholder: {
        type: String
      },
      id: {
        type: String
      },
      modelx: {},
      classx: {},
      maxlength: {
        type: Number
      }
    },
    data() {
      return {
        value: ''
      }
    },
    methods: {
      input(e) {
        this.$emit('input', e)
      },
    },
    watch: {
      classx(val) {
        console.log('classx', val)
      }
    }
  }
</script>
  
<style scoped lang="scss">
  input[type="text"] {
    border: 1px solid #d4d2d2ea;
    padding: 5px 10px;
    border-radius: 4px;
  }
</style>
  