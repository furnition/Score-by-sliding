// 获取节点
var controller = document.getElementById("grade-controller");
//获取整个评分滑杆的width
var gradeBox = document.getElementById("grade-box");
var handIcon = document.getElementById("hand-icon");
var gradeText = document.getElementById("grade-text");

//获取评分按钮文字标签
var btnText = document.getElementById("grade-btn-text");
//每个分数间隔的宽度
var scoreItemWidth = parseInt((gradeBox.offsetWidth - 80) / 10);

// 绑定touchstart事件
controller.addEventListener("touchstart", function (e) {
    var touches = e.touches[0];
    //触摸开始位置
    startPoint = touches.clientX;
    //初始宽度
    starWidth = controller.offsetWidth;
    //阻止页面的滑动默认事件
    document.addEventListener("touchmove", defaultEvent, false);
}, false);

controller.addEventListener("touchmove", function (e) {
    var touches = e.touches[0];
    var oWidth = touches.clientX - startPoint + starWidth;
    //设置按钮宽度
    controller.style.width = oWidth + "px";
    //限制按钮宽度
    if (controller.offsetWidth < 80) {
        controller.style.width = "80px";
    } else if (controller.offsetWidth > gradeBox.offsetWidth) {
        controller.style.width = "100%";
    }
    handIcon.style.display = "block";
    gradeText.style.display = "block";
    //更改按钮文字显示
    setBtnText();
}, false);

controller.addEventListener("touchend", function () {
    document.removeEventListener("touchmove", defaultEvent, false);
}, false);

function defaultEvent(e) {
    e.preventDefault();
}

function setBtnText() {
    var n = Math.round((controller.offsetWidth - 80) / scoreItemWidth-0.1);
    console.log(n);
    if (n === 0) {
        btnText.text = n + "分";
        handIcon.setAttribute("class", "icon-tips ");
        gradeText.setAttribute("class", "grade-text");
    }
    else if ( n < 5) {
        btnText.text = n + "分";
        handIcon.setAttribute("class", "icon-tips ");
        gradeText.setAttribute("class", "grade-text");
    }
    else if (n>=5) {
        btnText.text = n + "分";
        handIcon.setAttribute("class", "icon-tips positive");
        gradeText.setAttribute("class", "grade-text text-right");

    }

}

