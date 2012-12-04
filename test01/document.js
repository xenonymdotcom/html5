

function generate_table()
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

// now create the table;
generate_table()
