<template>
  <div>
    <img src="../assets/images/banner.jpg" alt="仟佰宠" />
    <div style="margin-top:50px;margin-bottom:50px;">
      <img src="../assets/images/chanpinzhanshi.jpg" alt />
    </div>
    <div>
      <img src="../assets/images/chanpin.jpg" alt />
    </div>
    <div class="large-content">
      <div class="large-group clearfix">
        <img style="margin-top:30px;" src="../assets/images/chengfenzhanshi.jpg" alt />
        <div class="large-switch clearfix">
          <div class="large-switch-circle hd">
            <ul style="margin-top:-12px;word-spacing:0px;">
              <li
                class="on"
                style="color:#f99541;width: 162px;float: left;text-align: center;margin: 0 auto;"
              >红球藻低聚肽玫瑰饮</li>
              <li
                style="color:red;width: 162px;float: right;text-align: center;margin: 0 auto;"
              >膳食蛋白多肽代餐球</li>
              <!--<li>数据接入</li>-->
            </ul>
          </div>
          <div class="large-switch-middle bd">
            <ul class="clearfix">
              <div>
                <img src="../assets/images/chengfenkaobei.jpg" alt="红球藻低聚肽玫瑰饮成分展示" />
              </div>
            </ul>
            <ul class="clearfix" style="display: none;">
              <div>
                <img src="../assets/images/chengfen.jpg" alt="膳食蛋白多肽代餐球成分展示" />
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div style="margin-top:50px;margin-bottom:50px;">
      <img src="../assets/images/zu10.jpg" />
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.large-content {
  height: 526px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 50%;
  -webkit-transition: all 1s;
  -moz-transition: all 1s;
  -ms-transition: all 1s;
  -o-transition: all 1s;
  transition: all 1s;
  padding: 80px 0;
}
.large-content {
    height: 526px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center 50%;
    -webkit-transition: all 1s;
    -moz-transition: all 1s;
    -ms-transition: all 1s;
    -o-transition: all 1s;
    transition: all 1s;
    padding: 80px 0;
    box-sizing: border-box;
}
.large-switch-circle ul {
    font-size: 16px;
    color: #fff;
    /* text-align: center; */
}
.large-switch-circle ul .on {
    opacity: 1;
}
.large-switch-circle ul li {
    opacity: .8;
    cursor: pointer;
    margin: 0 6px;
    position: relative;
    display: inline-block;
    font-size: 8px;
    letter-spacing: 6px;
}
.large-switch-circle ul .on:after {
    content: '';
    width: 141px;
    height: 1px;
    display: inline-block;
    background: #fff;
    position: absolute;
    bottom: -1px;
    left: calc(12% - 10px);
    animation: bigdata-underline-grow both .3s;
}
.large-group {
    width: 95%;
    margin: 0 auto;
    position: relative;
    height: auto;
}
.large-switch-middle {
    width: 100%;
    margin-top: 40px;
    position: absolute;
    z-index: 1;
}
.clearfix::after {
    clear: both;
    content: ".";
    display: block;
    height: 0;
    visibility: hidden;
}
</style>