<template>
  <div>
    <b-dropdown id="dropdown" :text="textDropdown" class="dropdown" :disabled="typeCreateStructure === 'dowload'">
      <b-dropdown-item 
        @click="choiseElement(el.name);" 
        class="dropdown-button"
        v-for="(el, i) in this.options" :key="i"
      >
      {{el.name}}
      </b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script lang="js">
export default {
  name: 'ThisDropdown',
  props: {
    options: {
      type: Array
    },
    defaultText: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      option: ''
    }
  },
  computed: {
    textDropdown() {
      if (this.defaultText !== '') {
        return this.defaultText
      } else {
        return this. option ? this.option : 'Выберите элемент'
      }
    },
    typeCreateStructure() {
      return this.$store.getters.typeCreateStructure
    }
  },
  emits: {
    choiseElement: {}
  },
  methods: {
    choiseElement(el) {
      this.option = el
      this.$emit('choiseElement', el)
    }
  }
}
</script>

<style scoped lang="scss">
  .dropdown {
    font-family: UbuntuRegular;
    background-color: #fff;
    min-width: 180px;
  }
  .dropdown-button {
    display: block;
    background-color: transparent;
    padding: 4px;
    width: 100%;
    transition: all 0.3s ease 0s;
  }
</style>
