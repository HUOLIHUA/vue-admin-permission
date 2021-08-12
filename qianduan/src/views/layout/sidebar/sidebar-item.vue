<template>
  <div v-if="!item.hidden">
      <template v-if="hasOneChildren(item.children, item)">
          <el-menu-item :key="item.code" :index="resolvePath(item)" @click="onOpen(item)">
            <i :class="item.meta.icon"></i>
            <span slot="title">{{item.meta.title}}</span>
          </el-menu-item>
        </template>
        <template v-else>
          <el-submenu :key="item.code" :index="item.path">
            <template slot="title">
              <i :class="item.meta.icon"></i>
              <span>{{item.meta.title}}</span>
            </template>
            <sidebar-item v-for="child in item.children" :key="child.path" :item="child"></sidebar-item>
          </el-submenu>
        </template>
  </div>
</template>

<script>
export default {
    name: 'sidebarItem',
    props: {
        item: {
            type: Object,
            required: true
        },
        basePath: {
            type: String,
            default: ''
        }
    },
    data () {
        this.onlyOneChild = null
        return {}
    }, 
    methods: {
        hasOneChildren (children = [], parent) {
            if(!children.length){
                return true
            }
            if(children.length === 1){
                // 如果只有一个子路由，那么这个子路由的meta就是parent的meta
                parent.meta = children[0].meta
                return true
            }
            return false
        },

        resolvePath (item) {
            if(item.redirect){
                return item.redirect
            }
            return item.path
        },

        onOpen (route) {
            this.$router.push({
                path: route.path
            })
        }
    }
}
</script>

<style>

</style>