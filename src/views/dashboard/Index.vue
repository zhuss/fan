<template>
  <div class="view dashboard">
    <div class="panel">
      <div class="statistics">
        <div class="statistics-title">
          今日数据
        </div>
        <div class="statistics-items">
          <div class="item">
            <div class="item-label">
              新增订单
            </div>
            <div class="item-content">1000</div>
          </div>
          <div class="item">
            <div class="item-label">
              待发货订单
            </div>
            <div class="item-content">1000</div>
          </div>
          <div class="item">
            <div class="item-label">
              售后订单
            </div>
            <div class="item-content">1000</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.view.dashboard {
  .statistics {
    > .statistics-title {
      font-size: 16px;
      font-weight: bold;
    }
    > .statistics-items {
      margin-top: 20px;
      display: flex;
      > .item {
        flex: 1;
        text-align: left;
        > .item-label {
          color: #666;
        }
        > .item-content {
          margin-top: 10px;
          font-size: 24px;
        }
      }
    }
  }
}
</style>
