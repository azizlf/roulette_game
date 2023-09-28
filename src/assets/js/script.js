function dashbordFunctions(){
	function changeCoin(coin){

		if(window.innerWidth >= 800){
			document.querySelector(".cursor-coin").style.backgroundImage=coin.style.backgroundImage
		}else{
			var current = document.querySelector(".active-coin")
			if(current != null){
				current.classList.remove("active-coin")
			}
			coin.classList.add("active-coin")
		}

	}


	if(window.innerWidth >= 800){
		document.querySelector(".table-dash").addEventListener("mousemove", (e) => {

		  const cursorCoin = document.querySelector(".cursor-coin");
		  const offsetX = e.clientX - cursorCoin.clientWidth / 2; // Center element
		  const offsetY = e.clientY - cursorCoin.clientHeight / 2; // Center element

		  cursorCoin.style.top = (offsetY - (0.04 * document.querySelector(".table-dash").clientWidth)) + "px";
		  cursorCoin.style.left = offsetX + "px";
		});
	}else{
		document.querySelector(".cursor-coin").style.display = "none"
		document.querySelector(".table-dash").style.cursor = "default"
	}


	document.querySelector(".nbrTlbtr").addEventListener("click",()=>{

		document.querySelector(".create-tiket").style.display = "block"

	})
	document.querySelector(".check").addEventListener("click",()=>{

		document.querySelector(".create-tiket").style.display = "none"

	})
	document.querySelector(".remove").addEventListener("click",()=>{

		document.querySelector(".create-tiket").style.display = "none"

	})

}

function spinFunctions(){
	var angles = [

		{
			ang:0,
			val:0,
			color:"#2cc93b"
		},
		{
			ang:10,
			val:26,
			color:"#2c2728"
		},
		{
			ang:19,
			val:3,
			color:"#cf1b24"
		},
		{
			ang:29,
			val:35,
			color:"#2c2728"
		},
		{
			ang:39,
			val:12,
			color:"#cf1b24"
		},
		{
			ang:49,
			val:28,
			color:"#2c2728"
		},
		{
			ang:58,
			val:7,
			color:"#cf1b24"
		},
		{
			ang:68,
			val:29,
			color:"#2c2728"
		},
		{
			ang:77,
			val:18,
			color:"#cf1b24"
		},
		{
			ang:88,
			val:22,
			color:"#2c2728"
		},
		{
			ang:97,
			val:9,
			color:"#cf1b24"
		},
		{
			ang:106,
			val:31,
			color:"#2c2728"
		},
		{
			ang:117,
			val:14,
			color:"#cf1b24"
		},
		{
			ang:126,
			val:20,
			color:"#2c2728"
		},
		{
			ang:136,
			val:1,
			color:"#cf1b24"
		},
		{
			ang:146,
			val:33,
			color:"#2c2728"
		},
		{
			ang:155,
			val:16,
			color:"#cf1b24"
		},
		{
			ang:164,
			val:24,
			color:"#2c2728"
		},
		{
			ang:175,
			val:5,
			color:"#cf1b24"
		},
		{
			ang:185,
			val:10,
			color:"#2c2728"
		},
		{
			ang:195,
			val:23,
			color:"#cf1b24"
		},
		{
			ang:205,
			val:8,
			color:"#2c2728"
		},
		{
			ang:213,
			val:30,
			color:"#cf1b24"
		},
		{
			ang:224,
			val:11,
			color:"#2c2728"
		},
		{
			ang:233,
			val:36,
			color:"#cf1b24"
		},
		{
			ang:244,
			val:13,
			color:"#2c2728"
		},
		{
			ang:253,
			val:27,
			color:"#cf1b24"
		},
		{
			ang:262,
			val:6,
			color:"#2c2728"
		},
		{
			ang:271,
			val:34,
			color:"#cf1b24"
		},
		{
			ang:281,
			val:17,
			color:"#2c2728"
		},
		{
			ang:290,
			val:25,
			color:"#cf1b24"
		},
		{
			ang:300,
			val:2,
			color:"#2c2728"
		},
		{
			ang:311,
			val:21,
			color:"#cf1b24"
		},
		{
			ang:321,
			val:4,
			color:"#2c2728"
		},
		{
			ang:330,
			val:19,
			color:"#cf1b24"
		},
		{
			ang:340,
			val:15,
			color:"#2c2728"
		},
		{
			ang:349,
			val:32,
			color:"#cf1b24"
		}

	]

	var choosedAngle = 2;
	var totalRotations = 0; // Variable to keep track of the total rotations
	var rotationsToStop = 90; // Change this to the desired number of rotations
	var isSpinning = true; // Flag to indicate if the wheel is spinning
	const wheel = document.querySelector(".spin");
	const indicator = document.querySelector(".indicator-number");

	function spinToAngle(desiredAngle) {

	    const index = angles.findIndex(item => item.val === desiredAngle);

	    if (index !== -1) {
	        choosedAngle = index;
	        totalRotations = 0;
	        isSpinning = true; 
	        requestAnimationFrame(animateSpin);
	    } else {
	        console.error("Desired angle not found in the angles array.");
	    }
	}

	var time = 200

	function animateSpin(timestamp) {
	    if (isSpinning) {
	        
	        const progress = (timestamp % time) / time; // Change 5000 to control the animation duration
	        
	        let angle = progress * 360;

	        if (angle < 0) {
	            angle += 360; 
	        }

		    wheel.style.transform = "rotate(" + (angle-4) + "deg";
	        

	        const index = Math.floor((angles.length * angle) / 360);

	        indicator.innerText = angles[index].val
	        indicator.style.backgroundColor = angles[index].color

	        time += 0.5

	        if (index !== choosedAngle) {
	            requestAnimationFrame(animateSpin);
	        } else {

			    
			    totalRotations++;

	            if (totalRotations < rotationsToStop) {
	                requestAnimationFrame(animateSpin);
	            } else if(totalRotations === rotationsToStop){
					
					setTimeout(()=>{
						indicator.style.transform = "scale(2)"
			        	indicator.style.margin = "0"
			        	setTimeout(()=>{
				        	indicator.style.transform = "scale(1)"
				        	indicator.style.marginTop = "3.3%"
				        	setTimeout(()=>{
								document.querySelector(".dashbord-app").style.display = "block"

								document.querySelector(".spin-app").style.display = "nonr"

				        	},5000)
				        },4000)
					},550)		        
	                isSpinning = false;
	            }
	        }
	    }
	}
}