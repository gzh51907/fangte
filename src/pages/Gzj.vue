<template>
  <div>
    <div class="nybn">
      <img src="../assets/images/pbanner.jpg" />
    </div>
    <div class="ty min">
      <div class="nynav">
        <div
          class="swiper-container swiper-container-horizontal swiper-container-free-mode swiper-container-android"
        >
          <ul class="swiper-wrapper" style="transform: translate3d(0px, 0px, 0px);">
            <li class="swiper-slide swiper-slide-active" style="width: 132px; margin-right: 2px;">
              <a href="/wap_index.php?s=/Product/product/id/12.html">
                <img src="../assets/images/5a603f2852d7f.png" />
                <h1>护肤产品系列</h1>
              </a>
            </li>
            <li class="swiper-slide swiper-slide-next" style="width: 132px; margin-right: 2px;">
              <a href="/wap_index.php?s=/Product/product/id/16.html">
                <img src="../assets/images/5cb5a6f206260.png" />
                <h1>喷雾</h1>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <ul class="nyproduct">
        <li>
          <a href="/wap_index.php?s=/Product/proinfo/id/240.html">
            <img src="../assets/images/5cb582186241c.jpg" />
            <h1>FULLERENES REPAIR BEAUTY SPRAY</h1>
            <span>富勒烯修颜美肌喷雾</span>
          </a>
        </li>
        <li>
          <a href="/wap_index.php?s=/Product/proinfo/id/206.html">
            <img src="../assets/images/5cf4da85893b5.jpg" />
            <h1>SHINING MOIDTURE ESSENCE</h1>
            <span>焕采皙颜精华液</span>
          </a>
        </li>
        <li>
          <a href="/wap_index.php?s=/Product/proinfo/id/200.html">
            <img src="../assets/images/5bbc3cc766aec.jpg" />
            <h1>GENTLE CLEANSING GEL</h1>
            <span>舒颜净透洁面凝胶</span>
          </a>
        </li>
        <li>
          <a href="/wap_index.php?s=/Product/proinfo/id/201.html">
            <img src="../assets/images/5bbc3ce57b99d.jpg" />
            <h1>ACTIVE HYDRA-GEL</h1>
            <span>水润亮颜保湿晶露</span>
          </a>
        </li>
        <li>
          <a href="/wap_index.php?s=/Product/proinfo/id/202.html">
            <img src="../assets/images/5bbc3cb76c817.jpg" />
            <h1>REPAIR ACTIVE LOTION</h1>
            <span>焕活生机修护乳液</span>
          </a>
        </li>
        <li>
          <a href="/wap_index.php?s=/Product/proinfo/id/203.html">
            <img src="../assets/images/5bbc3cad759c1.jpg" />
            <h1>ANTI-WRINKLE FIRMING EYE CREAM</h1>
            <span>凝时肌透紧致眼霜</span>
          </a>
        </li>
      </ul>
      <!--翻页-->
      <div class="pager">
        8 条记录 1/2 页
        <a href="###">上一页</a>
        <a href="/wap_index.php?s=/Product/product/p/2.html">下一页</a>
        <span class="current">1</span>
        <a href="/wap_index.php?s=/Product/product/p/2.html">2</a>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.min {
  padding: 0;
  background: #f9f9f9;
  overflow: hidden;
}
.ty {
  overflow: hidden;
  width: 100%;
}
.swiper-container-free-mode > .swiper-wrapper {
  -webkit-transition-timing-function: ease-out;
  -o-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
  margin: 0 auto;
}
.nynav {
  overflow: hidden;
  margin: 0px auto;
  li {
    float: left;
    background: #fff;
    a {
      display: block;
      padding: 10px 5px;
      text-align: center;
    }
    img {
      width: 30px;
      height: 30px;
      max-width: none;
    }
    h1 {
      color: #666;
      font-size: 13px;
      line-height: 25px;
      font-weight: normal;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      height: 25px;
    }
  }
}
.swiper-container {
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
}
.nyproduct {
  overflow: hidden;
  li {
    overflow: hidden;
    margin-bottom: 20px;
    a {
      display: block;
      overflow: hidden;
    }
    img {
      width: 100%;
      margin-bottom: 10px;
    }
    h1 {
      display: none;
      font-size: 20px;
      color: #666;
      font-family: "First";
      line-height: 30px;
      text-align: center;
      font-weight: normal;
      text-transform: uppercase;
      margin: 0 5%;
    }
    span {
      display: block;
      margin: 5px auto;
      width: 128px;
      border: 1px solid #ddd;
      line-height: 28px;
      font-size: 14px;
      text-align: center;
      color: #666;
    }
  }
}
.pager {
  overflow: hidden;
  line-height: 30px;
  font-size: 12px;
  color: #666;
  padding: 10px;
  text-align: right;
  border-top: 1px solid #ddd;
  margin-top: 10px;
  a {
    display: inline-block;
    padding: 0 10px;
    line-height: 28px;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin: 5px 1px;
    color: #666;
  }
  span {
    border: 1px solid #a44e58;
    background: #a44e58;
    color: #fff;
    line-height: 28px;
    padding: 0 10px;
    margin: 5px 1px;
    display: inline-block;
    border-radius: 5px;
  }
}
</style>