n=parseInt(prompt("Enter the number"))
for(let i=1; i<=n; i++)
{
	for(let j=n; j>i; j--)
	{
		document.write("*");
		document.write("&nbsp;");
	}
	for(let j=1; j<=i; j++)
	{
		document.write(i);
		document.write("&nbsp;");
	
	}
	for(let l=1;l<=i; l++)
	{
		document.write(i);
		document.write("&nbsp;");
	
	}
	for(let j=n; j>i; j--)
	{
		document.write("*");
		document.write("&nbsp;");
	}

	document.write("<br>");
}
	
