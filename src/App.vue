<template>
  <div>
    <div class="head">
      <a href="#">
        <img src="./assets/images/logo.png" class="telogo" />
      </a>
      <img src="./assets/images/btn.png" id="toggle-sidebar" class="btn" />
    </div>
    <div class="sidebar" id="dowebok" v-cloak>
      <div class="sidebar-wrapper" id="sidebar-wrapper" v-cloak>
        <div class="navlogo">
          <a href="#">
            <img src="./assets/images/navlogo.png" />
          </a>
        </div>

        <div class="subNav">
          <a href="/">网站首页</a>
        </div>

        <div class="subNav">
          <router-link to="/gzj">
            <a>注册</a>
          </router-link>
        </div>

        <div class="subNav">
          <router-link to="/log">
            <a href>登录</a>
          </router-link>
        </div>

        <div class="subNav">
          <router-link to="/mine">
            <a href>我的</a>
          </router-link>
        </div>

        <div class="subNav">
          <router-link to="/cart">
          <el-badge :value="cartlength" class="item">
            <a href>购物车</a>
            </el-badge>
          </router-link>
        </div>

        <div class="subNav">
          <a href>品牌中心</a>
        </div>
        <div class="subNav">
          <h1>公主家</h1>
        </div>
        <ul class="navContent" style="display: none;">
          <li>
            <a href>护肤产品系列</a>
          </li>
          <li>
            <a href>喷雾</a>
          </li>
        </ul>
        <router-link to="/qmc">
          <div class="subNav">
            <a>仟佰宠</a>
          </div>
        </router-link>
        <div class="subNav">
          <a href>公主购</a>
        </div>
        <div class="subNav">
          <a href>荣誉证书</a>
        </div>
        <div class="subNav">
          <h1>品牌资讯</h1>
        </div>
        <ul class="navContent" style="display: none;">
          <li>
            <a href>集团新闻</a>
          </li>
        </ul>
        <router-link to="/connection">
          <div class="subNav">
            <a>联系我们</a>
          </div>
        </router-link>
      </div>
    </div>
    <div class="headbg"></div>
    <router-view />
    <div>
      <div class="ty footer">
        <div class="center">
          <div class="footnav">
            <a href="/wap_index.php?s=/News/news/qid/2.html">品牌资讯</a>|
            <a target="_blank" href="http://fangwei.vverp.com/m-shouquan.html">授权查询</a>|
            <a
              target="_blank"
              href="http://www.shenshougroup.com/index.php?m=Home&amp;c=Without&amp;a=Antifake2"
            >防伪查询</a>|
            <a href>官方号</a>|
            <br />
            <a href>宣传公告</a>|
            <a href>公主购</a>|
            <a href>仟佰宠</a>
          </div>
          <div class="foot">
            <p>©浙江神首生物科技有限公司所有 &nbsp; 技术支持：神首信息</p>
          </div>
        </div>
      </div>
      <div class="footbg"></div>
      <ul class="footfix">
        <li>
          <!-- <router-link to="/home"> -->
          <a href="/">
            <img src="./assets/images/side_icon01.png" />
            <h1>首页</h1>
          </a>
          <!-- </router-link> -->
        </li>
        <li>
          <router-link to="/gzj">
            <a href>
              <img src="./assets/images/side_icon02.png" />
              <h1>公主家</h1>
            </a>
          </router-link>
        </li>
        <li>
          <router-link to="/qmc">
            <a href>
              <img src="./assets/images/side_icon03.png" />
              <h1>仟佰宠</h1>
            </a>
          </router-link>
        </li>
        <li>
          <router-link to="/connection">
            <a href>
              <img src="./assets/images/side_icon04.png" />
              <h1>联系我们</h1>
            </a>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      menus: [
        {
          name: "home",
          path: "/home",
          text: "首页"
        },
        {
          name: "gzj",
          path: "/gzj",
          text: "公主家"
        },
        {
          name: "qmc",
          path: "/qmc",
          text: "阡陌宠"
        },
        {
          name: "conn",
          path: "/connection",
          text: "联系我们"
        }
      ]
    };
  },
  created(){
    console.log('store',this.$store)
  },
  computed:{
    cartlength(){
      return this.$store.state.cartlist.length
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  outline: none;
}
a {
  text-decoration: none;
}
img {
  display: block;
  border: none;
  max-width: 100%;
  margin: 0 auto;
}
.head {
  overflow: hidden;
  width: 100%;
  height: 63px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background: url(./assets/images/tbg.jpg) no-repeat center top #f4f4f4;
  a {
    display: block;
    padding-top: 17px;
  }
  .telogo {
    height: 36px;
    width: auto;
  }
  .btn {
    position: absolute;
    top: 0;
    right: 0;
    width: 50px;
    height: 50px;
    cursor: pointer;
  }
}
#dowebok {
  background-color: #292929;
}
.sidebar-wrapper {
  position: relative;
  height: 100%;
  overflow: auto;
}
.navlogo {
  width: 100%;
  overflow: hidden;
  margin-bottom: 10px;
  img {
    width: 100%;
  }
}
.subNav {
  cursor: pointer;
  padding: 10px;
  a {
    display: block;
    line-height: 20px;
    font-size: 14px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    padding-right: 15px;
  }
  h1 {
    display: block;
    line-height: 20px;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
    padding-right: 15px;
    background: url(./assets/images/span1.png) no-repeat center right;
  }
}
.navContent li a {
  display: block;
  padding: 10px 20px;
  line-height: 20px;
  font-size: 14px;
  color: #ccc;
}
.footer {
  background: #ebebeb;
  border-top: 1px solid #ddd;
  overflow: hidden;
  padding: 10px 0;
  text-align: center;
}
.ty {
  overflow: hidden;
  width: 100%;
}
.center {
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
}
.footnav {
  overflow: hidden;
  font-size: 12px;
  line-height: 25px;
  color: #666;
  a {
    color: #666;
    padding: 0 5px;
  }
}
.foot {
  line-height: 25px;
  font-size: 12px;
  color: #666;
  text-align: center;
}
.footbg {
  width: 100%;
  height: 60px;
  background: #fff;
}
.footfix {
  overflow: hidden;
  background: #fe7272;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 999;
  li {
    float: left;
    width: 25%;
    overflow: hidden;
    img {
      width: 30px;
      padding-top: 5px;
      margin: 0 auto;
    }
    a {
      display: block;
      border-left: 1px solid #fe8e8e;
    }
    h1 {
      font-size: 13px;
      line-height: 25px;
      height: 25px;
      text-align: center;
      font-weight: normal;
      color: #fff;
    }
  }
  li:first-child a {
    border: none;
  }
}
.subNav:hover {
  background: #a44e58;
}
[v-cloak] {
  display: none !important;
}
</style>
