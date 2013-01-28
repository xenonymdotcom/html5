
function generate_junk_table()
{
	document.write('<table class="generated"><tr>');
		document.write('<td class="heading">Status</td>');
		document.write('<td class="heading">Data</td>');
	document.write('</tr></tr>');
		document.write('<td>initial</td>');
		document.write('<td>generated</td>');
	document.write('</tr></tr>');
		document.write('<td>generated</td>');
		document.write('<td>');
			createParagraph("Some Data");	
		document.write('</td>');
	document.write('</tr></tr>');
		document.write('<td>mt test</td>');
		document.write('<td>');
			createParagraph();
		document.write('</td>');
	document.write('</tr></table>');
}


function generate_table()
{
  // my playing about table ...
  generate_junk_table();

  // generate the table I want with an image in it
	document.write('<table class="emulator"><tr>');
		document.write('<td class="screen"><canvas id="vdu" width="320" height="256"></canvas></td>');
	document.write('</tr></table>');
}

function init_screen()
{
  var c=document.getElementById("vdu");
  var ctx=c.getContext("2d");
  ctx.fillStyle="#FF0000";
  ctx.fillRect(0,0,150,75);
  ctx.beginPath();
  ctx.arc(95,50,40,0,2*Math.PI);
  ctx.stroke();
}

// now create the table ...
generate_table();
// and init the screen.
init_screen();
