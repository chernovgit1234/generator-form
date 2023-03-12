<template>
    <div class="header">
        <nav class="header__menu">
            <ul class="header__list">
                <li class="header__item">
                    <router-link class="header__link" :to="'/'"><span>Главная</span></router-link>
                </li>
                <li class="header__item">
                    <router-link class="header__link" :to="'/test1'"><span>Пример формы 1</span></router-link>
                </li>
                <li class="header__item">
                    <router-link class="header__link" :to="'/test2'"><span>Пример формы 2</span></router-link>
                </li>
            </ul>
        </nav>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'HomeView',
    components: {
    }
  }
  </script>
  
<style scoped lang="scss">
.header {
    display: flex;
    height: 100%;

&__menu {
    margin: 0 auto;
    width: 1200px;
    display: flex;
    align-items: center;
}

&__list {
    display: flex;
    gap: 40px;
}

&__item {
    padding: 5px;
}

&__link {
  span {
    font-size: 16px;
    color: rgb(255, 255, 255);
    font-family: UbuntuRegular;
  }
}
}
</style>
  