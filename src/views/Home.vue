<template>
  <div class="page home">
    <div class="header">
      <div class="breadcrumb">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item
            v-for="(item, index) in breadcrumb"
            :key="index"
            :to="{ path: item.path }"
          >
            {{ item.title }}
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="notice"><i class="el-icon-message-solid"></i> 5</div>
      <div class="user"><i class="el-icon-user-solid"></i> 13250801281</div>
      <div class="help"><i class="el-icon-s-flag"></i>帮助中心</div>
    </div>
    <div class="nav">
      <div class="logo">
        <img src="../assets/images/logo.png" alt="logo" height="20" />
        <span>后台管理</span>
      </div>
      <el-menu
        class="nav-menu"
        background-color="#fff"
        text-color="#000"
        active-text-color="#409eff"
        router
      >
        <el-menu-item index="/home">
          <i class="el-icon-monitor"></i>
          <span>概览</span>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-collection-tag"></i>
            <span>商品</span>
          </template>
          <el-menu-item index="/home/product">商品管理</el-menu-item>
          <el-menu-item index="/home/product/tag">商品分组</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: 1,
      routerBreadcrumb: {
        "/home": [{ title: "数据概览" }],
        "/home/product": [{ title: "商品管理" }],
        "/home/product/create": [
          { title: "商品管理", path: "/home/product" },
          { title: "商品创建" }
        ],
        "/home/product/tag": [
          { title: "商品管理", path: "/home/product" },
          { title: "商品分组" }
        ]
      }
    };
  },
  computed: {
    breadcrumb() {
      return this.routerBreadcrumb[this.$route.path];
    }
  }
};
</script>
<style lang="less" scoped>
.page.home {
  width: 100%;
  min-height: 100%;
  background: #eee;
  > .header {
    position: fixed;
    z-index: 10;
    width: 100%;
    min-width: 1200px;
    height: 60px;
    padding-left: 200px;
    background: #fff;
    border-bottom: 1px solid #e6e6e6;
    box-sizing: border-box;
    display: flex;
    > .breadcrumb {
      flex: 1;
      padding: 20px;
      line-height: 20px;
      > .el-breadcrumb {
        line-height: 20px;
      }
    }
    > .notice {
      height: 20px;
      padding: 20px;
      font-size: 16px;
      cursor: pointer;
    }
    > .user {
      height: 20px;
      padding: 20px;
      cursor: pointer;
      font-size: 16px;
      border-left: 1px solid #e6e6e6;
    }
    > .help {
      height: 20px;
      padding: 20px;
      cursor: pointer;
      font-size: 16px;
      border-left: 1px solid #e6e6e6;
    }
  }
  > .nav {
    position: fixed;
    z-index: 10;
    left: 0;
    top: 0;
    width: 200px;
    height: 100%;
    border-right: 1px solid #e6e6e6;
    background: #fff;
    > .logo {
      height: 20px;
      line-height: 20px;
      padding: 20px;
      color: #fff;
      background: #000;
      img {
        vertical-align: top;
      }
      span {
        margin-left: 10px;
        font-size: 20px;
      }
    }
    > .nav-menu {
      border-right: none;
    }
  }
  > .content {
    padding-top: 60px;
    padding-left: 200px;
  }
}
</style>
