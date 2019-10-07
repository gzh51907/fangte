<template>
  <div>
    <div class="head">
      <a href="#">
        <img src="./assets/images/logo.png" class="telogo" />
      </a>
      <img src="./assets/images/btn.png" id="toggle-sidebar" class="btn" />
    </div>
    <div class="ty">
      <div class="flexslider">
        <ul class="slides">
          <li>
            <a href="#">
              <img src="./assets/images/5cb6bfd44b07c.jpg" draggable="false" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./assets/images/5cf4dc9bc4e3e.jpg" draggable="false" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./assets/images/5cf4dc9c044a4.jpg" draggable="false" />
            </a>
          </li>
        </ul>
        <ol class="flex-control-nav flex-control-paging">
          <li>
            <a>1</a>
          </li>
          <li>
            <a>2</a>
          </li>
          <li>
            <a>3</a>
          </li>
        </ol>
      </div>
    </div>

    <div class="ty" id="wpt01">
      <div class="center">
        <div class="in01 intitle">
          <h2 class="css3 sm">明星代言</h2>
          <span class="css3 xm">celebrity endorsement</span>
          <h5 class="css3 left">
            公主家品牌形象代言人由人气偶像汪东城(Jiro Wang)担任。
            <br />王子与公主牵手演绎“外在生活轻松，内在心灵高贵”护肤新理念。
          </h5>
        </div>
        <div class="zb01">
          <img class="css3" src="./assets/images/in01.jpg" />
        </div>
        <div class="yb01">
          <div class="tu">
            <img class="css3" src="./assets/images/in02.jpg" />
          </div>
        </div>
      </div>
    </div>
    <div class="ty" id="wpt02">
      <div class="center powz">
        <div class="in02 intitle">
          <h2>品牌理念</h2>
          <span>Brand concept</span>
          <h5>
            公主家能让你听从内心的声音,回归简单、自然的生活，
            <br />追求心灵上的奢侈，成为美丽、智慧与坚定的现代都市女性。
          </h5>

          <div class="bindbg">
            <div class="bindimg css3 right">
              <a href="/wap_index.php?s=/About/about.html">
                <img src="./assets/images/in03.jpg" alt />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ty" id="wpt03">
      <div class="center powz">
        <div class="in02 intitle">
          <h2>新品上市</h2>
          <span>new Product listing</span>
          <div class="bindbg">
            <div class="bindimg css3 right">
              <a href="/wap_index.php?s=/Product/proinfo/id/206.html">
                <img src="./assets/images/inpenwu.jpg" alt />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ty" id="wpt04">
      <div class="center">
        <div class="in03 intitle">
          <h2>产品系列</h2>
          <span>Product display</span>
          <h5></h5>
        </div>
        <ul class="indexpro">
          <li class="css3 xm">
            <a href="/wap_index.php?s=/Product/proinfo/id/240.html">
              <img class="css3" src="./assets/images/penwu.jpg" />
            </a>
          </li>

          <li class="css3 xm">
            <a href="/wap_index.php?s=/Product/proinfo/id/206.html">
              <img class="css3" src="./assets/images/jinghua.png" />
            </a>
          </li>

          <li class="css3 xm" style="border-right:none;margin-top:-1px;">
            <a href="/wap_index.php?s=/Product/proinfo/id/200.html">
              <img class="css3" src="./assets/images/jiemian.jpg" />
            </a>
          </li>
          <li class="css3 xm">
            <a href="/wap_index.php?s=/Product/proinfo/id/204.html">
              <img class="css3" src="./assets/images/rishuang.jpg" />
            </a>
          </li>

          <li class="css3 xm">
            <a href="javascript:void(0);">
              <img class="css3" src="./assets/images/logo.jpg" />
            </a>
          </li>
          <li class="mg xm css3" style="border-right:none;">
            <a href="/wap_index.php?s=/Product/proinfo/id/201.html">
              <img class="css3" src="./assets/images/ruye.jpg" />
            </a>
          </li>
          <li class="css3 xm" style="border-bottom:none;">
            <a href="/wap_index.php?s=/Product/proinfo/id/202.html">
              <img class="css3" src="./assets/images/jinglu.jpg" />
            </a>
          </li>
          <li class="css3 xm" style="border-bottom:none;">
            <a href="/wap_index.php?s=/Product/proinfo/id/203.html">
              <img class="css3" src="./assets/images/yanshuang.jpg" />
            </a>
          </li>
          <li class="css3 xm" style="border-bottom:none;border-right: none;">
            <a href="/wap_index.php?s=/Product/proinfo/id/205.html">
              <img class="css3" src="./assets/images/mianmo.jpg" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- <ul>
      <li v-for="item in menus" :key="item.name">
        <router-link :to="item.path">{{item.text}}</router-link>
      </li>
    </ul>
    <router-view />-->
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
          <a href>
            <img src="./assets/images/side_icon01.png" />
            <h1>首页</h1>
          </a>
        </li>
        <li>
          <a href>
            <img src="./assets/images/side_icon02.png" />
            <h1>公主家</h1>
          </a>
        </li>
        <li>
          <a href>
            <img src="./assets/images/side_icon03.png" />
            <h1>仟佰宠</h1>
          </a>
        </li>
        <li>
          <a href>
            <img src="./assets/images/side_icon04.png" />
            <h1>联系我们</h1>
          </a>
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
.flexslider {
  position: relative;
  width: 100%;
  .slides {
    position: relative;
    z-index: 1;
    overflow: hidden;
    width: 100%;
  }
  .flex-control-nav {
    position: absolute;
    bottom: 10px;
    z-index: 2;
    width: 100%;
    text-align: center;
  }
  .flex-control-nav {
    position: absolute;
    bottom: 10px;
    z-index: 2;
    width: 100%;
    text-align: center;
    li {
      display: inline-block;
      width: 10px;
      height: 10px;
      margin: 0 5px;
      *display: inline;
      zoom: 1;
      overflow: hidden;
      border-radius: 50%;
    }
    .flex-active {
      background: #a44e58;
    }
  }
}
.intitle h2 {
  text-align: center;
  font-weight: normal;
  padding: 10px 0;
  position: relative;
  font-size: 1rem;
  margin-top: 20px;
}
.intitle h2::after {
  content: "";
  display: inline-block;
  width: 40px;
  height: 2px;
  background-color: #383838;
  position: absolute;
  bottom: 0px;
  left: 50%;
  margin-left: -20px;
}
.intitle span {
  text-transform: uppercase;
  font-size: 12px;
  line-height: 2.2rem;
  display: block;
  text-align: center;
}
.intitle h5 {
  text-align: center;
  line-height: 2rem;
  font-size: 12px;
  color: #868686;
}
.zb01 {
  width: 50%;
  margin-top: 0px;
  position: relative;
  overflow: hidden;
  float: left;
  img {
    width: 100%;
  }
}
.tu {
  margin-top: 0px;
  position: relative;
  overflow: hidden;
  min-height: 120px;
  img {
    float: right;
    height: auto;
    width: 100%;
    max-width: none;
  }
}
.indexpro {
  overflow: hidden;
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  li {
    overflow: hidden;
    position: relative;
    width: 33%;
    height: 100%;
    border-bottom: 4px solid #fff;
    border-right: 4px solid #fff;
    box-sizing: border-box;
    img {
      width: 100%;
      height: auto;
    }
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
