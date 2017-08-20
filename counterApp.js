var time = 0;

var timer = setInterval(function(){
	time += 2
	console.log(time +' seconde have passed');
	if(time  >= 10)
		clearInterval(timer);
}, 2000);