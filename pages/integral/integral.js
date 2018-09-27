// pages/integral/integral.js
import { User } from '../user/user-module.js';
var user = new User();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      integral:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      user.user((data) => {
          console.log(data);
          this.setData({
              integral: data.integral
          })
      });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */

})