<template>
  <div class="w-full p-20">
    <div class="h-40">
      <a-row>
        <a-col :span="12">
          <a-form-item label="设备名称">
            <a-input
              style="width: 300px"
              placeholder="请输入设备名称"
              v-model:value="query.name"
              allow-clear
            ></a-input>
          </a-form-item>
        </a-col>
        <a-col :span="12"
          ><a-button type="primary" @click="handleInitList"
            >搜索设备</a-button
          ></a-col
        >
      </a-row>
    </div>
    <div class="h-40">
      <a-button @click="modelMark = true">添加设备</a-button>
      <a-button danger style="margin-left: 10px">删除设备</a-button>
    </div>
    <div style="height: calc(100vh - 120px)">
      <a-table :dataSource="dataSource" :columns="columns">
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'bannerPic'">
            <a-image :width="200" :src="record.bannerPic" />
          </template>
          <template v-else-if="column.key === 'paramPic'">
            <a-image :width="200" :src="record.paramPic" />
          </template>
          <template v-else-if="column.key === 'operation'">
            <a-button>编辑</a-button>
            <a-button style="margin-left: 10px" danger>删除</a-button>
          </template>
        </template>
      </a-table>
    </div>
    <a-modal v-model:open="modelMark" title="添加设备" width="40%">
      <a-form
        :model="form"
        :label-col="{
          style: {
            width: '80px',
          },
        }"
      >
        <a-row :gutter="10">
          <a-col :span="12">
            <a-form-item
              label="设备名称："
              :rules="[{ required: true, message: '请输入设备名称' }]"
            >
              <a-input placeholder="请输入设备名称"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item
              label="设备类型："
              :rules="[{ required: true, message: '请选择设备类型' }]"
            >
              <a-select placeholder="请选择设备类型"></a-select>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="10">
          <a-col :span="12">
            <a-form-item label="设备描述：">
              <a-input placeholder="请输入设备描述"></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="设备附件：">
              <a-upload
                v-model:file-list="form.file"
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                list-type="picture"
              >
                <a-button>
                  <upload-outlined></upload-outlined>
                  上传
                </a-button>
              </a-upload>
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
      <template #footer>
        <a-button key="back" @click="modelMark = false">关闭</a-button>
        <a-button key="submit" type="primary" @click="handleSubmitEquiment"
          >提交</a-button
        >
      </template>
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import { UploadOutlined } from "@ant-design/icons-vue";
import { onMounted, reactive, ref } from "vue";

const form = reactive({
  file: [],
  name: "",
  describe: "",
  type: "",
});

const modelMark = ref(false);

const query = reactive({
  name: "",
  pageNum: 1,
  pageSize: 10,
});

const dataSource = [
  {
    id: 1,
    name: "设备1",
    describe: "设备描述1",
    bannerPic:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    paramPic:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  },
  {
    id: 2,
    name: "设备2",
    describe: "设备描述2",
    bannerPic:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    paramPic:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  },
];

const columns = [
  {
    title: "设备名称",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "设备描述",
    dataIndex: "describe",
    key: "describe",
  },
  {
    title: "设备缩略图",
    dataIndex: "bannerPic",
    key: "bannerPic",
  },
  {
    title: "设备参数图",
    dataIndex: "paramPic",
    key: "paramPic",
  },
  {
    title: "操作",
    dataIndex: "operation",
    key: "operation",
  },
];

const handleInitList = () => {
  console.log(query);
};

const handleSubmitEquiment = () => {};

onMounted(() => {
  handleInitList();
});
</script>

<style>
.ant-btn-primary {
  background-color: #1677ff;
}
</style>
