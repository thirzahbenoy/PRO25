class paper {
    constructor(x,y,r){
      var options= {
        density:1.2,
        friction:0,
        restitution:0.3,
        isStatic:false

      }
      this.image = loadImage("paper.png");
      this.x=x;
    this.y=y;
    this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
    World.add(world, this.body);
    }
    display()
	{
      var paperpos=this.body.position;		
      var angle=this.body.angle
			push()
			translate(paperpos.x, paperpos.y);
      rotate(angle);
      imageMode(CENTER)
      image(this.image,0,0,this.width,this.height)
				pop()
	}
    
}
