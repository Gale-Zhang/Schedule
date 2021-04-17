//从左到右的数据为：周目、第几节课、科目ID、科目名字、其他信息。
//如在周五第三节课有一节课为篮球课，编号是cxk，在舞蹈房上课，则是l("5","3","cxk","篮球课","舞蹈房"");
function randomColor() {
	var colors = ["darkgreen","cadetblue","darkmagenta","palevioletred","saddlebrown", "#cfa115"];
	return colors[Math.floor(Math.random()*6)];
}

function l(id, intext){
    console.log(id);
	var elm=document.getElementById(id);
	elm.firstElementChild.innerHTML = intext;
	if(intext.length != 0) {
	    elm.style.background = randomColor();
        elm.style.color="#fff";
        elm.style.display="block"
	} else {
	    elm.style.background = "#fff";
        elm.style.color="#000";
	}
};

function calId(str) {
	date = new Date(parseInt(str.substring(0,4)), parseInt(str.substring(4,6))-1, parseInt(str.substring(6,8)));
	day = date.getDay();
	return "info"+day+str.slice(-1);
}


function write_detail() {
    st = document.getElementById(1).getElementsByClassName("dayleft")[0].innerHTML;
    st = st.slice(0, st.length - 6);
    st += "/1";
    end = document.getElementById(0).getElementsByClassName("dayleft")[0].innerHTML;
    end = end.slice(0, end.length - 6);
    end += "/3";

    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', '/schedule/record/get/week?user='+user+'&start_time='+st+'&end_time='+end, true);
    httpRequest.send();
    httpRequest.onreadystatechange = function() {
	    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var jsonStr = httpRequest.responseText;//获取到json字符串，还需解析
            var jsonObj = JSON.parse(jsonStr);
            for(var i = 0; i < jsonObj.length; i++) {
            	datetime = jsonObj[i].datetime;
            	detail = jsonObj[i].detail;
            	l(calId(datetime), detail);
            }
        }
    }
}

var date = "";
var cur = "";
var user = "SN.Feng"

function modify(obj) {
	cur = obj;
	id = obj.id;
	day = id.charAt(id.length - 2);
	time = id.charAt(id.length - 1);
	day = document.getElementById(day).firstElementChild.innerHTML;
	date = day.slice(0, day.length - 6) + "/" + time;

	var input_box = document.getElementById('input_box');

	content = obj.firstElementChild.innerHTML;
	if(content.length == 0) {
        var httpRequest = new XMLHttpRequest();
        httpRequest.open('GET', '/schedule/record/post?user='+user+'&datetime='+date+'&detail=', true);
        httpRequest.send();
        httpRequest.onreadystatechange = function() {
	        console.log("insert succeed!")
        }
    }

	input_box.getElementsByClassName("input")[0].value = content;

	input_box.style.display = 'flex';
}

function submit() {
	content = document.getElementById('input_box').getElementsByClassName("input")[0].value;

    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', '/schedule/record/update?user='+user+'&datetime='+date+'&detail='+content, true);
    httpRequest.send();
    httpRequest.onreadystatechange = function() {
	    console.log("update succeed!")
    }

	l(cur.id, content);
	document.getElementById('input_box').style.display = 'none';
}