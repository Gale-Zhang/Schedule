function see_today(){
    see_all();
    for (var i=0;i<7;i++) {
	  document.getElementById(i).style.display="none";
	  };
	document.getElementById("see_all").className="tab";
	document.getElementById("see_today").className="tab active";
	document.getElementById("up").style.display="none";
	document.getElementById("down").style.display="none";
	var day=(new Date()).getDay();
    document.getElementById(day).style.display="flex";
};

function date2String(date) {
    return date.getFullYear() + "/" + (date.getMonth()+1) + "/" + date.getDate();
}

function see_all(){

	var date = new Date();
	var curday = date.getDay();
    for (var i = 0; i < 7; i++) {
      elm = document.getElementById(i);
	  elm.style.display="flex";
	  dayleft = elm.firstElementChild;
	  var str = dayleft.innerHTML;
	  dayleft.innerHTML = date2String(new Date(new Date().setDate(date.getDate()+(i == 0 ? 7 : i)-curday))) + "<br>" + str.slice(-2);
	};
    changeDate(0);
	document.getElementById("see_all").className="tab active";
	document.getElementById("see_today").className="tab";
	document.getElementById("up").style.display="flex";
	document.getElementById("down").style.display="flex";
};

function see_menu(){
	document.getElementById('menu').style.display='block';
	var x=document.getElementsByClassName("head");
		for (var i=0;i<x.length;i++){
			x[i].style.background="#fff";x[i].style.position="static";
		};
};

function off_menu(){
	document.getElementById('menu').style.display='none';
	var x=document.getElementsByClassName("head");
		for (var i=0;i<x.length;i++){
			x[i].style.background="#fff";x[i].style.position="sticky";
		};
};

function changeDate(cnt) {
    for (var i = 0; i < 7; i++) {
      elm = document.getElementById(i);
	  dayleft = elm.firstElementChild;
	  var str = dayleft.innerHTML.split("<br>");
	  var date = str[0].split("/");
	  date = new Date(parseInt(date[0]), parseInt(date[1])-1, parseInt(date[2]));
      date.setDate(date.getDate() + cnt);
      dayleft.innerHTML = date2String(date) + "<br>" + str[1];
      for(var j = 1; j < 4; j++) {
        info = document.getElementById("info"+String(i)+String(j));
        info.firstElementChild.innerHTML = "";
        info.style.color = "#000";
        info.style.background = "#fff";
      }
	};
	write_detail();
}
