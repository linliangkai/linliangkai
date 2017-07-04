
//类
class Bullet{
	
	constructor(){
		this.ele = document.createElement("div");
		this.id = parseInt(Math.random()*100000000);
		//console.log(this.ele);
	}
//	
//	init = () => {
//		gameEngine.allBullet[this.id] = this;
//		//console.log( gameEngine.allBullet );
//		
//		gameEngine.ele.appendChild(this.ele);
//		this.ele.className = "bullet";
//		this.ele.style.left = myPlane.ele.offsetLeft + myPlane.ele.offsetWidth/2 - this.ele.offsetWidth/2 + "px";
//		this.ele.style.top = myPlane.ele.offsetTop - this.ele.offsetHeight + "px";
//		return this;
//		console.log(111);
//	};
	
	init(){
		//添加
		gameEngine.allBullet[this.id] = this;
		//console.log( gameEngine.allBullet );
		
		gameEngine.ele.appendChild(this.ele);
		this.ele.className = "bullet";
		this.ele.style.left = myPlane.ele.offsetLeft + myPlane.ele.offsetWidth/2 - this.ele.offsetWidth/2 + "px";
		this.ele.style.top = myPlane.ele.offsetTop - this.ele.offsetHeight + "px";
		return this;
	}
	
	move(){
		let that = this;
		//箭头函数
		this.timer = setInterval(()=>{
			
			let y = that.ele.offsetTop - 10;
			if (y < -18) {
				clearInterval(that.timer); //停止移动
				gameEngine.ele.removeChild(that.ele); //移除子弹
				
				//删除
				delete gameEngine.allBullet[that.id];
			}
			else {
				that.ele.style.top = y + "px"; //移动
			}
		}, 50);
	}
	
	boom(){
		clearInterval(this.timer); //停止移动
		
		this.ele.className = "bullet-die";
		//let
		let that = this;
		//const
		const dieImgs = ["images2/die1.png", "images2/die2.png"]; 
		console.log(dieImgs);
		//解构赋值
		let [i]= [0];
		let dieTimer = setInterval(function(){
			if (i >= 1){
				clearInterval(dieTimer); //停止爆炸
				gameEngine.ele.removeChild(that.ele); //移除子弹
			}else {
				that.ele.style.background = "url("+ dieImgs[++i] +") no-repeat";
			}
		}, 100);
	}
}



//子弹Bullet
//function Bullet(){
//	//属性ele
//	this.ele = document.createElement("div");
//	this.id = parseInt(Math.random()*100000000);
//	
//	//方法init
//	this.init = () =>{
//		
//		//添加
//		gameEngine.allBullet[this.id] = this;
//		//console.log( gameEngine.allBullet );
//		
//		gameEngine.ele.appendChild(this.ele);
//		this.ele.className = "bullet";
//		this.ele.style.left = myPlane.ele.offsetLeft + myPlane.ele.offsetWidth/2 - this.ele.offsetWidth/2 + "px";
//		this.ele.style.top = myPlane.ele.offsetTop - this.ele.offsetHeight + "px";
//		return this;
//	}
//	
//	//方法move
//	this.move = function(){
//		let that = this;
//		this.timer = setInterval(function(){
//			let y = that.ele.offsetTop - 10;
//			if (y < -18) {
//				clearInterval(that.timer); //停止移动
//				gameEngine.ele.removeChild(that.ele); //移除子弹
//				
//				//删除
//				delete gameEngine.allBullet[that.id];
//			}
//			else {
//				that.ele.style.top = y + "px"; //移动
//			}
//		}, 50);
//	}
//	
//	//爆炸
//	this.boom = function(){
//		clearInterval(this.timer); //停止移动
//		
//		this.ele.className = "bullet-die";
//		//let
//		let that = this;
//		//const
//		const dieImgs = ["images2/die1.png", "images2/die2.png"]; 
//		console.log(dieImgs);
//		//解构赋值
//		let [i]= [0];
//		let dieTimer = setInterval(function(){
//			if (i >= 1){
//				clearInterval(dieTimer); //停止爆炸
//				gameEngine.ele.removeChild(that.ele); //移除子弹
//			}else {
//				that.ele.style.background = "url("+ dieImgs[++i] +") no-repeat";
//			}
//		}, 100);
//	}
//	
//}

