<template>
  <div>
    <h1>登录</h1>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="logForm" label-width="100px">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="下次免登录">
        <el-switch v-model="ruleForm.mdl"></el-switch>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
        mdl: true
      },
      rules: {
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 12,
            message: "密码长度必须为 6 到 12 个字符",
            trigger: "blur"
          }
        ],
        username: [
          {
            required: true,
            message: "请输入用户名",
            // validator: checkusername,
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    submitForm() {
      
      this.$refs.logForm.validate(async valid => {
        if (valid) {
          //所有的验证条件符合
          let { username, password, mdl } = this.ruleForm;
          let { data } = await this.$axios.get(
            "http://localhost:3000/user/login",
            {
              params: {
                username,
                password,
                mdl
              }
            }
          );

          console.log("data", data);
          if (data.code === 1) {
            let { targetUrl } = this.$route.query;
            this.$router.replace({
              path: targetUrl || "/mine",
              params: { username },
              query: { username }
            });
            //把token写入localstorage
            localStorage.setItem("Authorization", data.data);
          } else {
            alert("用户名或者密码错误");
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>