<template>
  <div class="form-dropdown-wrapper">
    <div class="form-dropdown" :style="styles">
      <b-dropdown 
        :text="textDropdown.length ? textDropdown: textDropdownDefault" 
        :style="styles" 
        class="dropdown"
      >
        <b-dropdown-item 
          v-for="(el, i) in options" :key="i"
            class="dropdown-button"
            @click="choiseElement(el.id)" 
          >
            {{el.name}}
          </b-dropdown-item>
      </b-dropdown>
      <label>{{label}}</label>
    </div>
  </div>
</template>
  
<script lang="js">
export default {
  name: 'ThisDropdown',
  props: {
    options: { 
      type: Array 
    },
    styles: { 
      type: String
    },
    defaultvalueid: { 
      type: Number 
    },
    label: {
      type: String
    },
    namevalue: {
      type: String
    }
  },
  data() {
    return {
      textDropdownDefault: 'Выберите элемент',
      textDropdown: '',
    }
  },
  watch: {
    defaultvalueid: {
      handler(val){
        for (let item of this.options) {
          if (val === item.id) {
            this.textDropdown = item.name
          }
        }
      },
      deep: true,
      immediate: true
    }
  },
  emits: ['inputHandlerValue', 'inputHandlerNameValue'],
  methods: {
    choiseElement(id) {
      for (let item of this.options) {
        if (id === item.id) {
          this.textDropdown = item.name
        }
      }

      this.$emit('inputHandlerValue', this.textDropdown)
      this.$emit('inputHandlerNameValue')
    },
  }
}
</script>
  
<style scoped lang="scss">
.form-dropdown-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.form-dropdown {
  position: relative;

  label {
    position: absolute;
    left: 0;
    top: -15px;
    font-family: UbuntuRegular;
    font-size: 14px;
    color: rgb(75, 70, 70);
  }
}
.dropdown {
  font-family: UbuntuRegular;
  min-width: 180px;
  width: auto;
}
.dropdown-button {
  display: block;
  background-color: transparent;
  padding: 4px;
  width: 100%;
  transition: all 0.3s ease 0s;
}
</style>