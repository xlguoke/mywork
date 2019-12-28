// pages/views/index/apointment/apointment.js
Page({
    data: {
        address:{},
        showDateModel:true,
        dayList:[],
        timeData:[
            {
                        date: '2小时上门',
                        show: 'true'
                    },
                    {
                        date: '09:00-11:00',
                        show: 'true'
                    },
                    {
                        date: '11:00-13:00',
                        show: 'true'
                    },
                    {
                        date: '13:00-15:00',
                        show: 'true'
                    },
                    {
                        date: '15:00-17:00',
                        show: 'true'
                    },
                    {
                        date: '17:00-19:00',
                        show: 'true'
                    }
        ],
        timeList: [0, 9, 11, 13, 15, 17]

    },
    onLoad(){
        this.initDayList();
    },
    getAddress(data){
        if(data){
            this.setData({
                address:data
            }) 
        }
    },
    openDatePopup(){
        this.setData({
            showDateModel:true
        })
    },
    initDayList(){
        let toDay = new Date().toLocaleDateString().replace(/\//g,'-');
        console.log(toDay)
    },
    initTimeList() {
                //当前
        let timeData =this.data.timeData;
        let date = new Date();
        let toDay = date.getDate();
        let chooseT = this.data.dTime.split('-')[2];
        if (toDay == chooseT) {
            let hours = date.getHours();
            if (hours >=19) {
                timeData.forEach(v => {
                    v.show = 'false';
                })
            } else {
                this.data.timeList.forEach((v, i) => {
                    if (v <= hours && i !== 0) {
                        timeData[i].show = 'false'
                    }
                })
            }
        }
        this.data.timeData = timeData;
    },
})