<template>
  <div id="home">
    <el-container class="container">
      <el-menu
        :default-active="menuname"
        :router="true"
        :collapse="isCollapse"
        background-color="#001529"
        text-color="#fff"
        active-text-color="#409EFF"
        class="aside"
      >
        <el-menu-item index="0">
          <!-- <el-icon><icon-menu /></el-icon> -->
          <template #title>
            <div class="asidetitle">高新区食品安全</div>
          </template>
        </el-menu-item>
        <el-sub-menu index="1">
          <template #title>
            <el-icon><message /></el-icon>
            <span>工作台</span>
          </template>

          <el-menu-item-group>
            <template #title>第一部分</template>
            <el-menu-item index="/work">work</el-menu-item>
            <el-menu-item index="/shop">shop</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <!-- <el-menu-item index="/work">
          <el-icon><setting /></el-icon>
          <span>Navigator Four</span>
        </el-menu-item> -->
      </el-menu>

      <el-container>
        <el-header class="header">
          <el-row>
            <el-col :span="16">
              <el-row :span="24">
                <el-col :span="4" style="margin: auto 0">
                  <el-radio-group v-model="isCollapse">
                    <el-radio-button :label="false">展开</el-radio-button>
                    <el-radio-button :label="true">收起</el-radio-button>
                  </el-radio-group>
                </el-col>
                <el-col :span="20">
                  <el-menu
                    :default-active="'2'"
                    class="el-menu-demo"
                    mode="horizontal"
                    @select="handleSelect"
                  >
                    <el-menu-item index="1">数据分析</el-menu-item>

                    <el-menu-item index="2">食品安全管理预警</el-menu-item>
                  </el-menu>
                </el-col>
              </el-row>
            </el-col>

            <el-col :span="7" class="rightsection">
              <el-row class="rightsection">
                <el-col :span="18" class="bg-purple"></el-col>
                <el-col :span="6" style="margin: auto 0; height: 0.6rem">
                  <el-row align="middle" style="height: 0.6rem">
                    <img
                      style="width: 0.5rem; height: 0.5rem; border-radius: 50%"
                      :src="url"
                      alt="无法显示图片"
                    />
                    <div style="margin-left: 0.1rem">名字姓名</div>
                  </el-row>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-header>
        <el-main class="main" style="padding: 0.1rem">
          <transition :name="transitionName">
            <router-view class="view"></router-view>
          </transition>
        </el-main>

        <el-footer style="background-color: #f0f2f5; text-align: center">
          @底部栏目底部栏目底部栏目底部栏目底部栏目底部栏目底部栏目
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { reactive, toRefs} from "vue";
import {useRoute,useRouter} from "vue-router";
import { Message, Menu, Setting } from "@element-plus/icons-vue";
export default {
  name: "Home",
  components: {
    Message,
    Setting,
    "icon-menu": Menu,
  },
  watch: {
    //使用watch 监听$router的变化
    $route(to, from) {
      // console.log(to,from)
      //监听路由动画
      this.transitionName = "transitionright";
      //监听路由,并赋值给默认菜单
      this.menuname = to.fullPath;
    },
  },
  setup() {
    // useRoute 用来获取路由内携带的参数
    // useRouter 用来获取路由以及跳转路由的方法
    // const router = useRouter()
    const route = useRoute()
    // console.log(router) 
    // console.log(route.path)
    const state = reactive({
      menuname:route.path,
      transitionName: "transitionright",
      isCollapse: false,
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
    });

    //头部栏目切换
    const handleSelect = (key, keyPath) => {
      console.log(key, keyPath);
    };



    return {
      handleSelect,
      ...toRefs(state),
    };

  },
};
</script>

<style lang="scss" scoped>
@import "../../style/vir.scss";
@import "../../style/mixmins.scss";
//  color: $conten-fontcolor;
//   @include ellipsishidden;

#home {
  position: fixed;
  height: 100%;
  width: 100%;
  font-size: 0.12rem;
  background-color: #fff;
}
.container {
  height: 100vh;
  font-size: 0.15rem;
}

.aside {
  height: 100%;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
}

.asidetitle {
  color: #fff;
  font-size: 0.24rem;
}
.horizontal-collapse-transition {
  transition: 0.2s width ease-in-out, 0.2s padding-left ease-in-out,
    0.2s padding-right ease-in-out;
}
.main {
  height: 100%;
  background-color: #f0f2f5;
}
.headerlogo {
  height: $conten-height;
  line-height: $conten-height;
  img {
    margin: auto 0;
  }
}
.rightsection {
  height: $conten-height;
}
.bg-purple {
  height: $conten-height;
  line-height: 0.6rem;
}
.view {
  position: absolute;
  width: 100%;
}

.transitionright-enter-active {
  @include ellipstransitionright;
}
</style>
