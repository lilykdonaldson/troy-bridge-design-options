let input, button, greeting;
var img;
let price = 0;
 
function preload()
{
  // RENDERING 1
 	imgunderlay = loadImage("images/view1_base.png");
    projectorMuralsInstead = loadImage("images/view1_base.png");
	projectorTwo = loadImage("view1_projector2.png");
	projectorHalf = loadImage("view1_projector1.png");
	//projectorFull = loadImage("images/view1_projector1.png");
	muralUV = loadImage("view1_UV.png");
	muralLED = loadImage("images/view1_noUV.png");
	bridgeToWater = loadImage("images/view1_bridge.png");
	bridgeFull = loadImage("images/view1_bridge.png");
	goboYes = loadImage("images/view1_gobo1.png");
	goboYes2 = loadImage("images/view1_gobo2.png");
	underside = loadImage("images/view1_underside.png");
	leds = loadImage("images/view1_LEDs.png");
// RENDERING 2
   imgunderlay2 = loadImage("images/view2_base.png");
	leds2 = loadImage("images/view2_LEDs.png");
	bridgeToWater2 = loadImage("images/view2_bridge.png");	
	underside2 = loadImage("images/view2_underside.png");
	gobo1 = loadImage("images/view2_gobo1.png");
	gobo2 = loadImage("images/view2_gobo2.png");
	muralUV2 = loadImage("images/view2_UV.png");
	muralLED2 = loadImage("images/view2_noUV.png");
	projector21 = loadImage("images/view2_projector2.png");
	projector22 = loadImage("images/view2_projector1.png");
}

function setup() {
	//background('white');
  // create canvas
    createCanvas(1400, 600);
	//image(imgunderlay, 0, 0); 
	image(imgunderlay, 0, 0);
	frameRate(4);

	

}
function draw(){
	price = 0; 
	background('white');
	image(imgunderlay, 0, 0); 
	image(underside, 0, 0);
	image(leds, 0, 0);
	image(imgunderlay2, 510, 0);
	image(underside2, 510, 0);
	image(leds2, 510, 0);
    let projectorsS = select("#projectors");
    let projector = projectorsS.value();
    let speakerS = select("#speakers");
    let speaker = speakerS.value();
    let muralS = select("#mural");
    let mural = muralS.value();
    let bridgeS = select("#bridge");
    let bridge = bridgeS.value();
    let goboS = select("#gobos");
    let gobo = goboS.value();
//MURAL ILLUMINATION
	if(mural == 'UV'){
		image(muralUV, 0, 0); 
		image(muralUV2, 510, 0); 
		price+=4800;
		document.getElementById("UV_ta").innerHTML = '$'+4800;
	}
	else if(mural == 'led'){
		image(muralLED, 0, 0); 
		image(muralLED2, 510, 0); 
		//price+=3000;
		//document.getElementById("LEDmural_ta").innerHTML = '$'+3000;
	}
//PROJECTORS
	if(projector == 'two'){
		if(frameCount%2 == 0){
			image(projectorHalf, 0, 0); 
		}
		else{
			image(projectorTwo, 0, 0); 
		}
		price+=34000;
		document.getElementById("projectors_ta").innerHTML = '$'+34000;
	}
	else if(projector == 'half'){
		if(frameCount%2 == 0){
			image(projectorHalf, 0, 0); 
		}
		else{
			image(projectorTwo, 0, 0); 
		}
		price+=68000;
		document.getElementById("projectors_ta").innerHTML = '$'+68000;
	}
	else if(projector == 'full'){
		if(frameCount%2 == 0){
			image(projectorHalf, 0, 0); 
			image(projector21, 510, 0); 
		}
		else{
			image(projectorTwo, 0, 0); 
			image(projector22, 510, 0); 
		}
		price+=136000;
		document.getElementById("projectors_ta").innerHTML = '$'+136000;
	}
	else{
		document.getElementById("projectors_ta").innerHTML = '';
	}
//SPEAKERS
	if(speaker == 'no'){
		document.getElementById("speakers_ta").innerHTML = '';
	}
	else if(speaker == 'yes'){
		price+=2000;
		document.getElementById("speakers_ta").innerHTML = '$'+2000;
	}


//BRIDGE LIGHTS
	if(bridge == 'none'){
		//image(bridge, 0, 0); 
		document.getElementById("bridge_ta").innerHTML = '';
	}
	else if(bridge == 'towater'){
		image(bridgeToWater, 0, 0); 
		image(bridgeToWater2, 510, 0); 
		price+=200000;
		document.getElementById("bridge_ta").innerHTML = '$'+200000;
	}
	else if(bridge == 'full'){
		image(bridgeFull, 0, 0); 
		price+=40000;
		document.getElementById("bridge_ta").innerHTML = '$'+40000;
	}
//GOBOS
	if(gobo == 'yes'){
		if(frameCount%3 == 0){
			image(goboYes, 0, 0); 
			image(gobo1, 510, 0); 
		}
		else{
			image(goboYes2, 0, 0); 
			image(gobo2, 510, 0); 
		}
		price+=2400;
		document.getElementById("gobos_ta").innerHTML = '$'+2400;
	}
	else if(gobo == 'no'){
		//image(img2, 0, 0); 
		document.getElementById("gobos_ta").innerHTML = '';
	}
	//underside
	price+=13000;
	//LED murals
	price+=25850;
	//text('Total Cost Estimate: $'+price, 300, 550);
	document.getElementById("total_ta").innerHTML = '$'+price;

 }
