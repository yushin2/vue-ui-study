<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="id" label="No" width="100" />
    <el-table-column prop="subject" label="Subject" width="180" />
    <el-table-column prop="content" label="Content" />
    <el-table-column label="CreateDate" width="200">
      <template #default="scope">
        {{dayjs(scope.row.create_date).format('YYYY-MM-DD HH:mm:ss')}}
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { questionApi } from '../api/api'
import dayjs from 'dayjs'
export default {
  name: "mainList",
  data() {
    return {
      dayjs,
      tableData: []
    }
  },
  created() {
    questionApi.getList().then(res => {
      console.log('>>>', res)
      this.tableData = res.data
    })
  },
  methods: {

  }
}
</script>

<style scoped>

</style>