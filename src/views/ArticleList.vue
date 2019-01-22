<template>
  <div>
    <the-manage-table
      :columns="manageTableColumns"
      :srcUrl="manageTableOpts.srcUrl"
      :editBoxOpts="{width: '100%'}"
      :newOneBoxOpts="{width: '100%'}"
      :ops="['edit', 'delete', 'newOne', 'refresh', 'enable', 'disable']">
      <template slot="tableOperateHeader" slot-scope="scope">
        <el-form :inline="true" :model="scope.data" class="demo-form-inline" @submit.native.prevent>
          <el-form-item label="标题">
            <el-input v-model="scope.data.title" placeholder="标题"></el-input>
          </el-form-item>
          <el-form-item label="分类">
            <el-select v-model="scope.data.type" placeholder="文章分类">
              <el-option label="所有" value=""></el-option>
              <el-option
                v-for="item in $store.state.articleType"
                :key="item.id"
                :label="item.type_text"
                :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="状态">
            <el-select v-model="scope.data.status">
              <el-option label="所有" value=""></el-option>
              <el-option value="1" label="启用"></el-option>
              <el-option value="0" label="禁用"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </template>

      <template slot="editForm" slot-scope="scope">
        <el-form :model="scope.data">
          <el-row :gutter="24">
            <el-col :span="18">
              <el-row :gutter="20">
                <el-col :span="18">
                  <el-form-item prop="title">
                    <el-input
                      placeholder="标题"
                      v-model="scope.data.title"
                      clearable>
                    </el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item prop="status">
                    <el-select v-model="scope.data.status" placeholder="默认启用">
                      <el-option label="启用" value="1"></el-option>
                      <el-option label="禁用" value="0"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="18">
                  <el-form-item prop="keyword">
                    <el-input
                      placeholder="关键字（可选），使用英文逗号隔开"
                      v-model="scope.data.keyword"
                      clearable>
                    </el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item prop="type">
                    <el-select v-model="scope.data.type" placeholder="选择文章分类">
                      <el-option
                        v-for="item in $store.state.articleType"
                        :key="item.id"
                        :label="item.type_text"
                        :value="item.id">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-col>
            <!--预览图上传-->
            <el-col :span="6" class="avatar-uploader">
              <el-upload
                class="avatar-uploader thumb-uploader"
                :action="$store.getters.articleThumbPic.apiUrl"
                :show-file-list="false"
                :on-success="function(res, file) {
                  handleAvatarSuccess(res, file, scope)
                }"
                :before-upload="beforeAvatarUpload"
                :headers="$store.getters.articleThumbPic.authHeader">
                <img v-if="scope.data.thumb_img" :src="scope.data.thumb_img" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                <div class="el-upload__text" style="font-size: 13px;background-color: #e6e6e6d9;">上传文章缩略图（可选）</div>
              </el-upload>
            </el-col>
          </el-row>
          <quill-editor v-model="scope.data.content"
                        :options="quillEditor.editorOption" :style="'width:' + qlEditorSliderVal + '%;'">
            <!--@blur="onEditorBlur($event)"-->
            <!--@focus="onEditorFocus($event)"-->
            <!--@change="onEditorChange($event)">-->
          </quill-editor>
          <el-slider v-model="qlEditorSliderVal"></el-slider>
        </el-form>
      </template>

      <template slot="newOneForm" slot-scope="scope">
        <el-form :model="scope.data">
          <el-row :gutter="24">
            <el-col :span="18">
              <el-row :gutter="20">
                <el-col :span="18">
                  <el-form-item prop="title">
                    <el-input
                      placeholder="标题"
                      v-model="scope.data.title"
                      clearable>
                    </el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item prop="status">
                    <el-select v-model="scope.data.status" placeholder="默认启用">
                      <el-option label="启用" value="1"></el-option>
                      <el-option label="禁用" value="0"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="18">
                  <el-form-item prop="keyword">
                    <el-input
                      placeholder="关键字（可选），使用英文逗号隔开"
                      v-model="scope.data.keyword"
                      clearable>
                    </el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item prop="type">
                    <el-select v-model="scope.data.type" placeholder="选择文章分类">
                      <el-option
                        v-for="item in $store.state.articleType"
                        :key="item.id"
                        :label="item.type_text"
                        :value="item.id">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-col>
            <!--预览图上传-->
            <el-col :span="6" class="avatar-uploader">
              <el-upload
                class="avatar-uploader thumb-uploader"
                :action="$store.getters.articleThumbPic.apiUrl"
                :show-file-list="false"
                :on-success="function(res, file) {
                  handleAvatarSuccess(res, file, scope)
                }"
                :before-upload="beforeAvatarUpload"
                :headers="$store.getters.articleThumbPic.authHeader">
                <img v-if="scope.data.thumb_img" :src="scope.data.thumb_img" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                <div class="el-upload__text" style="font-size: 13px;background-color: #e6e6e6d9;">上传文章缩略图（可选）</div>
              </el-upload>
            </el-col>
          </el-row>
          <quill-editor v-model="scope.data.content"
                        :options="quillEditor.editorOption" :style="'width:' + qlEditorSliderVal + '%;'">
            <!--@blur="onEditorBlur($event)"-->
            <!--@focus="onEditorFocus($event)"-->
            <!--@change="onEditorChange($event)">-->
          </quill-editor>
          <el-slider v-model="qlEditorSliderVal"></el-slider>
        </el-form>
      </template>
    </the-manage-table>
  </div>
