

let iSave;


function setup() {
  createCanvas(400, 400);

  saveButton = new Button(180, 100, 40, 40, 0, 255, 0, false);

}

function draw() {
 
 textSize(15);
 fill(255);
 rect(0,0,400,400);


 // button control section

 saveButton.buttonDraw();

  if(saveButton.buttonCheck() == true && mouseIsPressed == true) 
    {iSave = true;}
    else
    {iSave = false;} 
    console.log('iSave ', iSave);
    text(iSave,20,40); 

  if(touches.length = 1) 
    { touchX = mouseX; touchY = mouseY;
      fill(255,0,0);
      ellipse(touchX,touchY,50,50);}

}

function mousePressed() {

  if (tvalue = 255) {
    tvalue = 0;
  } else {
    tvalue = 255;
  }

}


class  Button{
    constructor(bx,by,bw,bh,c1,c2,c3,mOnBut){
    this.bw = bw;
    this.bh = bh;
    this.xpos = bx;   
    this.ypos = by;
    this.rCol = c1;
    this.gCol = c2;
    this.bCol = c3;
    this.mOnBut = mOnBut;
}

 buttonCheck(){
    if((mouseX>this.xpos) && (mouseX<this.xpos+this.bw) && (mouseY>this.ypos) && (mouseY<this.ypos+this.bh))
        {this.mOnBut = true;}
    else {this.mOnBut = false;}
    return (this.mOnBut);
 }

 buttonDraw(){
    fill(this.rCol,this.gCol,this.bCol);
    rect(this.xpos,this.ypos,this.bw,this.bh);
 }

}
