function Tree() {
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.height = 0;
	this.scale = 50;
	this.opacity = 0;
	this.objDOM = document.createElement('div');
	this.objStyle = this.objDOM.style;
	this.objStyle.cssText = 'background: #503030; border: 1px solid #301010; width: 10px; height: 10px; left: -10000px; position: absolute; opacity: 0;';
	document.body.appendChild(this.objDOM);
}

Tree.prototype.update = function(index) {
	this.z -= 70;
  
	if(this.opacity < 10) {
		this.opacity += 1;
		this.objStyle.opacity = this.opacity / 10;
	}

	if(this.z < 5) {
		this.objDOM.parentNode.removeChild(this.objDOM)
		trees.splice(index, 1);
	} else {
		this.render();
	}
}

Tree.prototype.render = function () {
	this.scale = 400 / (this.z * 400);
  
	// this.objDOM.innerHTML=this.z + ',' + this.scale;
  
	this.objStyle.left = centerX + (this.x * 200) * this.scale + "px";
	this.objStyle.top  = centerY + (this.y * 200) * this.scale + "px";
 
	this.objStyle.width = Math.round((this.scale * 100) * 50) + "px";
	this.objStyle.height = Math.round((this.scale * 100) * 750) + "px";
   
	this.objStyle.zIndex = Math.round(this.scale * 10000);
}
	 
var divId = document.getElementById("textOutput"),
	oldTimeStamp = 0,
	fps = 60,
	currentTimeStamp = 0,
	index = 0,
	centerX = 0,
	centerY = 0,
	widthX = 0,
	widthY = 0,
	trees = [],
	treeId = 0,
	treeBoxX = 500,
	treeBoxZ = 500,
	sine = [],
	cosine = [];

/*
for(var a = 0; a < 36000; a++) {
	sine.push(Math.sin((a / 100) / 180 * Math.PI));
	cosine.push(Math.cos((a / 100) / 180 * Math.PI));
}
*/

function createInitialTrees(){
	for(i =- 10; i < 10; i++){
		this.newTree = new Tree();
		this.newTree.x = randomRange(-15000, 15000);
		this.newTree.y =- 320;
		this.newTree.z = randomRange(300, 5000);
		this.newTree.opacity = 10;
		this.newTree.objStyle.opacity = "1";
		trees.push(this.newTree);
	}
}

//Animation loop
createInitialTrees();
newFrame();

function newFrame(currentTimeStamp) {  
	widthX = window.innerWidth;
	widthY = window.innerHeight;
	centerX = widthX / 2;
	centerY = widthY / 2;
  
	setTimeout(function() {
		requestAnimationFrame(newFrame);
	}, 1000 / fps);
  
	var timeDelta = currentTimeStamp - oldTimeStamp;
	oldTimeStamp = currentTimeStamp;
	divId.innerHTML = Math.round(timeDelta) + " milliseconds";
	
	this.i=trees.length;

	while(this.i--) {
		trees[this.i].update(this.i);
	}
  
	if(randomRange(0,100) < 90){
		this.newTree=new Tree();
		this.newTree.x = randomRange(-15000,15000);
		this.newTree.y =- 320;
		this.newTree.z = 5000;
		trees.push(this.newTree);
	}  
}

function randomRange(min, max) {
	return Math.random() * (max - min) + min;
}