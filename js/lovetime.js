function lovetime() {
    window.setTimeout("lovetime()", 1000);
    var seconds = 1000
    // 获取当前时间  
var now = new Date();  
var currentYear = now.getFullYear();  
var currentMonth = now.getMonth(); // 月份从0开始  
var currentDate = now.getDate();  
var currentHour = now.getHours();  
var currentMinute = now.getMinutes();  
var currentSecond = now.getSeconds();  
  
// 设置特定时间：2024年10月1日20时45分0秒  
var specificYear = 2024;  
var specificMonth = 9; // 月份从0开始计算，所以6月是5  
var specificDate = 1;  
var specificHour = 20;  
var specificMinute = 45;  
var specificSecond = 0;  
  
// 计算时间差（毫秒）  
var t1 = Date.UTC(specificYear, specificMonth, specificDate, specificHour, specificMinute, specificSecond);  
var t2 = Date.UTC(currentYear, currentMonth, currentDate, currentHour, currentMinute, currentSecond);  
var diff = t2 - t1;  
  
// 定义时间单位（毫秒）  
var years = 1000 * 60 * 60 * 24 * 365.25; // 考虑闰年，使用365.25天  
var days = 1000 * 60 * 60 * 24;  
var hours = 1000 * 60 * 60;  
var minutes = 1000 * 60;  
var seconds = 1000;  
  
// 计算差异的年、天、小时、分钟和秒  
var diffYears = Math.floor(diff / years);  
var diffDays = Math.floor((diff % years) / days);  
var diffHours = Math.floor((diff % days) / hours);  
var diffMinutes = Math.floor((diff % hours) / minutes);  
var diffSeconds = Math.floor((diff % minutes) / seconds);  
  
// 显示结果  
document.getElementById("lovetime").innerHTML = "我们已经在一起 " + diffYears + "年" + diffDays + "天" + diffHours + "小时" + diffMinutes + "分钟" + diffSeconds + "秒啦!";
}
lovetime()