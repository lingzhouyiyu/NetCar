;function createDateView(data ,divId,divWeek){
	var dateDiv = document.createElement("div");
	var dataDiv = document.getElementById(divId);
	var dateWeek = document.getElementById(divWeek);
	var sWidth = 0;
	var sHeight = 0;
	if(window.innerWidth){
		sWidth = window.innerWidth;
	} else if((document.body) && (document.body.clientWidth)){
		sWidth = document.body.clientWidth;
	};
	if(window.innerHeight){
		sHeight = window.innerHeight;
	} else if((document.body) && (document.body.clientHeight)){
		sHeight = document.body.clientHeight;
	};
	if(document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth){
		sHeight = document.documentElement.clientHeight;
		sWidth = document.documentElement.clientWidth;
	};
	var btn = document.getElementById(data.buttonId);
	var type = data.type;
	var nDate = new Date();
	var cDate = new Date(dataDiv.innerText.toString());
	var btnText = dataDiv.innerText.split("-");
	var year = parseInt(btnText[0]) || nDate.getFullYear();
	var month  = parseInt(btnText[1]) || nDate.getMonth() + 1;
	var day = parseInt(btnText[2]) || nDate.getDate();
	var tDate = new Date();
	var blockDiv = document.createElement("div");
	blockDiv.style.width = sWidth + "px";
	blockDiv.style.height = sHeight + "px";
	blockDiv.style.opacity = 0.5;
	blockDiv.style.backgroundColor = "#666666";
	blockDiv.style.display = "none";
	blockDiv.style.position = "fixed";
	blockDiv.style.left = "0px";
	blockDiv.style.top = "0px";
	document.body.appendChild(blockDiv);
	dateDiv.style.position = "fixed";
	dateDiv.style.top = sHeight + "px";
	dateDiv.style.width = sWidth + "px";
	dateDiv.style.height = "270px";
	dateDiv.style.transition = "top 0.5s";
	dateDiv.style.zIndex = "10";
	dateDiv.style.left = "0px";
	dateDiv.style.fontSize = "14px";
	dateDiv.style.fontWeight = "300";
	dateDiv.style.backgroundColor = "white";
	var topDiv = document.createElement("div");
	var monthDiv = document.createElement("div");
	var leftDiv = document.createElement("div");
	var rightDiv = document.createElement("div");
	var leftDiv2 = document.createElement("div");
	var rightDiv2 = document.createElement("div");
	var yText = document.createTextNode(year + "年");
	var mText = document.createTextNode(month + "月");
	var nStr = getTimeString(nDate.getFullYear(), nDate.getMonth() + 1, nDate.getDate());
	nDate = new Date(nStr);
	topDiv.appendChild(yText);
	monthDiv.appendChild(mText);
	monthDiv.style.width = topDiv.style.width = sWidth / 2 + "px";
	monthDiv.style.position = topDiv.style.position = "absolute";
	monthDiv.style.height = topDiv.style.height = "32px";
	monthDiv.style.lineHeight = topDiv.style.lineHeight = "32px";
	monthDiv.style.backgroundColor = topDiv.style.backgroundColor = "white";
	monthDiv.style.textAlign = topDiv.style.textAlign = "center";
	monthDiv.style.top = topDiv.style.top = "4px";
	monthDiv.style.left = sWidth / 2 + "px";
	monthDiv.style.fontSize = topDiv.style.fontSize = "16px";
	leftDiv2.style.width = rightDiv2.style.width = rightDiv.style.width = leftDiv.style.width = "32px";
	leftDiv2.style.height = rightDiv2.style.height = rightDiv.style.height = leftDiv.style.height = "32px";
	leftDiv2.style.lineHeight = rightDiv2.style.lineHeight = rightDiv.style.lineHeight = leftDiv.style.lineHeight = "30px";
	leftDiv2.style.position = rightDiv2.style.position = rightDiv.style.position = leftDiv.style.position = "absolute";
	leftDiv2.style.top = rightDiv2.style.top = rightDiv.style.top = leftDiv.style.top = "0px";
	leftDiv2.innerHTML = leftDiv.innerHTML = "<".fontcolor("#42C3B7");
	rightDiv2.style.right = rightDiv.style.right = "10px";
	leftDiv2.style.left = leftDiv.style.left = "10px";
	rightDiv2.innerHTML = rightDiv.innerHTML = ">".fontcolor("#42C3B7");
	topDiv.appendChild(leftDiv);
	topDiv.appendChild(rightDiv);
	dateDiv.appendChild(topDiv);
	monthDiv.appendChild(leftDiv2);
	monthDiv.appendChild(rightDiv2);
	dateDiv.appendChild(monthDiv);
	var uWidth = parseInt((sWidth - 7) / 7);
	var bWidth = parseInt((sWidth - 7 * uWidth) / 2);
	var bottomDiv = document.createElement("div");
	bottomDiv.style.width = 7 * uWidth + "px";
	bottomDiv.style.height = "225px";
	bottomDiv.style.position = "absolute";
	bottomDiv.style.top = "40px";
	bottomDiv.style.left = bWidth + "px";
	for (var i = 0; i < 7; i ++) {
		for (var j = 0; j < 7; j ++) {
			var unitDiv = document.createElement("div");
			unitDiv.style.width = uWidth + "px";
			unitDiv.style.height = "32px";
			unitDiv.style.lineHeight = "32px";
			unitDiv.style.textAlign = "center";
			unitDiv.style.backgroundColor = "white";
			unitDiv.style.position = "absolute";
			unitDiv.style.left = j * uWidth + "px";
			if(i == 0){
				unitDiv.style.top = i * 32 + "px";
			} else {
				unitDiv.style.top = i * 32 + 1 + "px";
			};
			if(j == 0 || j == 6){
				unitDiv.style.color = "red";
			};
			if(i == 0){
				unitDiv.innerText = ["日", "一", "二", "三", "四", "五", "六"][j];
			};
			bottomDiv.appendChild(unitDiv);
		};
	};
	var lineDiv = document.createElement("div");
	lineDiv.style.width = bottomDiv.style.width;
	lineDiv.style.height = "1px";
	lineDiv.style.backgroundColor = "#42C3B7";
	lineDiv.style.position = "absolute";
	lineDiv.style.left = "0px";
	lineDiv.style.top = "32px";
	bottomDiv.appendChild(lineDiv);
	dateDiv.appendChild(bottomDiv);
	document.body.appendChild(dateDiv);
	var daysOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	function refresh(){
		var days = daysOfMonth[month - 1];
		if(month == 2){
			if((year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0))){
				days ++;
			};
		};
		var bStr = getTimeString(year, month, 1);
		var beginDay = new Date(bStr); 
		var bIndex = beginDay.getDay() + 6;
		for(var t = 7; t < 44; t ++){
			bottomDiv.getElementsByTagName("div")[t].innerText = "";
			bottomDiv.getElementsByTagName("div")[t].onclick = null;
			bottomDiv.getElementsByTagName("div")[t].style.backgroundColor = "white";
		};
		for(var d = 1; d <= days; d ++){
			bottomDiv.getElementsByTagName("div")[d + bIndex].innerText = d;
			tDate = new Date(getTimeString(year, month, d));
			if(tDate - nDate >= 0 && tDate - nDate <= 5184000000){
				bottomDiv.getElementsByTagName("div")[d + bIndex].onclick = function(){
					var n = parseInt(this.innerText);
					var nowStr = getTimeString(year, month, n);
					day = n;
					dataDiv.innerText = nowStr;
					dateDiv.style.top = sHeight + "px";
					blockDiv.style.display = "none";
					cDate = new Date(getTimeString(year, month, day));
					if (dateWeek) {
					    var str = "星期" + "日一二三四五六".charAt(cDate.getDay());
					    dateWeek.innerText = str;
					}
					if (type == "1") {
					    //刷新页面
					    location.href = location.href.replace(/\d\d\d\d-\d\d-\d\d/, nowStr);
					}
				};
				if(((d + bIndex) % 7 == 0) || ((d + bIndex) % 7 ==6)){
					bottomDiv.getElementsByTagName("div")[d + bIndex].style.color = "red";
				} else {
					bottomDiv.getElementsByTagName("div")[d + bIndex].style.color = "black";
				};
				if(tDate - cDate == 0){
					bottomDiv.getElementsByTagName("div")[d + bIndex].style.backgroundColor = "#42C3B7";
				};
			} else {
				bottomDiv.getElementsByTagName("div")[d + bIndex].style.color = "#999999";
			};
		};
		yText.textContent = year + " 年";
		mText.textContent = month + " 月";
	};
	function getTimeString(y, m, d){
		var timeString = y;
		if(m < 10){
			timeString += "-0" + m;
		} else {
			timeString += "-" + m;
		};
		if(d < 10){
			timeString += "-0" + d;
		} else {
			timeString += "-" + d;
		};
		return timeString;
	};
	leftDiv.onclick = function(){
		year --;
		refresh();
	};
	rightDiv.onclick = function(){
		year ++;
		refresh();
	};
	leftDiv2.onclick = function(){
		month --;
		if(month < 1){
			month = 12;
			year --;
		};
		refresh();
	};
	rightDiv2.onclick = function(){
		month ++;
		if(month > 12){
			month = 1;
			year ++;
		};
		refresh();
	};
	btn.onclick = function(){
		refresh();
		dateDiv.style.top = sHeight - 270 + "px";
		blockDiv.style.display = "block";
	};
	blockDiv.onclick = function(){
		dateDiv.style.top = sHeight + "px";
		blockDiv.style.display = "none";
	};
};