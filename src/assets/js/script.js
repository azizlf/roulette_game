function initFnHome(){
	
	var fullscreenDiv = document.querySelector(".application")

	function exitFullscreen() {
	    if (document.exitFullscreen) {
	        document.exitFullscreen()
	    } else if (document.mozCancelFullScreen) {
	        document.mozCancelFullScreen()
	    } else if (document.webkitExitFullscreen) {
	        document.webkitExitFullscreen()
	    } else if (document.msExitFullscreen) {
	        document.msExitFullscreen()
	    }
	}

	function requestFullscreen() {
	    

	    if (fullscreenDiv.requestFullscreen) {
	        fullscreenDiv.requestFullscreen()
	    } else if (fullscreenDiv.mozRequestFullScreen) {
	        fullscreenDiv.mozRequestFullScreen()
	    } else if (fullscreenDiv.webkitRequestFullscreen) {
	        fullscreenDiv.webkitRequestFullscreen()
	    } else if (fullscreenDiv.msRequestFullscreen) {
	        fullscreenDiv.msRequestFullscreen()
	    }

	}

	document.querySelector(".fullScreenBtn").addEventListener("click",()=>{

	    if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
	        exitFullscreen()
	    } else {
	        requestFullscreen()
	    }

	})

	function handleOrientationChange(event) {
		console.log(event.matches)
		if (event.matches) {
			document.querySelector(".alert-orient").style.display = "none"
		} else {
			document.querySelector(".alert-orient").style.display = "flex"
		}
	}

	if(window.innerWidth < 950){

		setInterval(()=>{
			const landscapeOrientation = window.matchMedia("(orientation: landscape)")

			handleOrientationChange(landscapeOrientation)
			
			landscapeOrientation.addListener(handleOrientationChange)
		},2000)

	}
}

function SpinWheelEvents(){

	var fullscreenDiv = document.querySelector(".spin-app")

	function exitFullscreen() {
	    if (document.exitFullscreen) {
	        document.exitFullscreen()
	    } else if (document.mozCancelFullScreen) {
	        document.mozCancelFullScreen()
	    } else if (document.webkitExitFullscreen) {
	        document.webkitExitFullscreen()
	    } else if (document.msExitFullscreen) {
	        document.msExitFullscreen()
	    }
	}

	function requestFullscreen() {
	    

	    if (fullscreenDiv.requestFullscreen) {
	        fullscreenDiv.requestFullscreen()
	    } else if (fullscreenDiv.mozRequestFullScreen) {
	        fullscreenDiv.mozRequestFullScreen()
	    } else if (fullscreenDiv.webkitRequestFullscreen) {
	        fullscreenDiv.webkitRequestFullscreen()
	    } else if (fullscreenDiv.msRequestFullscreen) {
	        fullscreenDiv.msRequestFullscreen()
	    }

	}

	document.querySelector(".fullScreenBtnSpin").addEventListener("click",()=>{

	    if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
	        exitFullscreen()
	    } else {
	        requestFullscreen()
	    }

	})

}