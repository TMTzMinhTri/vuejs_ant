<template>
  <div>
    <div style="margin-bottom: 16px">
      <a-button type="primary" :disabled="!hasSelected" :loading="loading" @click="start">Reload</a-button>
      <span style="margin-left: 8px">
        <template v-if="hasSelected">{{ `Selected ${selectedRowKeys.length} items` }}</template>
      </span>
    </div>
    <a-table
      :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
      :columns="columns"
      :data-source="data"
    />
  </div>
</template>
<script>
const columns = [
  {
    title: "Tên hoạt chất",
    dataIndex: "name"
  },
  {
    title: "Hàm luợng",
    dataIndex: "amount"
  },
  {
    title: "Đơn vị",
    dataIndex: "unit"
  },
  {
    title: "Thao tác",
    dataIndex: "action"
  }
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    amount: 32,
    unit: `London, Park Lane no. ${i}`
  });
}

export default {
  data() {
    return {
      data,
      columns,
      selectedRowKeys: [], // Check here to configure the default column
      loading: false
    };
  },
  computed: {
    hasSelected() {
      return this.selectedRowKeys.length > 0;
    }
  },
  methods: {
    start() {
      this.loading = true;
      // ajax request after empty completing
      setTimeout(() => {
        this.loading = false;
        this.selectedRowKeys = [];
      }, 1000);
    },
    onSelectChange(selectedRowKeys) {
      console.log("selectedRowKeys changed: ", selectedRowKeys);
      this.selectedRowKeys = selectedRowKeys;
    },
  }
};
</script>
