<template>
  <div>
      <div class="search">
        <el-row class="clear">
              <label> 标题:</label><el-input class="search-input" clearable v-model="title" placeholder="关键字"></el-input>
              <label> 状态:</label><el-select  v-model="name" placeholder="状态">
                <el-option v-for="item in status"
                          :key="item.id"
                          :label="item.name"
                          :value="item.id">
                </el-option>
              </el-select>
              <el-button class="search-button" type="primary" @click="fetch()">查询</el-button>
              <el-button class="add-button" type="success" @click="write()">写文章</el-button>
        </el-row>
      </div>
      <el-table
        :data="articleList"
        v-loading="loading"
        element-loading-text="拼命加载中"
        border
        @selection-change="batchSelect"
        style="width: 100%;">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="id"
          label="id"
          width="80">
        </el-table-column>
        <el-table-column
          prop="title"
          label="标题"
          min-width="400">
          <template slot-scope="props">
            <router-link :to="'/article/detail/'+ props.row.id">{{props.row.title}}</router-link>
          </template>
        </el-table-column>
        <el-table-column
          prop="hits"
          label="点赞"
          width="100">
        </el-table-column>
        <el-table-column
          prop="url"
          label="链接"
          min-width="400">
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态"
          width="100">
          <template slot-scope="props">
            <span v-text="props.row.status == 1 ? '已发布' : '草稿'"></span>
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          width="180">
          <template slot-scope="props">
            <router-link :to="{name: 'tableUpdate', params: {id: props.row.id}}" tag="span">
              <el-button type="info" size="small" icon="edit">修改</el-button>
            </router-link>
            <el-button type="danger" size="small" icon="delete" @click="delete_data(props.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div style="margin-top: 16px">
        <div style="float:left">
           <el-button
            type="danger"
            icon="delete"
            size="small"
            :disabled="batchSelectArray.length === 0"
            @click="batchDel"
            slot="handler">
            <span>批量删除</span>
        </el-button>
        </div>
        <div style="float:right">
          <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="pageIndex"
              :page-sizes="[10, 15, 20, 50]"
              :page-size="pageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="total">
          </el-pagination>
        </div>
      </div>
  </div>
</template>
<style>

</style>
<script type="ts">
export default {
  components: {},
  data() {
    return {
      pageIndex: 1,
      pageSize: 10,
      //请求时的loading效果
      loading: false,
      //批量选择数组
      batchSelectArray: []
    };
  },
  methods: {
    write(){

    },
    //刷新
    fetch() {
      this.$store.dispatch("FETCH_ARTICLE_LIST", { pageIndex: this.pageIndex, pageSize : this.pageSize })
    },
    handleSelectionChange(val) {
      console.log("handleSelectionChange", val);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val;
      this.fetch();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.pageIndex = val;
      this.fetch();
    },
    handleEdit(index, row) {
      this.$message(`你点击了编辑操作 index:${index}, id:${row.id}`);
    },
    handleDelete(index, row) {
      this.$message(`你点击了删除操作 index:${index}, id:${row.id}`);
    },
    //批量选择
    batchSelect(val) {
      this.batchSelectArray = val;
    },
    //批量删除
    batchDel() {
      this.$confirm("将批量删除选择文章, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
          this.loading = true;
          this.$message.success(msg);
          this.loading = false;
        });
    }
  },
  computed: {
    status(){
      return [ { id: 0, name: '草稿'}, { id: 1, name: '已发布' }];
    },
    total(){
      return this.$store.state.articleTotal;
    },
    articleList(){
      return this.$store.state.articleList;
    }
  },
  preFetch({ state, dispatch, commit }) {
    return dispatch("FETCH_ARTICLE_LIST", { pageIndex: 1, pageSize : 10 });
  },
  beforeMount() {
    console.log();
    if(!(this.articleList && this.articleList.length > 0)){
      this.fetch();
    }
  }
};
</script>
