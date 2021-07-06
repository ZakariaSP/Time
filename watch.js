function updateDate(){
    var date = new Date();
    var showTime = document.getElementById("showTime");
    showTime.innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    var showDate = document.getElementById("showDate");
    showDate.innerHTML =date.getDate()+"-"+parseInt(date.getMonth()+1) + "-" + date. getFullYear();  
}

setInterval(updateDate,1000);
onload = updateDate();
document.getElementById("color").addEventListener("change",()=>{
    saveColor();
})
function saveColor(){
var saveColor = document.getElementById("showColor").value;
localStorage.setItem("Color",saveColor);
document.getElementById("time").style.background = localStorage.getItem("Color");
document.getElementById("body").style.background =localStorage.getItem("Color");
}

function showColor(){
document.getElementById("showColor").value = localStorage.getItem("Color");
document.getElementById("time").style.background =localStorage.getItem("Color");
document.getElementById("body").style.background = localStorage.getItem("Color");
}

setInterval(showColor,1000);