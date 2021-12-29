<template>
   <div id="app">
    <transition :name="transitionName">
        <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name:"App",
  data(){
    return{
      transitionName:""
    }
  },
  watch: {
    //使用watch 监听$router的变化
    $route(to, from) {
      // if(to.path !=='/'){
        //如果to索引大于from索引,判断为前进状态,反之则为后退状态
        // if(to.meta.index < from.meta.index){
        // //设置动画名称
        //   this.transitionName = 'bounce_left';
        // }else if(to.meta.index > from.meta.index){
          
        // }
this.transitionName = 'bounce_right';
      // }else{
      //   this.transitionName =""
      // }
    },
  },
}
</script>
<style lang="scss"  scoped>
.view{
  position: absolute;
  width: 100%;
}
.bounce_right-enter-active {
		-webkit-animation: scale-up-ver-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: scale-up-ver-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}

@-webkit-keyframes scale-up-ver-center {
  0% {
    -webkit-transform: scaleY(0.4);
            transform: scaleY(0.4);
  }
  100% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
  }
}
@keyframes scale-up-ver-center {
  0% {
    -webkit-transform: scaleY(0.4);
            transform: scaleY(0.4);
  }
  100% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
  }
}



</style>

