<template>
  <p>{{message}}</p>
  <el-button type="primary" @click="init()">클릭</el-button>
</template>

<script>
import { testApi } from '../api/api'
export default {
  name: 'HelloWorld',
  data() {
    return {
      message: ''
    }
  },
  methods: {
    init() {
      testApi.getTests().then(res => {
        this.message = res.data.message
        console.log('>>>', res)
      })
    }
  }
}
</script>

<style scoped>

</style>
