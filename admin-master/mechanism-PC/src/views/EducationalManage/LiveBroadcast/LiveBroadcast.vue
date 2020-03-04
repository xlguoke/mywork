<template>
    <div class="login">
        <div style="background-color:#fff">
            <div class="nav-list">
                <!-- <a-icon type="left-circle" theme="filled" class="trigger" style="font-size:20px;cursor:pointer" @click="e=>this.$store.state.activePage = 'IndustryPost'"
                /> -->
                <a-breadcrumb>
                    <a-breadcrumb-item href="">
                        <span>首页</span>
                    </a-breadcrumb-item>
                    <a-breadcrumb-item>
                        教务管理
                    </a-breadcrumb-item>
                    <a-breadcrumb-item>
                        直播教学
                    </a-breadcrumb-item>
                    <a-breadcrumb-item>
                        直播课堂
                    </a-breadcrumb-item>
                </a-breadcrumb>
            </div>
            <div class="introduce-box">
                <div class="introduce-title">我的直播课程</div>
            </div>
        </div>
        <div class="contentMain-box">
            <a-table :dataSource="datas" :rowKey="record => record.id" :pagination="pagination">
                <a-table-column title="名称" dataIndex="title" key="title"/>
                <a-table-column title="讲师" dataIndex="teacher" key="teacher"/>
                <a-table-column title="班级" dataIndex="className" key="className"/>
                <a-table-column title="开始时间" dataIndex="time" key="time"/>
                <a-table-column title="状态" dataIndex="status" key="status"/>
                <a-table-column title="操作" dataIndex="action">
                    <template slot-scope="text, record">
                        <a href="javascript:;" @click="goLiveRoom(record)">进入直播间</a>
                        <a-divider type="vertical"/>
                        <a href="javascript:;" @click="cancelLive(record)">取消</a>
                    </template>
                </a-table-column>
            </a-table>
        </div>
    </div>
</template>
<script>


    export default {
        name: "login",
        data() {
            return {
                datas: [{}],
                pagination: {
                    current: 1,
                    total: 0,
                    defaultPageSize: 10,
                    pageSize: 10,
                    showTotal: total => `共 ${total} 条数据`,
                    showSizeChanger: true,
                    pageSizeOptions: ["5", "10", "15", "20"],
                    onShowSizeChange: (current, pageSize) => {
                        this.pagination.pageSize = pageSize;
                        this.pagination.current = current;
                    }
                },
            };
        },
        mounted() {

        },
        methods: {
            goLiveRoom(data) {
                let routeData = this.$router.resolve({
                    name: 'LiveBroadRoom'
                });
                window.open(routeData.href, "_blank");
            }
        }
    };
</script>
<style scoped>

</style>
