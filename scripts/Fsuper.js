var Serverurl = "http://119.23.20.214:9595";
//var Serverurl = "http://120.78.94.46:8989";
//var Serverurl = "http://192.168.1.100:8989";

function goorders() {
    mui.openWindow({
        url: 'orders.html'
    });
}
//?openid=' + openid
function goindex() {
    mui.openWindow({
        url: 'index.html'
    });
}
function goperson() {
    mui.openWindow({
        url: 'personal.html'
    });
}


//点击按钮调用的方法
function refresh() {
    window.location.reload();//刷新当前页面.
    //或者下方刷新方法
    //parent.location.reload()刷新父亲对象（用于框架）--需在iframe框架内使用
    // opener.location.reload()刷新父窗口对象（用于单开窗口
    //top.location.reload()刷新最顶端对象（用于多开窗口）
}

//解决苹果刷新
function iosrefresh() {
	var isPageHide = false;
	window.addEventListener('pageshow', function() {
		if(isPageHide) {
			window.location.reload();
		}
	});
	window.addEventListener('pagehide', function() {
		isPageHide = true;
	});

}
