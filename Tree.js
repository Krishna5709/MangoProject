class Tree{
    constructor(x,y){
        var options={
            isStatic:true

        }
        this.body = Bodies.rectangle(x,y,600,800,options);
        this.width=600
        this.height=800
        this.image = loadImage("tree.png")
        World.add(world,this.body)
    }
display(){
    imageMode(CENTER);
    var pos1 = this.body.position.x;
    var pos2 = this.body.position.y;
    image(this.image,pos1,pos2,600,800);
}
}
