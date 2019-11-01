//	data = {
//		last: id,
//		next: id,
//		time: id,
//	};
;function changeDate(data){
	var last = document.getElementById(data.last);
	var next = document.getElementById(data.next);
	var time = document.getElementById(data.time);
	var nStr = "";
	var tStr = "";
	var nDate = new Date();
	var nYear = nDate.getFullYear();
	var nMonth = nDate.getMonth() + 1;
	var nDay = nDate.getDate();
	var tDate = new Date();
	var tYear = tDate.getFullYear();
	var tMonth = tDate.getMonth() + 1;
	var tDay = tDate.getDate();
	alert(nDay);
	if(nMonth < 10){
		nStr = nYear + "-0" + nMonth;
	} else {
		nStr = nYear + "-" + nMonth;
	};
	if(nDay < 10){
		nStr = nStr + "-0" + nDay;
	}else{
		nStr = nStr + "-" + nDay;
	};
	nDate = new Date(nStr);
	if(time.innerText){
		tStr = time.innerText.substring(0, 10);
		tDate = new Date(tStr);
		tYear = tDate.getFullYear();
		tMonth = tDate.getMonth() + 1;
		tDay = tDate.getDate();
	} else {
		time.innerText = nStr + " 今天";
	};
	last.onclick = function(){
		if(tDate - nDate > 0){
			tDay --;
			if(tDay < 1){
				tMonth --;
				if(tMonth < 1){
					tMonth = 12;
					tYear --;
				};
				tDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][tMonth - 1];
				if(tMonth == 2){
					if((tYear % 400 == 0) || ((tYear % 4 == 0) && (tYear % 100 != 0))){
						tDay ++;
					};
				};
			};
			if(tMonth < 10){
				tStr = tYear + "-0" + tMonth;
			} else {
				tStr = tYear + "-" + tMonth;
			};
			if(tDay < 10){
				tStr = tStr + "-0" + tDay;
			}else{
				tStr = tStr + "-" + tDay;
			};
			tDate = new Date(tStr);
		    	//if(tDate - nDate == 86400000){
		    	//	time.innerText = tStr + " 明天";
		    	//} else if(tDate - nDate == 0){
		    	//	time.innerText = tStr + " 今天";
		    	//} else if(tDate - nDate == 172800000){
		    	//	time.innerText = tStr + " 后天";
		    	//} else {
		    	//	var tt = [" 周日", " 周一", " 周二", " 周三", " 周四", " 周五", " 周六"][tDate.getDay()];
		    	//	time.innerText = tStr + tt;
		    	//};
		    	location.href=location.href.replace(/\d\d\d\d-\d\d-\d\d/, tStr);
		};
	};
	next.onclick = function(){
		if(tDate - nDate < 5184000000){
			tDay ++;
			var md = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][tMonth - 1];
			if(tMonth == 2){
				if((tYear % 400 == 0) || ((tYear % 4 == 0) && (tYear % 100 != 0))){
					md ++;
				};
			};
			if(tDay > md){
				tDay = 1;
				tMonth ++;
				if(tMonth > 12){
					tMonth = 1;
					tYear ++;
				};
			};
			if(tMonth < 10){
				tStr = tYear + "-0" + tMonth;
			} else {
				tStr = tYear + "-" + tMonth;
			};
			if(tDay < 10){
				tStr = tStr + "-0" + tDay;
			}else{
				tStr = tStr + "-" + tDay;
			};
			tDate = new Date(tStr);
		    	//if(tDate - nDate == 86400000){
		    	//	time.innerText = tStr + " 明天";
		    	//} else if(tDate - nDate == 172800000){
		    	//	time.innerText = tStr + " 后天";
		    	//} else {
		    	//	var tt = [" 周日", " 周一", " 周二", " 周三", " 周四", " 周五", " 周六"][tDate.getDay()];
		    	//	time.innerText = tStr + tt;
		    	//};
		    	location.href=location.href.replace(/\d\d\d\d-\d\d-\d\d/, tStr);
		};
	};
};
