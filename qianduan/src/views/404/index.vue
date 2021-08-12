<template>
  <div class="one">
      <p>这里是404页面</p>
      <el-button type="primary" @click="onBack">返回上页</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    onBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style>
.one{
    width: 100%;
    height: 100%;
    text-align: center;
    padding-top: 200px;
    font-size: 36px;
}

</style>