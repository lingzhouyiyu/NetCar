$(function () {
    	 var getDate = new Date();
        var nowDate = new Date();
        var today = nowDate.getDate();
        var getYear1 = nowDate.getFullYear();
        var getMonth1 = nowDate.getMonth() + 1;
        var getDay1 = new Date(getYear1 + "/" + getMonth1 + "/1").getDay();
        var getDaysOfMonth1 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][getMonth1 - 1];
        if (getMonth1 == 2) {
            getDaysOfMonth1 = getDaysOfFeb(getYear1);
        };
        for (var j = 0; j < 37; j++) {
            $(".days:eq(0) li").eq(j).text(" ");
            $(".days:eq(0) li").eq(j).addClass("ash");
            $(".days:eq(0) li").eq(j).removeClass("chenBJ");
            $(".days:eq(1) li").eq(j).text(" ");
            $(".days:eq(1) li").eq(j).addClass("ash");
            $(".days:eq(1) li").eq(j).removeClass("chenBJ");
        };
        $(".month").eq(0).text(getYear1 + "年" + getMonth1 + "月");
        for (var i = getDay1; i < getDay1 + getDaysOfMonth1; i++) {
            $(".days:eq(0) li").eq(i).text("" + (i - getDay1 + 1) + "");
            if ((i - getDay1 - today) >= -1 && (i - getDay1 - today) <= 9) {
                $(".days:eq(0) li").eq(i).removeClass("ash");
                $(".days:eq(0) li").eq(i).on("click", function () {
                    var day = parseInt(this.innerText);
                    if (!day) {
                        day = parseInt($(this).attr("day"));
                        
                    };
                    var selectDate = getYear1 + (getMonth1 > 9 ? "-" : "-0") + getMonth1 + (day > 9 ? "-" : "-0") + day;
                    $(".searchtime").text(selectDate);
                    var weekArray = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
                    var week = weekArray[new Date(selectDate).getDay()];// 这个就是你想要的结果吧
                    $(".dbweek").text(week);
                    $(".time_box").addClass("dhide");
                    $('.car_list').empty();
                    $(".warming").addClass("dhide");
                    sendData();
                });
            };
            if ((i - getDay1 + 1) == today) {
                $(".days:eq(0) li").eq(i).text("今天");
                $(".days:eq(0) li").eq(i).attr("day", "" + (i - getDay1 + 1) + "");
            };
            if (((i - getDay1 + 1) == getDate.getDate()) && (getMonth1 == getDate.getMonth() + 1)) {
                $(".days:eq(0) li").eq(i).addClass("chenBJ");
            };
        };
        var dis = getDaysOfMonth1 - today;
        if (dis < 10) {
            var getYear2 = getYear1;
            var getMonth2 = getMonth1 + 1;
            if (getMonth2 > 12) {
                getMonth2 = 1;
                getYear2++;
            };
            var getDay2 = new Date(getYear2 + "/" + getMonth2 + "/1").getDay();
            var getDaysOfMonth2 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][getMonth2 - 1];
            if (getMonth2 == 2) {
                getDaysOfMonth2 = getDaysOfFeb(getYear2);
            };
            $(".month").eq(1).text(getYear2 + "年" + getMonth2 + "月");
            for (var k = getDay2; k < getDay2 + getDaysOfMonth2; k++) {
                $(".days:eq(1) li").eq(k).text("" + (k - getDay2 + 1) + "");
                if ((k - getDay2 + dis) < 10) {
                    $(".days:eq(1) li").eq(k).removeClass("ash");
                    $(".days:eq(1) li").eq(k).on("click", function () {
                        var selectDate = getYear2 + (getMonth2 > 9 ? "-" : "-0") + getMonth2 + (parseInt(this.innerText) > 9 ? "-" : "-0") + parseInt(this.innerText);
                        $(".searchtime").text(selectDate);
                        var weekArray = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
                        var week = weekArray[new Date(selectDate).getDay()];
                        $(".dbweek").text(week);
                        $(".time_box").addClass("dhide");
                        $('.car_list').empty();
                        $(".warming").addClass("dhide");
                        sendData();
                    });
                };
                if (((k - getDay2 + 1) == getDate.getDate()) && (getMonth2 == getDate.getMonth() + 1)) {
                    $(".days:eq(1) li").eq(k).addClass("chenBJ");
                };
            };
            $(".month").eq(1).show();
            $(".days").eq(1).show();
        } else {
            $(".month").eq(1).hide();
            $(".days").eq(1).hide();
        };
        function getUrlParam(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]); return null;
        };
        function getDaysOfFeb(year) {
            if ((year % 400 == 0) || ((year % 100 != 0) && (year % 4 == 0))) {
                return 29;
            } else {
                return 28;
            };
        };
    });