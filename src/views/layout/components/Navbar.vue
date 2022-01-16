<template>
    <el-menu class="navbar" mode="horizontal">
        <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened">

        </hamburger>
        <breadcrumb></breadcrumb>

        <el-dropdown class="avatar-container" trigger="click">
            <div class="avator-wrapper">
                <img class="user-avatar" :src="avatar"></div>
                <i class="el-icon-cart-bottom"></i>
            </div>
        </el-dropdown>
        <el-dropdown-menu class="user-dropdown"  slot="dropdpwn">
            <router-link class="inlinkeBlock" to="/">
            <el-dropdown-item>
                首页
            </el-dropdown-item>

            </router-link>

            <el-dropdown-item  divided>
                <span @click="logout" style="display:block;"> 退出</span>
            </el-dropdown-item>
        </el-dropdown-menu>
    </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'

export default {
    components: {
    Breadcrumb,
    Hamburger
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('ToggleSideBar')
    },
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      })
    }
  }
}
</script>