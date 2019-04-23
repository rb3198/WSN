window.onload = function() {
	makeActive('pl');
	// setInterval(getTemp, 2000);
}

function makeActive(league) {
	var k = 0;
	var i = document.querySelectorAll("header nav ul li")[0]; 
	var flag = 0;
	var main = document.getElementById('main');
	while(flag != 1) {
		i.classList.remove("active_ch_header");
		k++;
		if(document.querySelectorAll("header nav ul li")[k] != null)
			i = document.querySelectorAll("header nav ul li")[k];
		else
			break;
	}
	
	if(league == "pl") {
		var s = setInterval(getTemp, 2000);
		main.style.flexFlow = 'row';
		main.style.alignItems = 'flex-start';
		var plhead = document.querySelectorAll("header nav ul li")[0];
		plhead.classList.toggle("active_ch_header");
		// var xmlhttp = new XMLHttpRequest();
		// xmlhttp.onreadystatechange = function() {
		// 	if(this.status == 200 && this.readyState == 4) {
		// 		main.innerHTML = this.responseText;
		// 	}	
		// }
		// xmlhttp.open('GET', 'gauge.php', true);
		// xmlhttp.send();
		main.innerHTML = '<div class="chart"><h2 class="chart_head">Tungsten Bulb</h2><div id="chart1"><div class="gauge-a"></div><div class="gauge-b"></div><div class="gauge-c"></div><div class="gauge-data"><h1 id="percent">0</h1></div></div></div>';
		main.innerHTML += '<div class="chart"><h2 class="chart_head">CFL Bulb</h2><div id="chart2"><div class="gauge-a"></div><div class="gauge-b"></div><div class="gauge-c"></div><div class="gauge-data"><h1 id="percent1">0</h1></div></div></div>';
	}
	else if(league == ("ll")) {
		clearInterval(s);
		var plhead = document.querySelectorAll("header nav ul li")[1];
		plhead.classList.toggle("active_ch_header");
		main.style.flexFlow = 'column';
		main.style.alignItems = 'center';
		main.style.justifyContent = 'flex-start';
		main.innerHTML = '<iframe width="30%" height="600px" src="https://thingspeak.com/channels/764877/charts/2?bgcolor=%23000&color=%23e2bf0f&dynamic=true&results=60&type=line"></iframe>';
		main.innerHTML+= '<iframe width="30%" height="600px" src="https://thingspeak.com/channels/764877/charts/1?bgcolor=%23000&color=%23e2bf0f&dynamic=true&results=60&type=line"></iframe>';
		main.innerHTML+= '<iframe width="30%" height="600px" src="https://thingspeak.com/channels/764878/charts/2?bgcolor=%23000&color=%23e2bf0f&dynamic=true&results=60&title=CFL+Status&type=line"></iframe>';
		main.innerHTML+= '<iframe width="30%" height="600px" src="https://thingspeak.com/channels/764878/charts/1?bgcolor=%23000&color=%23e2bf0f&dynamic=true&results=60&title=Temperature+CFL&type=line"></iframe>';
		


	}
	else if(league == ("bn")) {
		var plhead = document.querySelectorAll("header nav ul li")[2];
		plhead.classList.toggle("active_ch_header");
	}
}

function getTemp()  {
	//Tungsten temp
	var xmlhttp1 = new XMLHttpRequest();
	xmlhttp1.onreadystatechange = function() {
		if(this.status == 200 && this.readyState == 4) {
			var par = JSON.parse(this.responseText);
			document.getElementById('temp_tung').innerText = par.feeds[0].field1;
			document.getElementById('percent').innerText = par.feeds[0].field1;
			document.getElementsByClassName('gauge-c')[0].style.transform = 'rotate(.'+par.feeds[0].field1/2+'turn)';
		}
	}
	xmlhttp1.open('GET', 'https://api.thingspeak.com/channels/764877/fields/1.json?api_key=PRXRMSC3TAVQY1QL&results=2', true);
	xmlhttp1.send();
	//CFL temp
	var xmlhttp1 = new XMLHttpRequest();
	xmlhttp1.onreadystatechange = function() {
		if(this.status == 200 && this.readyState == 4) {
			var par = JSON.parse(this.responseText);
			console.log(par.feeds);
			//Activate the following when CFL channel is active
			// document.getElementById('temp_cfl').innerText = par.feeds[0].field1;
			// document.getElementById('percent1').innerText = par.feeds[0].field1;
			// document.getElementsByClassName('gauge-c')[1].style.transform = 'rotate(.'+par.feeds[0].field1/2+'turn)';
		}
	}
	xmlhttp1.open('GET', 'https://api.thingspeak.com/channels/764878/feeds.json?api_key=R735EZH3QPI1XLII&results=2', true);
	xmlhttp1.send();
	
}