</template>

<script>
// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import TheManageTable from '@/idxLib/components/TheManageTable'
import { quillEditor } from 'vue-quill-editor'
import idxRichTextEditorCfg from '@/idxLib/utils/QuillEditor/options'
//
// import {ImageDrop} from 'quill-image-drop-module'
// import ImageResize from 'quill-image-resize-module'
// import {container, ImageExtend, QuillWatch} from 'quill-image-extend-module'
//
// Quill.register('modules/ImageExtend', ImageExtend)
// Quill.register('modules/imageResize', ImageResize)
// Quill.register('modules/imageDrop', ImageDrop)

export default {
  name: 'ArticleList',
  components: {
    TheManageTable,
    quillEditor
  },
  mounted: function () {
  },
  beforeMount: function () {
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    handleAvatarSuccess (res, file, scope) {
      if (res.status) {
        scope.data.thumb_img = res.data.url
      }
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  },
  data: function () {
    let thisView = this
    return {
      quillEditor: {
        editorOption: idxRichTextEditorCfg
      },
      manageTableColumns: [
        {
          prop: 'title',
          label: '标题',
          width: '200'
        },
        {
          prop: 'thumb_img',
          label: '首图',
          width: '150',
          contentExpress: function (val) {
            return '<img style="width: 100%" src="' + val + '" />'
          },
          dangerouslyUseHTMLString: true
        },
        {
          prop: 'type',
          label: '文章类型',
          contentExpress: function (val) {
            return thisView.$store.getters.typeMapObject[val]
          }
        },
        {
          prop: 'status',
          label: '状态',
          width: '80',
          contentExpress: function (val) {
            if (val === '0') {
              return '已禁用'
            } else {
              return '已启用'
            }
          }
        },
        {
          prop: 'updated_at',
          label: '上次更新',
          width: '180'
        },
        {
          prop: 'created_at',
          label: '创建于',
          width: '180'
        }
      ],
      manageTableOpts: {
        srcUrl: '/admin/article'
      },
      qlEditorSliderVal: 100
    }
  },
  computed: {}
}

</script>

<style>
  .quill-editor .ql-editor {
    min-height: 300px;
  }
  .quill-editor{
    margin: auto;
  }

  .avatar-uploader > .el-upload {
    border: 1px dashed #e6e6e6;
    position: relative;
    height: 100px;
    width: 200px;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 200px;
    height: 43px;
    line-height: 56px;
    text-align: center;
  }

  .el-upload__text {
    font-size: 13px;
    line-height: 50px;
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  .avatar {
    height: 100%;
    display: block;
    margin: auto;
  }
</style>
