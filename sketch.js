/*************************************************************************
    (*)Code Self Portrait
          (*)by Max Amido
    (*)Overview - Self portrait made with differnt p5 shapes and functions
 
    ---------------------------------------------------------------------
    (*)Notes: (ie: To be fixed, I Need Help With, Clarify This, etc etc: )
    		(*) I think I need some more understanding of code stylistic
    			rules and what not. 
**************************************************************************/

function setup() {

	createCanvas(windowWidth, windowHeight);

	cursor(CROSS);

	textSize(14);

	textAlign(LEFT);

	background(236,246,216);

	orangeCircle();

	drawSkin();

	faceMask();

	drawEyes();

	hair();

  	drawEyebrows();

   	drawShirt();

 }


function draw() {
  
  drawOverMe();

  oopsText();

}

//Orange Circle Behind portrait
function orangeCircle(){
	noStroke();
	fill(222,157,52);
	ellipse((width/4)*3,(height/4)*3, 200, 200);
}

//The Skin
function drawSkin(){
  
//Neck
  noStroke();
  fill(173,149,111)
  beginShape();
    vertex(407,388);
    vertex(405,418);
    vertex(378,431);
    vertex(411,485);
    vertex(485,519);
    vertex(542,489);
    vertex(540,420);
    vertex(524,415);
    vertex(516,413);
    vertex(516,379);
    vertex(407,388);
  endShape(CLOSE);
    

//Face/Head
  noStroke();
  fill(190,164,121)
  beginShape();
    vertex(370,293);
    vertex(366,295);
    vertex(363,303);
    vertex(368,315);
    vertex(370,321);
    vertex(375,327);
    vertex(377,339);
    vertex(378,350);
    vertex(388,356);
    vertex(396,381);
    vertex(457,421);
    vertex(476,421);
    vertex(525,383);
    vertex(534,352);
    vertex(536,309);
    vertex(531,300);
    vertex(530,272);
    vertex(520,192);
    vertex(377,213);
    vertex(370,293);
  endShape(CLOSE);
}

//Hair Color and Shape (crazy long sheesh)
function hair(){
    
	noStroke();
    fill(30);
	beginShape();
		vertex(400,320);
        vertex(383,295);
        vertex(366,291);
        vertex(354,247);
        vertex(334,240);
        vertex(345,226);
        vertex(350,206);
        vertex(361,201);
        vertex(368,182);
        vertex(394,161);
        vertex(400,161);
        vertex(391,152);
        vertex(396,147);
        vertex(402,146);
        vertex(401,140);
        vertex(409,141);
        vertex(413,144);
        vertex(419,155);
        vertex(455,140);
        vertex(449,150);
        vertex(466,145);
        vertex(479,146);
        vertex(465,153);
        vertex(493,150);
        vertex(496,153);
        vertex(504,155);
        vertex(501,165);
        vertex(526,165);
        vertex(530,166);
        vertex(525,171);
        vertex(534,180);
        vertex(532,189);
        vertex(549,215);
        vertex(541,251);
        vertex(542,266);
        vertex(538,280);
        vertex(529,291);
        vertex(515,250);
        vertex(506,227);
        vertex(500,240);
        vertex(488,226);
        vertex(470,233);
        vertex(454,233);
        vertex(433,242);
        vertex(430,249);
        vertex(419,242);
        vertex(418,252);
        vertex(424,264);
        vertex(413,279);
        vertex(404,288);
        vertex(410,323);
        vertex(400,320);
        endShape(CLOSE);

}

//Outline and fill of mask
function faceMask(){
  
//Mask
    fill(30);
	beginShape();
		vertex(410,329);
        vertex(420,365);
        vertex(407,390);
        vertex(459,422);
        vertex(476,421);
        vertex(516,395);
        vertex(529,364);
        vertex(532,359);
        vertex(548,349);
        vertex(544,345);
        vertex(546,316);
        vertex(538,308);
        vertex(523,315);
        vertex(494,321);
        vertex(474,313);
        vertex(463,319);
        vertex(410,329);
      endShape(CLOSE);
  
//Strings to mask
    
  strokeWeight(4);
    stroke(30)
    beginShape();
      vertex(416,335);
      vertex(372,295);
    endShape();
  
    beginShape();
      vertex(414,390);
      vertex(386,355);
    endShape();
  
}

