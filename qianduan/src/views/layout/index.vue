<template>
  <div class="container">
      <!-- 顶部 -->
      <div class="top-wrapper">
          <my-top/>
      </div>
      <!-- 菜单 -->
      <div class="menu-wrapper">
          <my-logo/>
          <my-menu/>
      </div>
      <!-- 主体 -->
      <div class="main-wrapper">
          <my-main/>
      </div>
  </div>
</template>

<script>
import myTop from './top'
import myMenu from './menu'
import myMain from './main'
import myLogo from './logo'
export default {
    components: {
        myTop,
        myMenu,
        myMain,
        myLogo
    }
}
</script>

<style lang="scss">
.container{
    position: relative;
    width: 100%;
    height: 100%;
}
.top-wrapper{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 80px;
    background-color: #ffffff;
    box-shadow: 0 3px 3px -3px rgba(0,0,0,0.3);
}
.menu-wrapper{
    position: absolute;
    left: 0;
    top: 0;
    width: 200px;
    height: 100%;
    background-color: #ffffff;
}
.main-wrapper{
    width: 100%;
    height: 100%;
    padding-top: 90px;
    padding-left: 210px;
    background-color: #f5f5f5;
}
</style>