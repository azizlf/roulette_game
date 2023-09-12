function rouletteEventsMain(){
	var stats = [

		{
			num_one:"1",
			num_s_one:"4",
			num_two:"13",
			num__s_two:"2",
			num_three:"25",
			num__s_three:"2"
		},
		{
			num_one:"2",
			num_s_one:"4",
			num_two:"14",
			num__s_two:"2",
			num_three:"26",
			num__s_three:"2"
		},
		{
			num_one:"3",
			num_s_one:"7",
			num_two:"15",
			num__s_two:"4",
			num_three:"27",
			num__s_three:"3"
		},
		{
			num_one:"4",
			num_s_one:"3",
			num_two:"16",
			num__s_two:"2",
			num_three:"28",
			num__s_three:"2"
		},
		{
			num_one:"5",
			num_s_one:"4",
			num_two:"17",
			num__s_two:"4",
			num_three:"29",
			num__s_three:"2"
		},
		{
			num_one:"6",
			num_s_one:"3",
			num_two:"18",
			num__s_two:"3",
			num_three:"30",
			num__s_three:"4"
		},
		{
			num_one:"7",
			num_s_one:"4",
			num_two:"19",
			num__s_two:"5",
			num_three:"31",
			num__s_three:"5"
		},
		{
			num_one:"8",
			num_s_one:"4",
			num_two:"20",
			num__s_two:"7",
			num_three:"32",
			num__s_three:"0"
		},
		{
			num_one:"9",
			num_s_one:"6",
			num_two:"21",
			num__s_two:"5",
			num_three:"33",
			num__s_three:"4"
		},
		{
			num_one:"10",
			num_s_one:"1",
			num_two:"22",
			num__s_two:"1",
			num_three:"34",
			num__s_three:"1"
		},
		{
			num_one:"11",
			num_s_one:"5",
			num_two:"23",
			num__s_two:"3",
			num_three:"35",
			num__s_three:"4"
		},
		{
			num_one:"12",
			num_s_one:"1",
			num_two:"24",
			num__s_two:"1",
			num_three:"36",
			num__s_three:"1"
		}

	]


	var numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]
	var angles = [

		{
			ang:0,
			value:0,
			color:"#50a435"
		},
		{
			ang:11,
			value:32,
			color:"#bb1e1f"
		},
		{
			ang:20,
			value:15,
			color:"black"
		}

	];

	var currentColor = "red"

	function createNumbers(){

		stats.map((ln)=>{

			if(currentColor === "black"){

				var html = `<div class="ligne">
								<div class="clr black">${ln.num_one}</div>
								<div class="simple">${ln.num_s_one}</div>
								<div class="clr red">${ln.num_two}</div>
								<div class="simple">${ln.num__s_two}</div>
								<div class="clr black">${ln.num_three}</div>
								<div class="simple">${ln.num__s_three}</div>
							</div>`

				document.querySelector(".table-stats").innerHTML += html

				currentColor = "red"

			}else{

				var html = `<div class="ligne">
								<div class="clr red">${ln.num_one}</div>
								<div class="simple">${ln.num_s_one}</div>
								<div class="clr black">${ln.num_two}</div>
								<div class="simple">${ln.num__s_two}</div>
								<div class="clr red">${ln.num_three}</div>
								<div class="simple">${ln.num__s_three}</div>
							</div>`

				document.querySelector(".table-stats").innerHTML += html

				currentColor = "black"


			}

		})

		document.querySelector(".table-stats").innerHTML += `<div class="footer">
																<div class="footer-stat clr">0</div>
																<div class="footer-stat">5</div>
															</div>`

	}

	var rotate = 0

	var rotateCounter = 0

	var progressNumbers = null

	var anglesIndex = 0

	function rotateSpin(){

		rotate = angles[anglesIndex].ang

		document.querySelector(".spin-ctn").style.rotate = "-"+rotate+"deg"

		document.querySelector(".spin-ctn").style.animation = "spinWheelAnim 8s"

		progressNumbers = setInterval(()=>{

			document.querySelector(".numberWheel").innerText = numbers[index]

			if(index < (numbers.length-1)){
				index++
			}else{
				index = 7
			}

			if(bgIndex === "#bb1e1f"){

				document.querySelector(".number-wheel").style.backgroundColor = "black"

				bgIndex = "black"

			}else{

				document.querySelector(".number-wheel").style.backgroundColor = "#bb1e1f"

				bgIndex = "#bb1e1f"

			}

		},90)

		setTimeout(()=>{

			demoActive = false

			clearInterval(progressNumbers)

			document.querySelector(".numberWheel").innerText = rotate = angles[anglesIndex].value
			document.querySelector(".number-wheel").style.backgroundColor = angles[anglesIndex].color

			document.querySelector(".number-wheel").style.scale = "1.9"

			setTimeout(()=>{
				document.querySelector(".number-wheel").style.scale = "1.19"
			},3000)

			document.querySelector(".btn-restart").classList.remove("disable")		
			
			document.querySelector(".spin-ctn").style.animation = null

		},8000)

	}


	var demoActive = false

	var targetTime = new Date().getTime() + 30000 //60000

	var timeout = false

	var progressChrono = 100

	var timer = null

	function createChrono(){

		demoActive = true

		document.querySelector(".btn-restart").classList.add("disable")

		document.querySelector(".progress-bar").style.backgroundColor = "#4cff4c70"
		document.querySelector('.num-time').style.color = "rgb(92, 184, 92)"
		document.querySelector(".progressTime").style.height = "100%"

		timer = setInterval(()=>{

			const currentTime = new Date().getTime();
		
			const timeRemaining = targetTime - currentTime;

			if (timeRemaining <= 0) {

				clearInterval(timer)
			
				document.querySelector('.num-time').innerHTML = '00:00';

				rotateSpin()

			} else {
			
				const seconds = Math.floor(timeRemaining / 1000)+1;


				const formattedTime = '00:' + (seconds < 10 ? '0' : '') + seconds;

				if(seconds<=3){
					document.querySelector('.num-time').style.color = "rgb(224 38 38)"
					document.querySelector(".progress-bar").style.backgroundColor = "#fb444470"
				}

				var prc = (seconds/30)*100

				document.querySelector(".progressTime").style.height = prc+"%"

				
				document.querySelector('.num-time').innerHTML = formattedTime;
			
			}
		},1000)

	}


	document.querySelector(".btn-restart").addEventListener("click",()=>{

		if(!demoActive){

			clearInterval(timer)

			targetTime = new Date().getTime() + 30000
			
			createChrono()
			if(anglesIndex < angles.length){
				anglesIndex++
			}else{
				anglesIndex = 0
			}

		}

	})

	createNumbers()

	createChrono()

	var index = 7

	var bgIndex = "#bb1e1f"

	function checkOrientation() {

		if (window.orientation === 90 || window.orientation === -90) {

			document.querySelector(".alert-orient").style.display = "none"

		} else {

			document.querySelector(".alert-orient").style.display = "flex"

		}
	
	}

	if(window.innerWidth <= 700){

		setInterval(()=>{
			checkOrientation()
		},15)

	}

	var fullscreenDiv = document.querySelector(".container-app")

	function exitFullscreen() {
	    if (document.exitFullscreen) {
	        document.exitFullscreen();
	    } else if (document.mozCancelFullScreen) {
	        document.mozCancelFullScreen();
	    } else if (document.webkitExitFullscreen) {
	        document.webkitExitFullscreen();
	    } else if (document.msExitFullscreen) {
	        document.msExitFullscreen();
	    }
	}

	function requestFullscreen() {
	    

	    if (fullscreenDiv.requestFullscreen) {
	        fullscreenDiv.requestFullscreen();
	    } else if (fullscreenDiv.mozRequestFullScreen) {
	        fullscreenDiv.mozRequestFullScreen();
	    } else if (fullscreenDiv.webkitRequestFullscreen) {
	        fullscreenDiv.webkitRequestFullscreen();
	    } else if (fullscreenDiv.msRequestFullscreen) {
	        fullscreenDiv.msRequestFullscreen();
	    }

	}


	document.querySelector(".fullScreenBtn").addEventListener("click",()=>{

	    if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
	        exitFullscreen();
	    } else {
	        requestFullscreen();
	    }

	})
}