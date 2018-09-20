function Ball(xPosition, yPosition, radius)
{
    this.r = radius;
    this.c = "white";
    this.x = xPosition;//canvas.width / 2 - this.r;
    this.y = yPosition;//canvas.height / 2 - this.r;
    this.dx = 0;
    this.dy = 4;
    this.numCollisions = 0;
    
    this.bottom = function()
    {
        return this.y + this.r; 
    };
    
    this.top = function()
    {
        return this.y - this.r;  
    };
    
    this.left = function()
    {
        return this.x - this.r;  
    };
    
    this.right = function()
    {
        return this.x + this.r;  
    };
    
    this.move = function()
    {
      // Apply dx
      this.x += this.dx;
      
      // Apply dy
      this.y += this.dy;
    };
    
    this.draw = function(ctx)
    {
        ctx.beginPath();
        ctx.fillStyle = this.c;
        ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
        ctx.fill();
    };
};