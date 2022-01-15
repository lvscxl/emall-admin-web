<template>
    <div>
        <!-- <sidebar class="sidebar-container"></sidebar> -->
        <sidebar class="sidebar-container"></sidebar>
        <div>
            home页
            <!-- <NavBar></NavBar> -->
             <app-main></app-main>
        </div>
    </div>
</template>

<script>

import Sidebar  from './components/Sidebar/index'
import AppMain  from './components/AppMain'
// import  Sidebar  from './components/Sidebar/Sidebar'
export default {
     name: "layout"
     ,
     components: {
     
         Sidebar,
         AppMain
     },
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    },
  sidebar() {
      return this.$store.state.app.sidebar
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  }
}
</script>


<style rel="stylesheet/scss"  lang="scss"  scoped>
  @import "src/styles/mixin.scss";
  .app-wrapper {

    //TODO
    //@include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
  }
</style>