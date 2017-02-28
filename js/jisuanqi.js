// JavaScript Document
var a,b,c,d;
function shu(x)
{
if (jg.value==0)
	{
	jg.value=x;
	}
else
{
	if (x==".")
	{
	var kk=jg.value
	if (kk.indexOf(".")<0)
	{jg.value=jg.value+x;}
	}
	else
	{
	jg.value=jg.value+x;
	}
}
}
function yunsuan(y)
{
	switch (y)
	{
	case "+":
	d="+"
	break
	case "-":
	d="-"
	break
	case "x":
	d="x"
	break
	case "/":
	d= "/"
	}
a=Number(jg.value);
jg.value=""
}
function dengyu()
{
b=Number(jg.value)
if(a!=undefined && b!=0 && d!=undefined)
{
	switch (d)
	{
	case "+":
		c=a+b;
		break;
	case "-":
		c=a-b;
		break;
	case "x":
		c=a*b;
		break;
	
	case "/":
		c=a/b;
	}
jg.value=c;
a=0;
b=0;
d=undefined;
}
}
function qc()
{
a=0;
b=0;
d=undefined;
jg.value="0";
}
function shanchu()
{
var bs=jg.value;
bs=bs.substr(0,bs.length-1);
jg.value=bs;
jg.focus();
}
function pf()
{
var h=Number(jg.value);
if (h!=0)
	{
	h=h*h;
	jg.value=h;
	}
}
function jc()
{
var p=1;
var q=parseInt(jg.value)
if (q!=0 && q!=NaN)
	{
	for (i=1;i<=q;i++)
		{
		p=p*i;
		}
	jg.value=p;
	}

}
function setfocus()
{
jg.focus();
ts=startTime()
}
function kf()
{
if (jg.value!=".")
{
jg.value=Math.sqrt(Number(jg.value))
}
}

function checkkey()
{
var p=/[^0-9]/
if (p.test(jg.value)==true)
{
jg.value=""
jg.focus
}
}
function startTime()
{
var today=new Date()
var h=today.getHours()
var m=today.getMinutes()
var s=today.getSeconds()
m=checkTime(m)
s=checkTime(s)
document.getElementById('sjxs').innerHTML=h+":"+m+":"+s
t=setTimeout('startTime()',500)
}

function checkTime(i)
{
if (i<10) 
  {i="0" + i}
  return i
}
function timeshow()
{

if (document.getElementById('sjxs').style.display!="none")
{
document.getElementById('sjxs').style.display="none"
}
else
{
document.getElementById('sjxs').style.display="block"
}
}