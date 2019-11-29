<template>
    <div id="app">
        <router-view/>
        <ul class="footer-bar">
            <li class="footer-bar-item">
                <router-link to="/">首页</router-link>
            </li>
            <li class="footer-bar-item">
                <router-link to="/category">分类</router-link>
            </li>
            <li class="footer-bar-item">
                <router-link to="/cart">购物车</router-link>
            </li>
            <li class="footer-bar-item">
                <router-link to="/profile">我的</router-link>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

//底部栏
.footer-bar {
    position: fixed;
    bottom: 0;
    display: flex;
    width: 100%;
    height: 1rem;
    background-color: #eee;
    &-item {
        display: flex;
        flex-grow: 1;
        justify-content: center;
        align-items: center;
    }
}
</style>
