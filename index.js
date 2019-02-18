var url = "http://rtpi.ie/Text/WebDisplay.aspx?stopRef=1634&stopName=Swords+Road";
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		var temp = document.createElement('html');
		temp.innerHTML = xhttp.response;
		var nextBus = temp.getElementsByClassName('webDisplayTable')[0].getElementsByTagName('tr')[1].getElementsByTagName('td')[0].innerText;
		console.log(nextBus);
	}
}
xhttp.open("GET", url);
xhttp.send();

