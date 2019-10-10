<template>
  <div>
    <el-row :gutter="20" v-for="item in datalist" :key="item.id" style="margin-top:20px;width:100%;">
      <el-col :span="4">
        <img :src="item.imgurl" />
      </el-col>
      <el-col :span="16">
        <h4>{{item.name}}</h4>
        {{item.price}} &times;
        <el-input-number v-model="item.qty" size="mini" @change="changeQty" :min="1"></el-input-number>
      </el-col>
      <el-col :span="4">
          <el-button type="danger" icon="el-icon-delete" circle size="mini"></el-button>
      </el-col>
    </el-row>
    <el-row :gutter="20" style="width:100%;">
      <el-col :span="12">
        <el-button type="danger" icon="el-icon-delete" size="mini" style="text-align:right;margin-top:14px">清空购物车</el-button>
      </el-col>
      <el-col :span="12" style="text-align:right;margin-top:12px;" >
        总计：
        <span>{{totalPrice.toFixed(2)}}</span>
      </el-col>
    </el-row>
    <div style="text-align:right">
        <el-button type="success" icon="el-icon-s-finance">结算</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      datalist: [
        {
          id: "1",
          name: "huawei mate30 pro",
          imgurl:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3089410232,3830777459&fm=11&gp=0.jpg",
          price: 5998,
          qty: 10
        },
        {
          id: "2",
          name: "xiaomi9",
          imgurl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571131475&di=2df2d3a54a89db9e09952799acb25261&imgtype=jpg&er=1&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F8488db95efa140b9c50cb4615e2ca337a6981aa7.jpg",
          price: 2999,
          qty: 2
        },
        {
          id: "3",
          name: "onePlus9 pro",
          imgurl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570536784660&di=d4471f6edf73cace7d98fb05869a9277&imgtype=0&src=http%3A%2F%2Fimg13.360buyimg.com%2Fn1%2Fs450x450_jfs%2Ft28117%2F273%2F1288839750%2F66834%2F8ef15c40%2F5cdd22b8Nbc711aba.jpg",
          price: 3999,
          qty: 1
        }
      ]
    };
  },
  computed:{
      totalPrice(){
        //   let total =0;
        //   this.datalist.forEach(item=>{
        //       total += item.price * item.qty;
        //   })
        //   return total;
        return this.datalist.reduce((pre,item)=>{
            return pre + item.price*item.qty
        },0)
      }
  },
  methods: {
      changeQty(currentValue,oldValue){
          console.log(currentValue,oldValue)
      }
  }
};
</script>