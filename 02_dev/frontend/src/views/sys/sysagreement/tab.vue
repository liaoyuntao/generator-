<template>
    <div >
        <div v-show="visible">
            <el-form :inline="true" :model="dataForm" @keyup.enter.native="getDataList()" style="margin-bottom:60px;">
                <seek ref="seek" :dataForm.sync="dataForm" :pathUrl="pathUrl"></seek>
                <div style="float:right">
                    <el-button @click="getDataList()">查询</el-button>
                    <el-button v-if="isAuth(model+':'+pathUrl+':save')" type="primary" @click="addOrUpdateHandle()">新增</el-button>
                    <el-button v-if="isAuth(model+':'+pathUrl+':delete')" type="danger" @click="deleteHandle()" :disabled="dataListSelections.length <= 0">批量删除</el-button>
                </div>
            </el-form>
            <el-table
                    :default-sort="{prop: 'id', order: 'ascending'}"
                    @sort-change="sort"
                    :data="dataList"
                    border height="500"
                    v-loading="dataListLoading"
                    @selection-change="selectionChangeHandle"
                    style="width: 100%;">
                <el-table-column
                        srtable="custom"
                        type="selection"
                        header-align="center"
                        align="center"
                        width="50">
                </el-table-column>
                <el-table-column v-for="item in tableFieldMap[pathUrl].tableSetList"
                                 sortable="custom"
                                 :prop="item.fieldName"
                                 header-align="center"
                                 align="center" :label="item.pageComment">
                    <template slot-scope="scope">
                        <!--日期date-->
                        <span v-if="item.inputType==='2'" v-text="scope.row[item.fieldName]"></span>
                        <!-- 时间datetime-->
                        <span v-else-if="item.inputType==='3'" v-text="scope.row[item.fieldName]"></span>
                        <!--上传图片-->
                        <span v-else-if="item.inputType==='8'">
                      <img :src="scope.row[item.fieldName]" style="width:50px;height:50px;">
        </span>
                        <!--下拉选selec-->
                        <!-- <span  v-else-if="item.inputType=='5' "  v-text="jsonStr(busConfig[pathUrl+item.fieldnames].map,scope.row[item.fieldName])" >  </span>-->
                        <span  v-else-if="item.inputType=='4' || item.inputType=='5'"  v-text="busConfig[pathUrl+item.fieldnames].map[scope.row[item.fieldName]]" >  </span>
                        <span v-else v-text="scope.row[item.fieldName]"></span>
                    </template>
                </el-table-column>
                <el-table-column
                        fixed="right"
                        header-align="center"
                        align="center"
                        width="150"
                        label="操作" >
                    <template slot-scope="scope">
                        <el-button type="text"  v-if="isAuth(model+':'+pathUrl+':save')"  size="mini" @click="addOrUpdateHandle(scope.row.id)">修改
                        </el-button>
                        <el-button  v-if="isAuth(model+':'+pathUrl+':delete')"  type="text" size="mini" @click="deleteHandle(scope.row.id)">删除</el-button>
                        <el-button  v-for="items in operation"   v-if="isAuth(model+':'+pathUrl+':'+items.scope)"  @click="items.fun(scope.row)" type="text" size="mini" v-text="items.name"></el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                    @size-change="sizeChangeHandle"
                    @current-change="currentChangeHandle"
                    :current-page="pageIndex"
                    :page-sizes="[10, 20, 50, 100]"
                    :page-size="pageSize"
                    :total="totalPage"
                    layout="total, sizes, prev, pager, next, jumper">
            </el-pagination>
        </div>
        <!-- 跳转修改 -->
        <div v-show="!visible"  id="save"  >
            <div class="save">
                <el-tabs v-model="activeName" @tab-click="handleClick" tab-position="top"  >
                    <el-tab-pane :label="!saveForm.id ? '新增' : '修改'" name="save"  key="save">
                        <el-form :model="saveForm" :rules="dataRule" ref="saveForm" @keyup.enter.native="dataFormSubmit()" label-width="80px">
                            <el-form-item :label="item.pageComment" :prop="item.fieldName" v-for="item in tableFieldMap[pathUrl].isSetList">
                                <!--数字number-->
                                <el-input-number v-model="saveForm[item.fieldName]" :placeholder="item.pageComment" v-if="item.inputType==='1'" :min="1" ></el-input-number>
                                <!--日期date-->
                                <el-date-picker v-model="saveForm[item.fieldName]"  v-else-if="item.inputType==='2'" type="date" style="width:100%;" value-format="yyyy-MM-dd"  :placeholder="item.pageComment" format="yyyy-MM-dd"><template slot="prepend">{{item.pageComment}}</template> </el-date-picker>
                                <!--时间datetime-->
                                <el-date-picker v-model="saveForm[item.fieldName]"  value-format="yyyy-MM-dd HH:mm:ss"  format="yyyy-MM-dd HH:mm:ss" :placeholder="item.pageComment" type="datetime" style="width:100%;"  v-else-if="item.inputType==='3'"><template slot="prepend">{{item.pageComment}}</template></el-date-picker>
                                <!--下拉选select-->
                                <el-select v-model="saveForm[item.fieldName]" :placeholder="item.pageComment" style="width:100%;" v-else-if="item.inputType=='4'">
                                    <el-option
                                            v-for="itemss in busConfig[pathUrl+item.fieldnames].list"
                                            :key="itemss.confName"
                                            :label="itemss.confName"
                                            :value="itemss.confVue"><template slot="prepend">{{item.pageComment}}</template>
                                    </el-option>
                                </el-select>
                                <!--复选框-->
                                <el-select v-else-if="item.inputType=='5'" style="width:100%"
                                           v-model="saveForm[item.fieldName]"  multiple  filterable allow-create default-first-option
                                           :placeholder="item.pageComment">
                                    <el-option
                                            v-for="itemss in busConfig[pathUrl+item.fieldnames].list"
                                            :key="itemss.confVue"
                                            :label="itemss.confName"
                                            :value="itemss.confVue"><template slot="prepend">{{item.pageComment}}</template>
                                    </el-option>
                                </el-select>
                                <!--富文本框-->
                                <div class="editor-container"  v-else-if="item.inputType=='6'">
                                    <editor id="editor_id"
                                            height="400px"
                                            width="100%"
                                            style="width:100%"
                                            :fieldName="item.fieldName"
                                            :content="saveForm[item.fieldName]"
                                            :pluginsPath="'/static/kindeditor/plugins/'"
                                            :uploadJson="sysurl+'api/uploadFile'"
                                            :loadStyleMode="false"
                                            @update-content="onEditorChange"
                                            :allowFileManager="false"
                                            :allowImageRemote="false"
                                    ></editor>
                                </div>
                                <!--文本域-->
                                <el-input :autosize="{ minRows: 10, maxRows: 4}" v-else-if="item.inputType=='7'"
                                          type="textarea"
                                          :rows="2"
                                          :placeholder="item.pageComment"
                                          v-model="saveForm[item.fieldName]"><template slot="prepend">{{item.pageComment}}</template>
                                </el-input>
                                <!--上传图片-->
                                <el-upload v-else-if="item.inputType=='8'"
                                           class="avatar-uploader"
                                           :action="imgUrl"
                                           list-type="picture-card"
                                           :show-file-list="false"
                                           :data="item"
                                           :on-success="handleAvatarSuccess"
                                           :before-upload="beforeAvatarUpload" :on-preview="handlePictureCardPreview">
                                    <img  style="width:100%;height:100%;" v-if="saveForm[item.fieldName]" :src="saveForm[item.fieldName]" class="avatar">
                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                </el-upload>
                                <!--多图片上传-->
                                <el-upload v-else-if="item.inputType=='9'" :action="imgUrl"  :on-remove="handleRemove" :data="item" list-type="picture-card" :file-list="saveForm[item.fieldName]"  :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload"  :on-preview="handlePictureCardPreview">
                                    <i class="el-icon-plus"></i><template slot="prepend">{{item.pageComment}}</template>
                                </el-upload>
                                <el-input v-model="saveForm[item.fieldName]" :placeholder="item.pageComment" v-else></el-input>
                            </el-form-item>
                        </el-form>
                        <el-dialog :visible.sync="prewImgLoad" :modal="false">
                            <img width="100%" :src="prewImg" alt="">
                        </el-dialog>
                        <span  class="dialog-footer" style="display: flex;justify-content:center;width:100%;">
                          <el-button @click="visible = true" >返回</el-button>
                            <el-button type="primary" @click="dataFormSubmit()">确定</el-button>
                        </span>
                    </el-tab-pane>
                    <el-tab-pane label="配置管理"  name="second"  key="second">配置管理</el-tab-pane>
                    <el-tab-pane label="角色管理"  name="third"  key="third">角色管理</el-tab-pane>
                    <el-tab-pane label="定时任务补偿" name="fourth" key="fourth">定时任务补偿</el-tab-pane>
                </el-tabs>

            </div>
        </div>
    </div>
