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

var mediaStream

function scanQrTiket() {
    const video = document.querySelector('.stream-scan');
    const canvas = document.querySelector('.canvas-qr');
    const ctx = canvas.getContext('2d');

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {

        	mediaStream = stream

            video.srcObject = stream

            video.play()

        	localStorage.setItem("access-to-camera","1")

            function scan() {
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
                const code = jsQR(imageData.data, imageData.width, imageData.height)

                if (code) {
                    localStorage.setItem("qr-data",code.data)
                } else {
                    localStorage.setItem("qr-data","false")
                }

                requestAnimationFrame(scan)
            }

            scan()
        })
        .catch((error) => {
            localStorage.setItem("access-to-camera","0")
        });
    }
}

function stopCamera() {
    if (mediaStream) {
        const tracks = mediaStream.getTracks()

        tracks.forEach((track) => {
            track.stop()
        });

        mediaStream = null

        const video = document.querySelector('.stream-scan')
        video.srcObject = null
    }
}