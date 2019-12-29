// pages/views/index/apointment/apointment.js
Page({
  data: {
    address: {},
    pointTime: '',
    showDateModel: false,
    dayList: [],
    timeData: [{
        date: '2小时上门',
        show: true
      },
      {
        date: '09:00-11:00',
        show: true
      },
      {
        date: '11:00-13:00',
        show: true
      },
      {
        date: '13:00-15:00',
        show: true
      },
      {
        date: '15:00-17:00',
        show: true
      },
      {
        date: '17:00-19:00',
        show: true
      }
    ],
    timeList: [0, 9, 11, 13, 15, 17],
    dayIndex: 0,
    dayDate: ''
  },
  onLoad() {
    this.initDayList();
  },
  // 选择地址
  getAddress(data) {
    if (data) {
      this.setData({
        address: data
      })
    }
  },
  // 选择哪天
  chooseDay(e) {
    let d = e.currentTarget.dataset.date;
    let day = this.data.dayList[d].date;
    this.setData({
      dayDate: day,
      dayIndex: d
    })
    this.initTimeList();
  },
  // 选择时间段
  chooseHour(e) {
    let hour = e.currentTarget.dataset.hour;
    let day = this.data.dayDate;
    let pointTime = day + ' ' + hour;
    this.setData({
      pointTime,
      showDateModel: false
    })
  },
  openDatePopup() {
    this.setData({
      showDateModel: true
    })
  },
  initDayList() {
    let date = new Date();
    let dayTime = 24 * 60 * 60 * 1000;
    let t2 = new Date(date.getTime() + dayTime);
    let t3 = new Date(date.getTime() + (dayTime * 2))
    let toDay = this.initDate(date);
    let tommrow = this.initDate(t2);
    let tommrowAfter = this.initDate(t3);

    let dayList = [{
        name: "今天",
        date: toDay
      },
      {
        name: "明天",
        date: tommrow
      },
      {
        name: "后天",
        date: tommrowAfter
      }
    ]
    this.setData({
      dayList,
      dayDate: toDay
    })
    this.initTimeList();
  },
  initDate(date) {
    date = date || '';
    let t = new Date(date);
    let y = t.getFullYear(),
      m = t.getMonth() + 1,
      d = t.getDate();
    return y + '-' + m + '-' + d;
  },
  initTimeList() {
    //当前
    let timeData = this.data.timeData;
    let date = new Date();
    let toDay = date.getDate();
    let chooseT = this.data.dayDate.split('-')[2];
    if (toDay == chooseT) {
      let hours = date.getHours();
      if (hours >= 19) {
        timeData.forEach(v => {
          v.show = false;
        })
      } else {
        this.data.timeList.forEach((v, i) => {
          if (v <= hours && i !== 0) {
            timeData[i].show = false
          }
        })
      }
    } else {
      this.data.timeList.forEach((v, i) => {
        timeData[i].show = true
      })
    }
    this.setData({
      timeData
    })
  },
  closeModel() {
    this.setData({
      showDateModel: false
    })
  }
})