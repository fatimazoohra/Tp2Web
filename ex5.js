var start = document.getElementById('btnStart');
var stop = document.getElementById('btnStop');
var reset = document.getElementById('btnReset');
var chrono = document.querySelectorAll('span');
	
	var ms = 0;
	var s = 0;
	var min = 0;
	var h = 0;
	var t;
	
	function Run(){
		ms+=1;
		// setTimeout(Run,1);
		chrono[0].innerHTML = h+' h';
		chrono[1].innerHTML = min+' min';
		chrono[2].innerHTML = s+' s';
		chrono[3].innerHTML = ms+' ms';
		if(ms>=1000){
			ms = 0;
			s+=1;
		}
		if(s>=60){
			min+=1;
			s=0;
		}
		if(min>=60){
			h+=1;
			min=0;
		}
	}

	function Start(){
		ms = 0;
		s = 0;
		min = 0;
		h = 0;
		t = setInterval(Run, 1);
		start.disabled = true;
	}

	function Stop(){
		t = clearInterval(t);
		start.disabled = false;
	}

	function Reset(){
		t = clearInterval(t);
		start.disabled = false;
		chrono[0].innerHTML = 0+' h';
		chrono[1].innerHTML = 0+' min';
		chrono[2].innerHTML = 0+' s';
		chrono[3].innerHTML = 0+' ms';
	}