//EYES
function drawEyes(){
 
//White of Left Eye
  strokeWeight(1.5);
  stroke(0);
  fill(240);
  beginShape();
    vertex(422,299);
    bezierVertex(422,299,432,292,443,293);
    bezierVertex(443,293,454,295,460,303);
    bezierVertex(460,303,449,310,441,310);
    bezierVertex(441,310,430,310,422,299);
  endShape(CLOSE);
  
//White of Right Eye
  strokeWeight(1.5);
  stroke(0);
  fill(240);
  beginShape();
    vertex(485,302);
    bezierVertex(485,302,493,290,501,294);
    bezierVertex(501,294,506,291,515,300);
    bezierVertex(515,300,507,306,500,306);
    bezierVertex(500,306,490,307,485,302);
  endShape(CLOSE);
  
//Brown of Left Eye
  fill(57,40,14);
  noStroke();
  beginShape();
    vertex(429,297);
    bezierVertex(428,297,436,290,444,295);
    bezierVertex(444,295,452,305,439,309);
    bezierVertex(439,309,429,309,428,297);
  endShape(CLOSE);
  
//Brown of Right Eye
  fill(57,40,14);
  noStroke();
  beginShape();
    vertex(490,298);
    bezierVertex(490,298,492,293,496,294);
    bezierVertex(496,292,502,294,505,299);
    bezierVertex(505,299,503,305,500,307);
    bezierVertex(500,307,490,305,490,299);
  endShape(CLOSE);
  
//Glimmer/Shine in Left Eye
  fill(255);
  noStroke();
  ellipse(440,298,3,4);
  
//Glimmer/Shine in Right Eye
  fill(255);
  noStroke();
  ellipse(500,299,3,4);

}

//Eyebrows... Kinda
function drawEyebrows(){
  
  noStroke();
  textSize(12);
  text('fill in my', 418,288)
  text('eyebrows', 475,285)
  
}

function drawShirt(){
  
  //T-Shirt
  fill(255);
  strokeWeight(2);
  noStroke();
  beginShape();
    vertex(257,552);
    vertex(264,503);
    vertex(300,463);
    vertex(389,426);
    vertex(388,424);
    vertex(397,449);
    vertex(440,480);
    vertex(461,483);
    vertex(496,480);
    vertex(521,469);
    vertex(532,446);
    vertex(530,428);
    vertex(524,415);
    vertex(577,417);
    vertex(653,447);
    vertex(670,468);
    vertex(689,522);
  endShape(CLOSE);
  
  //Ringer on Neck
  fill(222,157,52);
  strokeWeight(2);
  noStroke();
  beginShape();
    vertex(388,424);
    vertex(376,432);
    vertex(387,457);
    vertex(426,495);
    vertex(446,502);
    vertex(491,502);
    vertex(526,484);
    vertex(544,456);
    vertex(542,416);
    vertex(524,415);
    vertex(530,428);
    vertex(532,446);
    vertex(521,469);
    vertex(496,480);
    vertex(461,483);
    vertex(440,480);
    vertex(397,449);
    vertex(388,424);
  endShape(CLOSE); 
}

//I want the user to be able to cover me up, to outline myself, or just doodle.
function drawOverMe(){
	stroke(0);
	strokeWeight(1);
	frameRate(25);
	line(mouseX,mouseY,pmouseX,pmouseY);
}

//Saying you ruined my portrait
function oopsText(){

	if ((mouseX > 256) && (mouseY > 130) && (mouseX < 721) && (mouseY < 553)){
		
		noStroke();
		fill(0);
		rectMode(CORNER);
		rect(((width/4)*3)-5,((height/4)*3)-20,155,30);
		fill(255);
		text('you ruined my portrait...',(width/4)*3,(height/4)*3);

	}
}
