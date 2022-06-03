var start = document.getElementsByClassName('startButton')[0];
var stops = document.getElementsByClassName('stopButton')[0];
var times = document.getElementsByClassName('display')[0];
var btnFlag = null; //どちらのボタンを押しているかを判断 
var thisMessage //履歴を追加する変数
times.style.color = "#32cd32";
times.style.backgroundColor = "#333333"


/* スタートとストップクリック時の履歴 */
function addMessage(pushMessage){
    var now = new Date();
    var historyHour =now.getHours();
    var historyMinutes =now.getMinutes();
    var historySecond =now.getSeconds();
    thisMessage = historyHour + "時" + historyMinutes + "分" + historySecond +"秒  " + pushMessage
}




var logs = document.getElementsByClassName("log", [0])
var second = 0; //タイマーの変数

var message ;//

start.addEventListener("click", function () {

    if (btnFlag === null) {
        btnFlag = setInterval(function () {
            second++;
            times.innerText = second;
        }, 1000)
        message = "開始"
        addMessage(message);
        var messageEle =  document.createElement("div");
        messageEle.innerHTML = thisMessage;
        var logEle = document.querySelector(".log");
        logEle.appendChild(messageEle); 
        messageEle.className = "message" ;
    } 
});


stops.addEventListener("click", function () {
        if (btnFlag !== null){
            clearInterval(btnFlag);
            btnFlag = null;
            message = "終了"
            addMessage(message);
            var messageEle =  document.createElement("div");
            var logEle = document.querySelector(".log");
            logEle.appendChild(messageEle); 
            messageEle.innerHTML = thisMessage;
            messageEle.className = "message" ;
        }
});


