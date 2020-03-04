<template>
    <a-layout>
        <a-layout-header class="header-box">
            <div class="mechanism-group">
                <img src="../../../assets/LTAEMWP5ZY~MZ8115JK(UGM.png" alt="" class="mechanism-img">
                <span class="mechanism">照母山企业新型学徒制培训中心</span>
                <span class="changeMechanism" @click="showModal">切换机构</span>
            </div>
            <div style="position:relative;display:flex;flex-direction:row">
                    <span class="top-right-item">
                        <a-icon type="question-circle" style="font-size:16px;"/>
                    </span>
                <span class="top-right-item">
                        <a-icon type="bell" style="font-size:16px;"/>
                    </span>
                <a-dropdown>
                        <span class="top-right-item">
                            <img src="../../../assets/LTAEMWP5ZY~MZ8115JK(UGM.png"
                                 style="width:24px;height:24px;border-radius:50%;margin-right:5px"> {{this.userData.nick_name}}老师</span>
                    <a-menu slot="overlay">
                        <a-menu-item>
                            <a-icon type="user"/>
                            个人资料
                        </a-menu-item>
                        <a-menu-item @click="signOut()">
                            <a-icon type="poweroff"/>
                            退出登录
                        </a-menu-item>
                    </a-menu>
                </a-dropdown>
            </div>
        </a-layout-header>
        <a-layout-content>
            <div style="background-color:#fff">
                <div class="nav-list">
                    <a-breadcrumb>
                        <a-breadcrumb-item>首页</a-breadcrumb-item>
                        <a-breadcrumb-item>教务管理</a-breadcrumb-item>
                        <a-breadcrumb-item>直播课堂</a-breadcrumb-item>
                    </a-breadcrumb>
                </div>
            </div>
            <div class="room-box">
                <div>
                    <p class="livebroad-info">
                        <span class="title">直播名称：</span>
                        第一讲 电工基础知识
                    </p>
                    <p class="livebroad-info">
                        <span class="title">直播讲师：</span>
                        何辅堂
                    </p>
                </div>
                <div class="mb-no">
                    <p class="livebroad-info">
                        <span class="title">直播时间：</span>
                        2020-03-01 09:00 - 09:45
                    </p>
                    <p class="livebroad-info">
                        <span class="title">直播讲义：</span>
                        第一讲 电工基础知识
                        <a-button type="primary" style="margin-left:20px;" @click="myHandouts=true">选择</a-button>
                    </p>
                </div>
            </div>
            <div class="room-box">
                <div class="livebroad-state">
                    <a-button type="primary" style="margin-right:20px;">生成直播推流地址</a-button>
                    <a-button type="primary" disabled style="margin-right:20px;">开始直播</a-button>
                    <a-button type="primary" disabled>结束直播</a-button>
                    <div class="state-box">
                        <span>直播状态：</span>
                        <a-button size="small" shape="round">未开始</a-button>
                        <a-button type="primary" size="small" shape="round">直播中</a-button>
                    </div>
                </div>
                <ul class="obs">
                    <li class="item">
                        <span class="l">OBS直播地址：</span>
                        请使用专用直播工具OBS上直播课。
                        <a href="">点击下载 Windows版</a>
                        | <a href="">Mac版</a> | <a href="">Linux版</a> 。
                        <a href="">查看OBS详细操作说明</a>。
                    </li>
                    <li class="item">
                        <span class="l">OBS推流地址：</span>
                    </li>
                    <li class="item">
                        <span class="l">OBS推流名称：</span>
                    </li>
                </ul>
            </div>
            <div class="room-box" style="padding:0;height:664px">
                <a-layout>
                    <a-layout-sider width="500px" style="background:#fff;border-right:1px solid #eee;">
                        <a-layout>
                            <a-layout-header style="background:#fff;text-align: center;border-bottom:1px solid #eee;">学员信息</a-layout-header>
                            <a-layout>
                                <a-layout-sider width="300px">
                                    <div style="width:100%;height:600px;overflow-y: auto;">
                                        <a-menu style="width: 100%;min-height:100%;">
                                            <a-menu-item>11</a-menu-item>
                                            <a-menu-item>133</a-menu-item>
                                            <a-menu-item>1343</a-menu-item>
                                        </a-menu>
                                    </div>
                                </a-layout-sider>
                                <a-layout-content style="background:#fff;height:600px;">
                                    <div class="online-man">
                                        在线1人 / 共 100 人
                                    </div>
                                    <ul class="man-list">
                                        <li class="man-item">
                                            <img src="../../../assets/gril.svg" alt="">
                                            名称
                                        </li>
                                        <li class="man-item">
                                            <img src="../../../assets/man.svg" alt="">
                                            名称
                                        </li>
                                        <li class="man-item no-online">
                                            <img src="../../../assets/man-no.svg" alt="">
                                            名称
                                        </li>
                                        <li class="man-item no-online">
                                            <img src="../../../assets/gril-no.svg" alt="">
                                            名称
                                        </li>
                                    </ul>
                                </a-layout-content>
                            </a-layout>
                        </a-layout>
                    </a-layout-sider>
                    <a-layout-content>
                        <a-layout>
                            <a-layout-header style="background:#fff;text-align: center;border-bottom:1px solid #eee;">互动交流</a-layout-header>
                            <a-layout-content style="height:600px;background:#fff;">
                                <div class="interflow-con">
                                    <ul class="detail">
                                        <li class="item comeon"><span class="name">AAA</span>进来了</li>
                                        <li class="item goout"><span class="name">AAA</span>离开了</li>
                                        <li class="item"><span class="name">CCC:</span>你好</li>
                                    </ul>
                                </div>
                                <div class="interflow-footer">
                                    <a-input v-model="interflowInfo" placeholder="请输入" style="margin-right:15px;"></a-input>
                                    <a-icon type="smile" theme="outlined" :style="{ fontSize: '30px',color:'#aaa',marginRight:'15px'}"/>
                                    <a-icon type="smile" theme="outlined" :style="{ fontSize: '30px',color:'#aaa'}"/>
                                    <a-button type="primary" style="margin-left:15px;">发送</a-button>
                                </div>
                            </a-layout-content>
                        </a-layout>
                    </a-layout-content>
                </a-layout>
            </div>
        </a-layout-content>
        <!-- 切换机构 -->
        <a-modal title="我的机构" :visible="visible" @cancel="handleCancel" width="700px" :footer="null">
            <a-table :columns="columns" :dataSource="data" :pagination='false'>
                <span slot="action" slot-scope="text, record">
                    <span style="color:#F59A23" v-if="record.key!=3">当前</span>
                    <a-button type="primary" v-if="record.key==3">切换</a-button>
                </span>
            </a-table>
        </a-modal>
        <!--选择讲义-->
        <a-modal title="我的讲义" :visible="myHandouts" @cancel="cancelHandouts" @ok="confirmHandouts" width="500px">
            <a-input-search placeholder="搜索课程名称" @search="onSearch"/>
            <a-tree
                    @expand="onExpand"
                    :expandedKeys="expandedKeys"
                    :autoExpandParent="autoExpandParent"
                    :treeData="gData"
            >
                <template slot="title" slot-scope="{title}">
                    <span v-if="title.indexOf(searchValue) > -1">
                      {{title.substr(0, title.indexOf(searchValue))}}
                      <span style="color: #f50">{{searchValue}}</span>
                      {{title.substr(title.indexOf(searchValue) + searchValue.length)}}
                    </span>
                    <span v-else>{{title}}</span>
                </template>
            </a-tree>
        </a-modal>
    </a-layout>
