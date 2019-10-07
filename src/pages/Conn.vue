<template>
  <div>
    <div class="nybn">
      <img src="../assets/images/cbanner.jpg" />
    </div>
    <div class="conbox">
      <div class="lxwb">
        <h1>
          浙江神首生物科技有限公司
          <span>Zhejiang shentou biotechnology co., LTD.</span>
        </h1>
        <div class="tywb">
          <p>地址：浙江省宁波市高新区智慧园2A</p>
          <p>
            全国统一热线：400-0011-000
            <br />
          </p>
          <p>邮箱：gongzhujia@samsong-group.com</p>
          <p>传真：0574-83875899</p>
          <p>
            <br />
            <br />
          </p>
        </div>
      </div>
    </div>
    <div class="ybbd">
      <h1 class="css3 left">我要留言</h1>
      <dl class="css3 right">
        <form action="/wap_index.php?s=/Contact/add.html" method="post">
          <dt>
            <span>主题</span>
            <input type="text" name="zhuti" id="msg_zhuti" />
          </dt>
          <dt>
            <span>姓名</span>
            <input type="text" name="username" id="msg_name" />
          </dt>
          <dt>
            <span>微信号</span>
            <input type="text" name="emali" id="msg_wechat" />
          </dt>
          <dt>
            <span>电话</span>
            <input type="text" name="tel" id="msg_tel" />
          </dt>
          <dt>
            <span>留言</span>
            <textarea placeholder="请填写您要留言的内容" name="content" id="msg_content"></textarea>
          </dt>
          <dt>
            <input type="hidden" name="addtime" id="msg_addtime" />
          </dt>
          <dt>
            <span>验证码</span>
            <input class="yzm" name="verify" type="text" />
            <img class="yzmtu" id="verifyImg" src />
          </dt>
          <dt>为确保您的留言及时反馈给你，请您务必填写真实的姓名和联系方式！</dt>
          <dt>
            <input class="tj cs3" type="submit" value="提交" />
          </dt>
        </form>
      </dl>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.conbox {
  background: url(../assets/images/wes2.jpg);
  background-size: cover;
  padding: 30px 20px;
  margin-top: 10px;
}
.lxwb {
  padding-bottom: 180px;
  text-align: left;
  background: url(../assets/images/wed.png) no-repeat left bottom;
  min-height: 180px;
  background-size: 185px;
  h1 {
    font-size: 24px;
    line-height: 40px;
    font-weight: normal;
    color: #333;
    padding-bottom: 20px;
    margin-bottom: 20px;
    background: url(../assets/images/saf_03.jpg) no-repeat left bottom;
    span {
      display: block;
      font-size: 14px;
      line-height: 24px;
    }
  }
  .tywb {
    line-height: 25px;
    color: #666;
    font-size: 13px;
  }
}
.ybbd {
  overflow: hidden;
  margin: 20px 5%;
  h1 {
    font-size: 24px;
    line-height: 40px;
    background: url(../assets/images/saf_03.jpg) bottom left no-repeat;
    color: #333;
    font-weight: normal;
    margin: 0 auto;
    padding-bottom: 10px;
    margin-bottom: 20px;
  }
  dl {
    overflow: hidden;
    margin: 0 auto;
    dt {
      overflow: hidden;
      margin-bottom: 20px;
      position: relative;
      padding-left: 60px;
      font-size: 14px;
      line-height: 30px;
      color: #666;
      span {
        position: absolute;
        left: 0;
        top: 0;
        line-height: 30px;
        font-size: 14px;
        color: #333;
      }
      input {
        width: 100%;
        box-sizing: border-box;
        padding: 0 9px;
        border: 1px solid #ddd;
        height: 30px;
        line-height: 28px;
        font-size: 14px;
        color: #666;
        float: left;
      }
      .yzmtu {
        float: left;
        margin: 3px 5px;
        height: 24px;
        width: auto;
        cursor: pointer;
      }
      .yzm {
        width: 30%;
      }
      .tj {
        width: 50%;
        cursor: pointer;
        height: 40px;
        background: #ffc41c;
        color: #fff;
        line-height: 40px;
        border: none;
        font-size: 16px;
      }
      textarea {
        width: 100%;
        box-sizing: border-box;
        padding: 0 9px;
        border: 1px solid #ddd;
        height: 100px;
        line-height: 25px;
        font-size: 13px;
        color: #666;
        float: left;
      }
    }
  }
}
</style>