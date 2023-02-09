<template>
  <button type="button" @click="getRoute">GetRoute</button>
  <button type="button" @click="push">Push</button>
  <button type="button" @click="replace">Replace</button>
  <button type="button" @click="go">Go</button>
  <hr />
  <button type="button" @click="addRoute">新增路由</button>
</template>

<script>
export default {
  methods: {
    // 取得常用參數
    getRoute() {
      // 取得路由的屬性
      // https://router.vuejs.org/api/interfaces/routelocationnormalized.html
      // 範例：this.$forceUpdate.fullPath(目前網址)
      // console.log(this.$route);

      // 呼叫路由的方法
      // https://router.vuejs.org/api/interfaces/router.html
      // 範例：this.$router.go(-1)(回到前一頁)
      // console.log(this.$router);
    },
    // 包含歷史記錄
    push() {
      // 使用網址前往路由
      // this.$router.push('/newPage/dynamicRouter/56d27f4a53bd5441');

      // 使用名稱前往路由
      this.$router.push({
        name: 'about'
      });
    },
    // 不包含歷史記錄(不會記錄在瀏覽器上一頁)
    replace() {
      this.$router.replace({
        name: 'about'
      });
    },
    // 操作歷史記錄
    go() {
      this.$router.go(-1); // 前往上一頁
    },
    // 建立新的路由
    addRoute() {
      this.$router.addRoute({
        path: "/newAbout",
        name: "newAbout",
        component: () => import("./AboutView.vue"),
      })
    }
  }
}
</script>