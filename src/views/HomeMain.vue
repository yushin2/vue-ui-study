<template>
  <div>
    <div>
      <h1>
        HomeMain
      </h1>
      <!--      <routes-link to="/hello"></routes-link>-->
    </div>
    <el-row class="mb-4" style="display:flex; justify-content:center">
      <el-button @click="$router.push('/hello')">Default</el-button>
      <el-button type="primary" @click="testClick">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "HomeMain",
  methods: {
    testClick () {
      console.log("/????")
      this.$router.push('/hello')
    }
  }
}
</script>

<style scoped>

</style>