</template>

<script>
    import seek from '@/components/generator/seek.vue'
    import API from '@/api'
    export default {
        components: {
            seek,
        },
        data () {
            return {
                activeName: 'save',
                visible:true,
                model: 'sys',
                pathUrl: 'sysagreement',
                busConfig: this.busConfig,
                tableFieldMap: this.tableFieldMap,
                sysurl: window.SITE_CONFIG.baseUrl,
                dataForm: {},
                sortData: {
                    order: null,
                    sidx: null
                },
                dataList: [],
                pageIndex: 1,
                pageSize: 20,
                totalPage: 0,
                dataListLoading: false,
                addOrUpdateVisible: false,
                dataListSelections: [],
                // 操作按钮
                operation: [
                    // {'scope': 'delete', fun: this.hideTableField, name: '显示所有字段'}
                ],
                saveForm: {
              id: 0,
              remarks: '',
              versionNo: '',
              createBy: '',
              createTime: '',
              updateBy: '',
              updateTime: '',
              deleteFlag: '',
              sort: '',
              title: '',
              csVersion: '',
              },
              config: {
                  initialFrameWidth: null,
                  initialFrameHeight: 350
              },
              prewImgLoad: false,
              prewImg: null,
              imgUrl: API.sysoss.upload(this.$cookie.get('token')),
              dataRule: {}
            }
        },
        activated () {
            this.getDataList()
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
            sort (value) {
                this.sortData.sidx = value.prop
                this.sortData.order = value.order === 'descending' ? 'desc' : 'asc'
                this.getDataList()
            },
            setListSelections (val) {
                this.dataListSelections = val
            },
            getDataList () {
                this.dataListLoading = true
                var params = {
                    page: this.pageIndex,
                    limit: this.pageSize,
                    sidx: this.sortData.sidx,
                    order: this.sortData.order
                }
                for (var key in this.dataForm) {
                    if (this.dataForm[key]) {
                        if (this.dataForm[key] instanceof Array) {
                            params[key] = JSON.stringify(this.dataForm[key])
                        } else {
                            params[key] = this.dataForm[key]
                        }
                    }
                }
                API[this.pathUrl].list(params).then(({data}) => {
                    if (data && data.code === 0) {
                        this.dataList = data.data.list
                        this.totalPage = data.data.totalCount
                        if (data.data.totalPage < this.pageIndex && data.data.totalPage !== 0) {
                            this.pageIndex = 1
                            this.getDataList()
                        }
                    } else {
                        this.dataList = []
                        this.totalPage = 0
                    }
                    this.dataListLoading = false
                })
            },
            // 每页数
            sizeChangeHandle (val) {
                this.pageSize = val
                this.pageIndex = 1
                this.getDataList()
            },
            // 当前页
            currentChangeHandle (val) {
                this.pageIndex = val
                this.getDataList()
            },
            // 多选
            selectionChangeHandle (val) {
                this.dataListSelections = val
            },
            // 删除
            deleteHandle (id) {
                var ids = id ? [id] : this.dataListSelections.map(item => {
                    return item.id
                })
                        this.$confirm(`确定对[id=${ids.join(',')}]进行[${id ? '删除' : '批量删除'}]操作?`, '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    API[this.pathUrl].del(ids).then(({data}) => {
                        if (data && data.code === 0) {
                                         this.$message({
                                message: '操作成功',
                                type: 'success',
                                duration: 1500,
                                onClose: () => {
                                    this.getDataList()
                                }
                            })
                        } else {
                                 this.$message.error(data.msg)
                        }
                    })
                })
            },
            onEditorChange: function (text, fielName) {
                this.saveForm[fielName] = text
            },
            // 多图片上传删除事件
            handleRemove (file, fileList) {
                this.saveForm[file.name] = fileList
            },
            // 预览多图片事件
            handlePictureCardPreview: function (file) {
                this.prewImgLoad = true
                this.prewImg = file.url
            },
            // 添加多图片上传事件
            handleAvatarSuccess: function (res, file) {
                console.log(this.saveForm[res.fieldName] instanceof Array)
                if (this.saveForm[res.fieldName] instanceof Array) {
                    this.saveForm[res.fieldName].push({urd: 888, name: res.fieldName, url: res.url})
                } else {
                    this.saveForm[res.fieldName] = res.url
                }
            },
            // 图片上传格式验证
            beforeAvatarUpload (file) {
                const isJPG = file.type === 'image/jpeg'
                const isLt2M = file.size / 1024 / 1024 < 2
                return true
            },
            // 新增 / 修改
            addOrUpdateHandle (id) {
                         this.$nextTick(() => {
                    this.visible=false;
                    this.init(id)
                })
            },
            // 初始化方法
            init: function (id) {
                this.saveForm.id = id || 0
                for (var i = 0; i < this.tableFieldMap[this.pathUrl].columns.length; i++) {
                    var cou = this.tableFieldMap[this.pathUrl].columns[i]
                    if (cou.isNull === '1') {
                        this.dataRule[cou.fieldName] = [
                            { required: true, message: cou.pageComment + '不能为空', trigger: 'blur' }
                        ]
                    }
                }
                  this.$nextTick(() => {
                        this.$refs['saveForm'].resetFields()
                    if (id) {
                        API[this.pathUrl].info(id).then(({data}) => {
                            if (data && data.code === 0) {
                                for (var i = 0; i < this.tableFieldMap[this.pathUrl].columns.length; i++) {
                                    var cou = this.tableFieldMap[this.pathUrl].columns[i]
                                    // 多选框兼容
                                    if (cou.inputType === '5') {
                                        if (!data.data[cou.fieldName]) {
                                            this.saveForm[cou.fieldName] = []
                                        } else {
                                            console.log(data.data[cou.fieldName])
                                            var arr = null
                                            try {
                                                arr = JSON.parse(data.data[cou.fieldName])
                                            } catch (e) {
                                                arr = data.data[cou.fieldName]
                                            }
                                            if (arr instanceof Array) {
                                                this.saveForm[cou.fieldName] = arr
                                            } else {
                                                arr += ''
                                                this.saveForm[cou.fieldName] = [arr]
                                            }
                                        }
                                    }
                                    // 多图像上传兼容
                                    else if (cou.inputType === '9') {
                                        if (!data.data[cou.fieldName]) {
                                            this.saveForm[cou.fieldName] = []
                                        } else {
                                            var arrayImg = null
                                            try {
                                                arrayImg = JSON.parse(data.data[cou.fieldName])
                                            } catch (e) {
                                                arrayImg = data.data[cou.fieldName]
                                            }
                                            if (arrayImg instanceof Array) {
                                                this.saveForm[cou.fieldName] = arrayImg
                                            } else {
                                                this.saveForm[cou.fieldName] = [{uid: 999, name: cou.fieldName, url: arrayImg}]
                                            }
                                        }
                                    } else {
                                        this.saveForm[cou.fieldName] = data.data[cou.fieldName]
                                    }
                                }
                            }
                        })
                    }
                })
            },
            // 表单提交
            dataFormSubmit () {
                         this.$refs['saveForm'].validate((valid) => {
            if (valid) {
            var params = {}
            Object.assign(params, this.saveForm)
            console.log(params)
            var tick = !this.saveForm.id ? API[this.pathUrl].add(params) : API[this.pathUrl].update(params)
            tick.then(({data}) => {
            if (data && data.code === 0) {
                  this.$message({
            message: '操作成功',
            type: 'success',
            duration: 1500,
            onClose: () => {
            this.visible = true
                        this.$emit('refreshDataList')
            }
            })
            } else {
                   this.$message.error(data.msg)
            }
            })
            }
            })
            }
        }
    }
</script>
<style>
    #save .el-tabs__header{
        top:100px;
        margin-bottom: 100px;
    }
    #pane-sysagreement .el-card {
        margin-top: 50px;
    }
</style>
