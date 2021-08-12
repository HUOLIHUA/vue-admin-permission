<template>
  <div class="top">
      <div class="right">
        <ul class="item-wrapper">
          <li class="item">
            <!-- <img class="tx" src="../../assets/images/touxiang.png"/> -->
            <el-button type="text" @click="onLoginOut">退出</el-button>
          </li>
        </ul>
          
      </div>
  </div>
</template>

<script>
export default {
  methods: {
    onLoginOut () {
      this.$store.dispatch('LogOut').then(() => {
        this.$router.replace({
          path: '/'
        })
      })
    }
  }
}
</script>

<style>
.top{
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  overflow: hidden;
  padding-right: 20px;
}
.top .right{
  float: right;
}
.item-wrapper{
  display: flex;
  align-items: center;
  
}
.item-wrapper .item{
  margin-left: 30px;
}
.tx{
  width: 30px;
  height: 30px;
  border-radius: 50%;
  vertical-align: middle;
  margin-right: 10px;
}
</style>