<template>
  <div class="view product-list">
    <div class="panel">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="已上架" name="1"></el-tab-pane>
        <el-tab-pane label="已下架" name="2"></el-tab-pane>
        <el-tab-pane label="已售罄" name="3"></el-tab-pane>
      </el-tabs>
      <div class="create">
        <el-button type="primary" @click="$router.push('product/create')">
          创建商品
        </el-button>
      </div>
      <div class="search">
        <el-form inline>
          <el-row>
            <el-form-item label="商品名称">
              <el-input style="width:200px;"></el-input>
            </el-form-item>
            <el-form-item label="商品名称">
              <el-input style="width:100px;"></el-input>
            </el-form-item>
            <el-form-item label="商品名称">
              <el-input style="width:100px;"></el-input>
            </el-form-item>
          </el-row>
          <el-row>
            <el-form-item>
              <el-button type="primary">筛选</el-button>
              <el-button>重置</el-button>
            </el-form-item>
          </el-row>
        </el-form>
      </div>
      <el-table
        :data="list"
        ref="multipleTable"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column label="商品/价格" min-width="200">
          <template slot-scope="scope">
            <div class="product">
              <img
                class="product-cover"
                :src="scope.row.cover"
                width="50"
                height="50"
              />
              <div class="product-info">
                <p>{{ scope.row.name }}</p>
                <p>￥{{ scope.row.price }}</p>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="总库存" prop="totalStock" width="200">
        </el-table-column>
        <el-table-column label="总销量" prop="totalSaleNum" width="200">
        </el-table-column>
        <el-table-column label="创建时间" prop="createdTime" width="200">
        </el-table-column>
        <el-table-column label="操作" width="200">
          <template>
            <div>
              <el-button type="text">编辑</el-button>
              <el-button type="text">删除</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <div class="table-footer">
        <div class="footer-left">
          <span>
            <el-checkbox
              v-model="selectAll"
              :indeterminate="isIndeterminate"
              @change="changeSelectAll"
            >
              全选当页
            </el-checkbox>
          </span>
          <span>已选商品{{ multipleSelection.length }}</span>
          <span>
            <el-button @click="removeBatch">批量删除</el-button>
          </span>
          <span>
            <el-button>批量下架</el-button>
          </span>
        </div>
        <div class="footer-pagination">
          <el-pagination
            :total="20"
            layout="total,prev, pager, next, jumper"
          ></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "1",
      isIndeterminate: false,
      list: [
        {
          cover: "https://video.yingtu.co/7/155593057254417051.jpg",
          name: "毛戈平妆前柔润隔离乳",
          price: "200.00~500.00",
          totalStock: 100,
          totalSaleNum: 299,
          createdTime: "2019-07-02 12:00:00"
        },
        {
          cover: "https://video.yingtu.co/7/155593057254417051.jpg",
          name: "毛戈平妆前柔润隔离乳",
          price: "200.00~500.00",
          totalStock: 100,
          totalSaleNum: 900,
          createdTime: "2019-07-02 12:00:00"
        }
      ],
      selectAll: false,
      multipleSelection: []
    };
  },
  methods: {
    //handleClick
    handleClick() {
      console.log(this.activeName);
    },
    removeBatch() {},
    //选择table
    handleSelectionChange(value) {
      this.multipleSelection = value;
      if (this.multipleSelection.length == this.list.length) {
        this.selectAll = true;
        this.isIndeterminate = false;
      } else {
        this.selectAll = false;
        if (this.multipleSelection.length > 0) {
          this.isIndeterminate = true;
        } else {
          this.isIndeterminate = false;
        }
      }
    },
    //切换全选
    changeSelectAll(value) {
      if (value) {
        this.list.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    }
  }
};
</script>

<style lang="less" scoped>
.view.product-list {
  .search {
    margin-top: 10px;
    background: #f5f5f5;
    padding: 20px 20px 0;
  }
  .product {
    display: flex;
    > .product-info {
      padding-left: 10px;
    }
  }
  .table-footer {
    margin-top: 10px;
    padding: 0 15px;
    display: flex;
    > .footer-left {
      flex: 1;
      span + span {
        margin-left: 20px;
      }
    }
  }
}
</style>
