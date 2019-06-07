var d= document.getElementById("dibujo");
var lienzo= d.getContext("2d");
var xinicial=0;
var yinicial=0;
var xfinal=10;
var yfinal=400;
var aumento=20;
var color="green";
for(var i=0;i<40;i++){
dibujarLinea("purple",xinicial,yinicial,xfinal,yfinal);
    yinicial=yinicial+aumento;
    xfinal=xfinal+aumento;
    console.log("el valor de i: "+i);
}

dibujarLineaHorizontal(color,200,0,200,400);
dibujarLineaHorizontal(color,0,200,400,200);

xinicial=0;yinicial=190;
xfinal=0;yfinal=210;

for(var i=0;i<40;i++)
{
    dibujarLinea(color,xinicial,yinicial,xfinal,yfinal);
    xinicial=xinicial+aumento;
    xfinal=xfinal+aumento;
}
xinicial=190;yinicial=0;
xfinal=210;yfinal=0;

for(var i=0;i<40;i++)
{
    dibujarLinea(color,xinicial,yinicial,xfinal,yfinal);
    yinicial=yinicial+aumento;
    yfinal=yfinal+aumento;
}


function dibujarLineaHorizontal(color, xinicial, yinicial,xfinal, yfinal)
{
  dibujarLinea(color,xinicial,yinicial,xfinal,yfinal);
}

function dibujarLinea(color, xinicial, yinicial,xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle=color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
