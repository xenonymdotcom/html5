//
// This is my simple library loaded up in the head of the page
// then called from the code within the doc that writes the page.
//

function createParagraph(data)
{
	if (!data) data = "";
	document.write("<p>"+data+"</p>");
}

function MyEmulator(tag)
{
  this.on_frame_load = function()
  {
    var image=this.image;
  };

  var image = new Image();
  image.onload = this.on_frame_load;
  image.src = "frame.png";
  this.image = image;

  var c=document.getElementById(tag);
  this.ctx = c.getContext("2d");
}

MyEmulator.prototype.render = function()
{
  var ctx = this.ctx;
  ctx.fillStyle="#FFFF00";
  ctx.fillRect(0,0,150,75);
  ctx.beginPath();
  ctx.arc(95,50,40,0,2*Math.PI);
  ctx.stroke();
};


