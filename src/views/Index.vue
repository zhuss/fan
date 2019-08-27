<template>
  <div class="page index">
    <!-- header -->
    <div class="header-wrap">
      <div class="header">
        <div class="logo">
          <a href="javascript:;">
            <img
              src="http://img.yzcdn.cn/public_files/2016/11/29/8fc4cd6f771897cbf9663166a63a5302.png"
              alt="logo"
            />
          </a>
        </div>
        <ul class="nav">
          <li class="nav-item">
            <span>首页</span>
          </li>
          <li class="nav-item">
            <span>商家服务 <i class="el-icon-arrow-down"></i></span>
            <div class="nav-dropdown">
              <div class="nav-dropdown-menu">
                <div class="menu-item">123213</div>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <span>消费者 <i class="el-icon-arrow-down"></i></span>
            <div class="nav-dropdown">
              <div class="nav-dropdown-menu">
                <div class="menu-item">哈哈哈</div>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <span>渠道合作</span>
          </li>
          <li class="nav-item">
            <span>有赞云</span>
          </li>
          <li class="nav-item">
            <span>更多服务</span>
          </li>
        </ul>
        <div class="user">
          <el-button
            class="button-login"
            @click="$router.push({ path: '/login' })"
          >
            登录
          </el-button>
          <el-button class="button-register" type="primary">注册</el-button>
        </div>
      </div>
    </div>
    <!-- header -->
    <!-- banner -->
    <div class="banner">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide>
          <div
            class="banner-bg"
            style="background-image:url('http://img.yzcdn.cn/public_files/2018/05/29/topbanner1@2x.jpg')"
          >
            <div class="banner-content">
              <h2 class="banner-title">有赞微商城</h2>
              <p class="font-lighter subtitle">一个软件解决网上开店所有问题</p>
              <p class="font-lighter">
                <el-button class="button" type="primary" size="large">
                  进入后台
                </el-button>
              </p>
              <p class="font-lighter">或致电 0571 - 8685 7988</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div
            class="banner-bg"
            style="background-image:url('http://img.yzcdn.cn/public_files/2018/05/29/topbanner2@2x.jpg')"
          ></div>
        </swiper-slide>
        <swiper-slide>
          <div
            class="banner-bg"
            style="background-image:url('http://img.yzcdn.cn/intro/img/banner3/3x.png')"
          ></div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <!-- banner -->
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          bulletClass: "bullet",
          bulletActiveClass: "bullet-active"
        }
      }
    };
  }
};
</script>

<style lang="less" scoped>
.index {
  > .header-wrap {
    position: relative;
    z-index: 100;
    box-shadow: inset 0px 2px 5px rgba(0, 0, 0, 0.07);
    > .header {
      display: flex;
      width: 1200px;
      height: 60px;
      margin: 0 auto;
      box-sizing: border-box;
      line-height: 32px;
      > .logo {
        padding: 18px 0;
        height: 24px;
        flex: 1;
        img {
          height: 20px;
          vertical-align: top;
        }
      }
      > .nav {
        > .nav-item {
          padding: 14px 20px;
          display: inline-block;
          cursor: pointer;
          &:hover {
            > span {
              color: #ff4444;
            }
            > .nav-dropdown {
              // display: block;
              transform: rotateX(0deg);
            }
          }
          > .nav-dropdown {
            position: absolute;
            left: 0;
            top: 60px;
            z-index: 1;
            width: 100%;
            height: auto;
            background: #fff;
            // display: none;
            box-shadow: inset 0px 2px 5px rgba(0, 0, 0, 0.07);
            transform: rotateX(-90deg);
            transform-origin: 0 0 0;
            transition: all 0.3s;
            &:hover {
              // display: block;
              transform: rotateX(0deg);
            }
            > .nav-dropdown-menu {
              margin: 0 auto;
              max-width: 1100px;
            }
          }
        }
      }
      > .user {
        padding: 14px 0 14px 20px;
        > .button-login {
          width: 100px;
        }
        > .button-register {
          width: 100px;
        }
      }
    }
  }
  > .banner {
    width: 100%;
    height: 400px;
    background: #eee;
    .banner-bg {
      width: 100%;
      height: 400px;
      background-position: center;
      background-size: cover;
      > .banner-content {
        width: 1200px;
        margin: 0 auto;
        padding-top: 100px;
        > .banner-title {
          font-size: 40px;
        }
        > .subtitle {
          font-size: 20px;
          font-weight: 100;
        }
        > .font-lighter {
          margin-top: 16px;
          > .button {
            width: 200px;
          }
        }
      }
    }
  }
}
</style>
<style>
.bullet {
  display: inline-block;
  width: 100px;
  height: 4px;
  background: #fff;
  opacity: 0.2;
  margin: 0 10px;
}
.bullet-active {
  opacity: 1;
}
</style>
