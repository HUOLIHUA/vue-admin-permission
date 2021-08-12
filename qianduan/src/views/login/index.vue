<template>
  <div class="bg">
    <div class="login-wrapper">
      <!-- <img class="touxiang" src="../../assets/images/touxiang.png"> -->
      <el-form ref="form" :model="formdata">
        <el-form-item prop="username">
          <el-input v-model="formdata.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="formdata.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item >
          <el-button type="danger" class="login-btn" @click="onLogin">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formdata: {
        username: "admin",
        password: "123456"
      },
      rules: {
        username: [
          { require: true, message: '请输入用户名', trigger: 'blur'}
        ],
        password: [
          { require: true, message: '请输入密码', trigger: 'blur'}
        ]
      }
    }
  },
  methods:{
    onLogin () {
      this.$refs['form'].validate(valid => {
        if(valid){
          this.$store.dispatch('LOGIN', this.formdata).then(() => {
            this.$router.push({
              path: '/home'
            })
          })
        }
      })
    }
  }
};
</script>

<style lang="scss">
.touxiang{
  width: 100px;
    height: 100px;
    border-radius: 50%;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 20px;
}
.bg{
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #EA6F5A;
  // background: url('../../assets/bg.jpg') no-repeat 100% 100%;
}
.login-wrapper{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  background-color: rgba(255,255,255,0.5);
}
.login-btn{
  width: 100%;
}
</style>