</template>

<script>
    import ALayoutSider from "ant-design-vue/es/layout/Sider";

    const columns = [
        {
            title: "机构名称",
            dataIndex: "name",
            key: "name"
        },
        {
            title: "拥有角色",
            key: "role",
            dataIndex: "role"
        },
        {
            title: "",
            key: "action",
            dataIndex: "action",
            scopedSlots: {customRender: "action"}
        }
    ];
    const data = [
        {
            key: "1",
            name: "John Brown",
            role: "管理员"
        },
        {
            key: "2",
            name: "Jim Green",
            role: "班主任"
        },
        {
            key: "3",
            name: "Joe Black",
            role: "教师"
        }
    ];
    // 讲义 start
    const x = 3;
    const y = 2;
    const z = 1;
    const gData = [];
    const generateData = (_level, _preKey, _tns) => {
        const preKey = _preKey || '0';
        const tns = _tns || gData;

        const children = [];
        for (let i = 0; i < x; i++) {
            const key = `${preKey}-${i}`;
            tns.push({title: key, key, scopedSlots: {title: 'title'}});
            if (i < y) {
                children.push(key);
            }
        }
        if (_level < 0) {
            return tns;
        }
        const level = _level - 1;
        children.forEach((key, index) => {
            tns[index].children = [];
            return generateData(level, key, tns[index].children);
        });
    };
    generateData(z);
    const dataList = [];
    const generateList = data => {
        for (let i = 0; i < data.length; i++) {
            const node = data[i];
            const key = node.key;
            dataList.push({key, title: key});
            if (node.children) {
                generateList(node.children, node.key);
            }
        }
    };
    generateList(gData);
    const getParentKey = (key, tree) => {
        let parentKey;
        for (let i = 0; i < tree.length; i++) {
            const node = tree[i];
            if (node.children) {
                if (node.children.some(item => item.key === key)) {
                    parentKey = node.key;
                } else if (getParentKey(key, node.children)) {
                    parentKey = getParentKey(key, node.children);
                }
            }
        }
        return parentKey;
    };
    // 讲义 end
    export default {
        name: "liveBroadRoom",
        components: {ALayoutSider},
        data() {
            return {
                columns,
                data,
                visible: false,
                myHandouts: false,
                interflowInfo: '',
                collapsed: false,
                expandedKeys: [],
                searchValue: '',
                autoExpandParent: true,
                gData,
            }
        },
        created() {
            this.userData = JSON.parse(localStorage.getItem("userData"))
        },
        methods: {
            showModal() {
                this.visible = true;
            },
            handleCancel(e) {
                this.visible = false;
            },
            cancelHandouts() {
                this.myHandouts = false;
            },
            //选择讲义
            confirmHandouts() {

            },
            onExpand(expandedKeys) {
                this.expandedKeys = expandedKeys;
                this.autoExpandParent = false;
            },
            onChange(e) {
                const value = e.target.value;
                const expandedKeys = dataList
                    .map(item => {
                        if (item.key.indexOf(value) > -1) {
                            return getParentKey(item.key, gData);
                        }
                        return null;
                    })
                    .filter((item, i, self) => item && self.indexOf(item) === i);
                Object.assign(this, {
                    expandedKeys,
                    searchValue: value,
                    autoExpandParent: true,
                });
            },
            //退出登录
            signOut() {
                localStorage.removeItem("userData")
                localStorage.removeItem("Token")
                this.$router.push({name: "login"});
            }
        }
    }
