<template>
    <div class="app-wrapper" :class="classObj">
        <!-- <sidebar class="sidebar-container"></sidebar> -->
        <sidebar class="sidebar-container"></sidebar>
        <div class="main-container">
            home页
            <!-- <NavBar></NavBar> -->
            <navbar></navbar>
             <app-main></app-main>
        </div>
    </div>
</template>

<script>

import Sidebar  from './components/Sidebar/index'
import AppMain  from './components/AppMain'
// import  Sidebar  from './components/Sidebar/Sidebar'

import Navbar  from './components/Navbar'

import ResizeMixin from './mixin/ResizeHandler'
export default {
     name: "layout",
     components: {
         Navbar,
         Sidebar,
         AppMain
     },
      mixins: [ResizeMixin],
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

    //sdf
    position: relative;
    height: 100%;
    width: 100%;
  }
</style>