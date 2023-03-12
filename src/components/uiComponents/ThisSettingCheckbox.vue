<template>
  <div>
    <input
      type="checkbox"
      @change="event => change(event.target.checked)"
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
      }
    },
    data() {
      return {
        value: ''
      }
    },
    methods: {
      change(e) {
        this.$emit('change', e)
      }
    }
  }
</script>

  