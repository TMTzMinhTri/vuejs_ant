<template>
  <div>
    <div style="margin-bottom: 16px">
      <a-button type="danger" @click="AddNewRow">Add</a-button>
      <span style="margin-left: 8px">
        <template v-if="hasSelected">{{ `Selected ${selectedRowKeys.length} items` }}</template>
      </span>
    </div>
    <a-table
      :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
      :columns="columns"
      :data-source="data"
      :rowKey="(record)=> record.key"
    >
      >
      <template v-for="col in ['name', 'amount', 'unit']" :slot="col" slot-scope="text, record">
        <div :key="col">
          <a-input
            v-if="record.editable"
            style="margin: -5px 0"
            :value="text"
            @change="e => handleChange(e.target.value, record.key, col)"
          />
          <template v-else>{{ text }}</template>
        </div>
      </template>
      <template slot="action" slot-scope="text, record">
        <a-popconfirm v-if="data.length" title="Sure to delete?" @confirm="() => onDelete(record)" class="icon">
          <a href="javascript:;">
            <a-icon type="delete" />
          </a>
        </a-popconfirm>
        <span v-if="record.editable">
          <a @click="() => save(record.key)">Save</a>
          <a-popconfirm title="Sure to cancel?" @confirm="() => cancelEdit(record.key)">
            <a>Cancel</a>
          </a-popconfirm>
        </span>
        <span v-else>
          <a :disabled="editingKey !== ''" @click="() => setEdit(record.key)" class="icon">
            <a-icon type="edit" />
          </a>
        </span>
      </template>
    </a-table>
  </div>
</template>

<script>
const columns = [
  {
    title: "Tên hoạt chất",
    dataIndex: "name",
    scopedSlots: { customRender: "name" }
  },
  {
    title: "Hàm luợng",
    dataIndex: "amount",
    scopedSlots: { customRender: "amount" }
  },
  {
    title: "Đơn vị",
    dataIndex: "unit",
    scopedSlots: { customRender: "unit" }
  },
  {
    title: "Thao tác",
    dataIndex: "action",
    scopedSlots: { customRender: "action" }
  }
];

export default {
  data() {
    return {
      data: [
        {
          key: 0,
          name: "123123",
          amount: "123",
          unit: "123"
        },
        {
          key: 1,
          name: "123123",
          amount: "123",
          unit: "123"
        }
      ],
      columns,
      selectedRowKeys: [],
      loading: false,
      editingKey: ""
    };
  },
  computed: {
    hasSelected() {
      return this.selectedRowKeys.length > 0;
    }
  },
  methods: {
    onSelectChange(selectedRowKeys) {
      console.log("selectedRowKeys changed: ", selectedRowKeys);
      this.selectedRowKeys = selectedRowKeys;
    },
    AddNewRow() {
      const { data } = this;
      const newData = {
        key: data.length + 1,
        name: "",
        amount: "",
        unit: ""
      };
      this.data = [...data, newData];
    },
    onDelete(record) {
      const cloneData = [...this.data];
      cloneData.splice(cloneData.indexOf(record), 1);
      this.data = cloneData;
    },
    setEdit(key) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.key)[0];
      this.editingKey = key;
      if (target) {
        target.editable = true;
        this.data = newData;
      }
    },
    cancelEdit(key) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.key)[0];
      this.editingKey = "";
      if (target) {
        Object.assign(target, this.data.filter(item => key === item.key)[0]);
        delete target.editable;
        this.data = newData;
      }
    },
    handleChange(value, key, column) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.key)[0];
      if (target) {
        target[column] = value;
        this.data = newData;
      }
    },
    save(key) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.key)[0];
      if (target) {
        delete target.editable;
        this.data = newData;
      }
      this.editingKey = "";
    }
  }
};
</script>
<style scoped>
  .icon {
    margin: 10px;
  }
  .body_content {
    width: 100%
  }
</style>
