<template>
  <div>
    <div style="margin-bottom: 16px">
      <a-button type="primary" :disabled="!hasSelected" :loading="loading" @click="start">Reload</a-button>
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
      <template slot="name" slot-scope="text, record">
        <editable-cell :text="text" @change="onCellChange(record.key, 'name', $event)" />
      </template>
      <template slot="action" slot-scope="text, record">
        <a-popconfirm v-if="data.length" title="Sure to delete?" @confirm="() => onDelete(record)">
          <a href="javascript:;">Delete</a>
        </a-popconfirm>
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
    dataIndex: "amount"
  },
  {
    title: "Đơn vị",
    dataIndex: "unit"
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
      data: [],
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
    }
  }
};

const EditableCell = {
  template: `
      <div class="editable-cell">
        <div v-if="editable" class="editable-cell-input-wrapper">
          <a-input :value="value" @change="handleChange" @pressEnter="check" /><a-icon
            type="check"
            class="editable-cell-icon-check"
            @click="check"
          />
        </div>
        <div v-else class="editable-cell-text-wrapper">
          {{ value || ' ' }}
          <a-icon type="edit" class="editable-cell-icon" @click="edit" />
        </div>
      </div>
    `,
  props: {
    text: String
  },
  data() {
    return {
      value: this.text,
      editable: false
    };
  },
  methods: {
    handleChange(e) {
      const value = e.target.value;
      this.value = value;
    },
    check() {
      this.editable = false;
      this.$emit("change", this.value);
    },
    edit() {
      this.editable = true;
    }
  }
};
</script>
