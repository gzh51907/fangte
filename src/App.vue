<template>
  <div>
    <div class="head">
      <a href="#">
        <img src="./assets/images/logo.png" class="telogo" />
      </a>
      <img src="./assets/images/btn.png" id="toggle-sidebar" class="btn" />
    </div>
    <router-view/>
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
          <router-link to="/home">
          <a href>
            <img src="./assets/images/side_icon01.png" />
            <h1>首页</h1>
          </a>
          </router-link>
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
// $(function() {
//   $(".flexslider").flexslider({
//     directionNav: true,
//     pauseOnAction: false,
//     directionNav: false,
//     touch: true,
//     move: 1
//   });
// });

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
  components: {}
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
    background: #FFF;
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
</style>
