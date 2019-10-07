<template>
  <div>
    <div class="headbg"></div>
    <div class="ty">
      <div class="flexslider">
        <ul class="slides">
          <li>
            <a href="#">
              <img src="../assets/images/5cb6bfd44b07c.jpg" draggable="false" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="../assets/images/5cf4dc9bc4e3e.jpg" draggable="false" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="../assets/images/5cf4dc9c044a4.jpg" draggable="false" />
            </a>
          </li>
        </ul>
        
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
          <img class="css3" src="../assets/images/in01.jpg" />
        </div>
        <div class="yb01">
          <div class="tu">
            <img class="css3" src="../assets/images/in02.jpg" />
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
                <img src="../assets/images/in03.jpg" alt />
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
                <img src="../assets/images/inpenwu.jpg" alt />
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
              <img class="css3" src="../assets/images/penwu.jpg" />
            </a>
          </li>

          <li class="css3 xm">
            <a href="/wap_index.php?s=/Product/proinfo/id/206.html">
              <img class="css3" src="../assets/images/jinghua.png" />
            </a>
          </li>

          <li class="css3 xm" style="border-right:none;margin-top:-1px;">
            <a href="/wap_index.php?s=/Product/proinfo/id/200.html">
              <img class="css3" src="../assets/images/jiemian.jpg" />
            </a>
          </li>
          <li class="css3 xm">
            <a href="/wap_index.php?s=/Product/proinfo/id/204.html">
              <img class="css3" src="../assets/images/rishuang.jpg" />
            </a>
          </li>

          <li class="css3 xm">
            <a href="javascript:void(0);">
              <img class="css3" src="../assets/images/logo.jpg" />
            </a>
          </li>
          <li class="mg xm css3" style="border-right:none;">
            <a href="/wap_index.php?s=/Product/proinfo/id/201.html">
              <img class="css3" src="../assets/images/ruye.jpg" />
            </a>
          </li>
          <li class="css3 xm" style="border-bottom:none;">
            <a href="/wap_index.php?s=/Product/proinfo/id/202.html">
              <img class="css3" src="../assets/images/jinglu.jpg" />
            </a>
          </li>
          <li class="css3 xm" style="border-bottom:none;">
            <a href="/wap_index.php?s=/Product/proinfo/id/203.html">
              <img class="css3" src="../assets/images/yanshuang.jpg" />
            </a>
          </li>
          <li class="css3 xm" style="border-bottom:none;border-right: none;">
            <a href="/wap_index.php?s=/Product/proinfo/id/205.html">
              <img class="css3" src="../assets/images/mianmo.jpg" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
// import axios from "axios";
export default {};
</script>
<style lang="scss" >
.flexslider {
  position: relative;
  width: 100%;
  margin-bottom:0px;
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
.ty {
  overflow: hidden;
  width: 100%;
}
.center {
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
}
.headbg {
  width: 100%;
  height: 63px;
  background: #fff;
}
</style>