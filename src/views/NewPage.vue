<template>
  <div class="row">
    <div class="col-4">
      <div class="list-group">
        <router-link class="list-group-item list-group-item-action" to="/newPage/a">
          元件 A
        </router-link>
        <router-link class="list-group-item list-group-item-action" to="/newPage/b">
          元件 B
        </router-link>
        <router-link class="list-group-item list-group-item-action" to="/newPage/namedView/c2a">
          c2a
        </router-link>
        <router-link class="list-group-item list-group-item-action" to="/newPage/namedView/a2b">
          a2b
        </router-link>
        <router-link class="list-group-item list-group-item-action" to="/newPage/dynamicRouter/56d27f4a53bd5441">
          動態路由
        </router-link>
        <router-link class="list-group-item list-group-item-action" to="/newPage/dynamicRouterByProps/56d27f4a53bd5441">
          動態路由 Props
        </router-link>
        <router-link class="list-group-item list-group-item-action" to="/newPage/routerNavigation">
          路由導覽
        </router-link>
      </div>
    </div>
    <div class="col-8">
      <router-view></router-view>
    </div>
  </div>
</template>
