<template>
  <div>
    <h1>免费注册</h1>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="regForm" label-width="100px">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    var checkusername = async (rule, value, callback) => {
      let {data} = await this.$axios.get('http://localhost:3000/user/check',{
        params:{
          username:this.ruleForm.username
        }
      })
      if(data.code===0){
        callback(new Error("用户名已存在"));
      }else{
        callback()
      }
    };
    var validatePass = (rule, value, callback) => {
      console.log("validatePass", rule, value, callback);

      if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        password: "",
        checkPass: ""
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
        checkPass: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            validator: validatePass,
            trigger: "blur"
          }
        ],
        username: [
          {
            validator: checkusername,
            trigger: "blur"
          },
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
      this.$refs.regForm.validate(async (valid) => {
        if (valid) {
          //所有的验证条件符合
          let {username,password} = this.ruleForm;
          let {data} = await this.$axios.post('http://localhost:3000/user/reg',{
            username,password
          })
          console.log('data',data)
          if(data.code===1){
            this.$router.replace({name:'log',params:{username},query:{username}})
          }else{
            alert('注册失败')
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