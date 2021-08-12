<template>
  <div class="menu-content">
    
    <el-menu :default-active="activeMenu" :unique-opened="true">
      <sidebar-item  v-for="route in addRouters" :key="route.path" :item="route" :base-path="route.path"></sidebar-item>
    </el-menu>
  </div>
</template>

<script>
import sidebarItem from './sidebar/sidebar-item'
import { mapGetters } from 'vuex'
export default {
  components: {
    sidebarItem
  },
  data () {
    return {}
  },
  computed : {
    ...mapGetters(['addRouters']),
    activeMenu () {
      return this.$route.path
    },
  },
  created () {
    console.log(this.addRouters)
  }
}
</script>

<style>

</style>