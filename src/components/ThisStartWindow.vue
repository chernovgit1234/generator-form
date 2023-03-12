<template>
    <div class="start-window">
      <div class="start-window__body">
        <div class="start-window__action">
            <this-button @click="loadStructure()" :text="'Загрузить структуру с сервера'"></this-button>
            <this-button @click="manuallyCreate()" :text="'Создать структуру вручную'"></this-button>
        </div>
        <div class="start-window__sctucture">
            <span class="start-window__text" v-if="!structureFromServer.length">Структура с сервера не загружена</span>
            <div class="start-window__map" v-else>
               <span class="start-window__text">Структура с сервера:</span>
               <pre>
                <code>
                    {{structureFromServer}}
                </code>
               </pre>
            </div>
        </div>
        <div class="start-window__action">
            <this-button :disabled="!structureFromServer.length" @click="generateFields()" :text="'Сгенерировать'"></this-button>
            <this-button :disabled="!structureFromServer.length" @click="customizeFields()" :text="'Предварительно кастомизировать'"></this-button>
        </div>
      </div>
      <div  v-if="showLoader" class="start-window__loader">
        <this-loader></this-loader>
      </div>
    </div>
  </template>
  
  <script>
  import ThisButton from '@/components/uiComponents/ThisButton.vue'
  import ThisLoader from '@/components/uiComponents/ThisLoader.vue'
  
  export default {
    name: 'StartWindow',
    components: {
        ThisButton, ThisLoader
    },
    mounted() {
        this.$router.push('/')
    },
    computed: {
      structureFromServer() {
        return this.$store.getters.preChemaFields
      },
      showLoader() {
        return this.$store.getters.showLoader
      }
    },
    methods: {
        loadStructure() {
            this.$store.dispatch('loadStructure')
        },
        generateFields() {
            this.$store.dispatch('generateFields')
            this.$store.dispatch('createObjectForm')
            this.$router.push('/form')
        },
        customizeFields() {
            this.$store.dispatch('generateFields')
        },
        manuallyCreate() {
            this.$router.push('/')
            this.$store.dispatch('manuallyCreate')
        }
    }
  }
  </script>
  
<style scoped lang="scss">
.start-window {
    position: relative;
    background-color: #363636dc;
    height: 100%;
    color: aliceblue;
    border: 1px solid rgb(255, 255, 255);
    &__body {
        margin-top: 100px;
    }

    &__action {
        display: flex;
        gap: 20px;
        justify-content: center;
        margin-bottom: 20px;
        margin-top: 20px;
    }

    &__sctucture {
        span {
            margin-bottom: 20px;
            font-family: UbuntuRegular;
            font-size: 25px;
            color: rgb(255, 255, 255);
        }
    }

    &__text {
       
    }

    &__map {
        color: rgb(62, 43, 114);
        pre {
            background-color: #e2cb4ada;
            max-height: 400px;
        }
    }

    &__loader {
        position: absolute;
        z-index: 300;
        display: flex;
        align-items: center;
        justify-content: center;
        inset: 0;
        background-color: #90a2b191;
        transition: all 0.5s ease 0s;
    }
}
</style>
  