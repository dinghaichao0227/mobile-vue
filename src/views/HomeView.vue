<template>
  <div class="home">
    <el-calendar v-model="value"></el-calendar>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="摄像师" name="first">
        <el-table :data="tableData">
          <el-table-column
            v-for="item in tableColumn"
            :key="item.prop"
            :prop="item.prop"
            :label="item.label"
            :width="item.width"
          >
          </el-table-column>
          <el-table-column prop="date" label="日期" width="100"> </el-table-column>
          <el-table-column prop="name" label="姓名" width="100"> </el-table-column>
          <el-table-column prop="address" label="地址"> </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="服装师" name="second">服装师</el-tab-pane>
      <el-tab-pane label="逗娃师" name="third">逗娃师</el-tab-pane>
      <el-tab-pane label="场地师" name="fourth">场地师</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { tableColumn as tableColumns } from '@/components/config/TableColumn.js';

export default {
  name: 'HomeView',
  components: {
    // HelloWorld,
  },
  data() {
    return {
      value: new Date(),
      activeName: 'first',
      tableColumns,
      tableData: [],
      // tableData: [{
      //       date: '2016-05-02',
      //       name: '王小虎',
      //       address: '上海市普陀区金沙江路 1518 弄'
      //     }, {
      //       date: '2016-05-04',
      //       name: '王小虎',
      //       address: '上海市普陀区金沙江路 1517 弄'
      //     }, {
      //       date: '2016-05-01',
      //       name: '王小虎',
      //       address: '上海市普陀区金沙江路 1519 弄'
      //     }, {
      //       date: '2016-05-03',
      //       name: '王小虎',
      //       address: '上海市普陀区金沙江路 1516 弄'
      //     }]
    };
  },
  methods: {
    handleClick(key) {
      console.log(key);
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;
  background-color: #808080;
  overflow-y: auto;
  overflow-x: hidden;

  ::v-deep.el-calendar-table .el-calendar-day {
    height: 25px;
    width: 10px;
  }
}
</style>
