//
// This is my simple library loaded up in the head of the page
// then called from the code within the doc that writes the page.
//

function createParagraph(data)
{
	if (!data) data = "";
	document.write("<p>"+data+"</p>");
}
