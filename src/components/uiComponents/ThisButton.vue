<template>
  <div>
    <button 
      @click="clickBtn()" 
      class="my-btn"
      :disabled="disabled"
    >
      {{ text }}
    </button>
  </div>
</template>
  
<script>
  export default {
    name: 'ThisButton',
    props: {
      text: {
        type: String
      },
      disabled: {
        type: Boolean
      }
    },
    data() {
      return {
        status: 'not_accepted'
      }
    },
    methods: {
      clickBtn() {
        this.$emit('click')
      }
    }
  }
</script>
  
<style scoped lang="scss">
  .my-btn {
    border: 1px solid rgba(44, 44, 44, 0.226);
    padding: 8px 12px;
    border-radius: 2px;
    background-color: whitesmoke;
    transition: background-color 0.3s ease 0s;
    font-family: UbuntuRegular;
    color: #262828; 
      
    &:hover{
      background-color: white;
    }
  }

  button[disabled] {
    background-color: #f3f3f3d2;
    color: #a7a7a7;
    pointer-events: none;
    cursor: default;
  }
</style>
  