</script>

<style scoped>
    .header-box {
        background: #fff;
        display: flex;
        justify-content: space-between;
        padding: 0 24px;
        box-shadow: 0 0 4px 1px #ddd;
        z-index: 99;
        position: sticky;
        top: 0;
    }

    .mechanism-group {
        display: flex;
        align-items: center;
    }

    .mechanism-img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
    }

    .mechanism-group {
        display: flex;
        align-items: center;
    }

    .mechanism {
        font-size: 20px;
        color: #555555;
        margin-left: 16px;
    }

    .changeMechanism {
        color: rgb(24, 144, 255);
        cursor: pointer;
        margin-left: 24px;
    }

    .top-right-item {
        height: 100%;
        padding: 0 10px;
        display: block;
        cursor: pointer;
    }

    .top-right-item:hover {
        background-color: rgba(249, 249, 249, 1);
    }

    .room-box {
        margin: 24px;
        background-color: #fff;
        padding: 18px;
    }

    .livebroad-info {
        display: inline-block;
        width: 30%;
        min-width: 400px;
        max-width: 800px;
    }

    .livebroad-info .title {
        display: inline-block;
        width: 90px;
        color: #999;
    }

    .mb-no .livebroad-info {
        margin-bottom: 0;
    }

    .livebroad-state .state-box {
        display: inline-block;
        margin-left: 50px;
    }

    .livebroad-state .state-box > span {
        color: #999;
        margin-right: 20px;
    }

    .obs {
        padding-left: 0;
        margin: 0;
    }

    .obs .item {
        margin-top: 15px;
        list-style: none;
    }

    .obs .item .l {
        color: #aaa;
        width: 120px;
        display: inline-block;
    }

    .obs .item a:hover {
        text-decoration: underline;
    }

    .online-man {
        text-align: center;
        height: 50px;
        line-height: 50px;
        font-size: 12px;
    }

    .man-list {
        height: 550px;
        overflow-y: auto;
        margin: 0;
        padding: 0;
    }

    .man-list .man-item {
        line-height: 30px;
        padding-left: 20px;
    }

    .man-list .man-item.no-online {
        color: #d7d7d7;
    }

    .man-list .man-item > img {
        margin-right: 5px;
        vertical-align: middle;
    }

    .interflow-con {
        height: 540px;
        overflow: auto;
        padding: 20px;
        display: flex;
        align-items: flex-end;
    }

    .interflow-con .detail {
        line-height: 28px;
        padding: 0;
        margin: 0;
        color: #1890ff;
    }

    .interflow-con .detail .name {
        display: inline-block;
        margin-right: 15px;
    }

    .interflow-con .detail .comeon {
        color: #70b603
    }

    .interflow-con .detail .goout {
        color: #f59a23
    }

    .interflow-footer {
        height: 60px;
        display: flex;
        align-items: center;
        padding: 0 30px;
        border-top: 1px solid #eee;
    }
</style>
