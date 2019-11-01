//创建地图
$(function () {
	var locationLat = 27.33;
	var locationLng = 103.72;
	var geo = new qq.maps.Geocoder();
	var lng = 0;
	var lat = 0;

	var point = new qq.maps.LatLng(locationLat, locationLng);
	var qmap = new qq.maps.Map(
		document.getElementById("container"), {
			center: point,
			zoom: 14,
			scrollwheel: false,
			scaleControl: false,
			zoomControl: false,
			panControl: false,
			mapTypeControl: false,
		}
	);


	//地图改变
	qq.maps.event.addListener(qmap, "dragend", function() {
		setTimeout(function() {
			getLocation(qmap.getCenter());
		}, 100);
	});

	function getLocation(p) {
		geo.getAddress(p);
		geo.setComplete(function(result) {
			if(result.detail.nearPois[0]) {
				$("#cfd").text(result.detail.nearPois[0].name);
				//$("#mdd").text(result.detail.nearPois[0].address);
				qmap.panTo(result.detail.nearPois[0].latLng);
				lng = result.detail.nearPois[0].latLng.lng;
				lat = result.detail.nearPois[0].latLng.lat;
			} else {
				$("#cfd").text(result.address);
				//$("#mdd").text(result.address);
				lng = p.lng;
				lat = p.lat;
			};
		});

	};
	var geo2 = new qq.maps.Geocoder();
	var ctchange = geo2.setComplete(function(result) {
		locationLat = result.detail.location.lat;
		locationLng = result.detail.location.lng;
		qmap.panTo(new qq.maps.LatLng(locationLat, locationLng));
		getLocation(new qq.maps.LatLng(locationLat, locationLng));
	});


	

	//$(".city_item").on("click", function() {
		
	//});

	//地图搜索
	var inputlabel = document.getElementById("searchBar");
	var startlist = document.getElementById("startlist").getElementsByTagName("ol")[0];
	inputlabel.onclick = function() {
		$("#map").hide();
		//$(".marker").hide();
		$("#startlist").show();
		$(".city_list").addClass("dhide");
	};

	var localSearch = new qq.maps.SearchService({
		complete: function(results) {
			$(results.detail.pois).each(function(index, item) {
				var li = document.createElement("li");
				li.innerText = item.name;
				li.name = item.name;
				li.address = item.address;
				var span = document.createElement("div");
				if(item.address) {
					span.innerText = item.address;
				} else {
					span.innerText = item.name;
				};
				li.appendChild(span);
				li.lng = item.latLng.lng;
				li.lat = item.latLng.lat;

				startlist.appendChild(li);
				li.onclick = function() {
					var cfd = this.name;
					var beginAddress = this.address;
					if(cfd == "") {
						cfd = city;

					}
					viewApi.back();
					$("#cfd").text(cfd);
					geo2.getLocation($("#cfd").text());
					ctchange;
					localStorage.setItem("beginAddress", beginAddress);
				};
			});
		}
	});
	var last = "";
	inputlabel.oninput = function() {
		var addr = inputlabel.value;
		var city = $(".cfcstxt").text();
		addr = addr.replace(/[a-z|\']/g, "");
		if(addr == "" || addr == last) {
			return;
		};
		startlist.innerHTML = "";
		last = addr;
		localSearch.setPageIndex(0);
		localSearch.setPageCapacity(10);
		localSearch.search(city + addr);
	};
	
	
	//目的地搜索
	//目的选择
	$(".mdxz").on("click", function() {
		$(".city_list02").removeClass("dhide");
		$("#startlist02").hide();
		$("#searchBar02").val("");
	});

	
	var inputlabel02 = document.getElementById("searchBar02");
	var startlist02 = document.getElementById("startlist02").getElementsByTagName("ol")[0];
	inputlabel02.onclick = function() {
		$("#map").hide();
		//$(".marker").hide();
		$("#startlist02").show();
		$(".city_list02").addClass("dhide");
	};

	var localSearch02 = new qq.maps.SearchService({
		complete: function(results) {
			$(results.detail.pois).each(function(index, item) {
				var li = document.createElement("li");
				li.innerText = item.name;
				li.name = item.name;
				li.address = item.address;
				var span = document.createElement("div");
				if(item.address) {
					span.innerText = item.address;
				} else {
					span.innerText = item.name;
				};
				li.appendChild(span);
				li.lng = item.latLng.lng;
				li.lat = item.latLng.lat;

				startlist02.appendChild(li);
				li.onclick = function() {
					var mdd = this.name;
					var endAddress = this.address;
					if(mdd == "") {
						mdd = city;

					}
					viewApi.back();
					$("#mdd").text(mdd);
					localStorage.setItem("endAddress", endAddress);

				};
			});
		}
	});
	var last02 = "";
	inputlabel02.oninput = function() {
		var addr = inputlabel02.value;
		var city = $(".mdcstxt").text();
		addr = addr.replace(/[a-z|\']/g, "");
		if(addr == "" || addr == last02) {
			return;
		};
		startlist02.innerHTML = "";
		last02 = addr;
		localSearch02.setPageIndex(0);
		localSearch02.setPageCapacity(10);
		localSearch02.search(city + addr);
	};
	

});