<template>
  <div class="home">
    <div class="home__create">
      <this-create></this-create>
    </div>
    <div class="home__generate">
      <this-generate-form></this-generate-form>
    </div>
  </div>
</template>

<script>    
import schemaFields from '@/schema/schema.json'
import ThisGenerateForm from '@/components/ThisGenerateForm.vue'
import ThisCreate from '@/components/ThisCreate.vue'

export default {
  name: 'HomeView',
  components: {
    ThisGenerateForm, ThisCreate
  },
  computed: {
    schemafields() {
      return schemaFields
    }
  }
}
</script>

<style scoped lang="scss">
 .home {
    padding: 10px;
    display: flex;
    
    gap: 50px;
    height: 90vh;

    &__create {
      flex: 1;
    }

    &__generate {
      flex: 1;
    }
  }

</style>
