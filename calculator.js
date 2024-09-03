let buttons = document.getElementsByClassName('button');
var pierwszy=false;
var wynik=0;
var operacja=0;
var pierwsza =0;
const liczby=[];
const wyniki=[];
var n=0;
var m=1;
var z=0;
var po_u=0;
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        show(i);
    });
}
{
document.getElementById('del').addEventListener('click',usun)
document.getElementById('reset').addEventListener('click',usun)
document.getElementById('rowna').addEventListener('click',sum)
document.getElementById('plus').addEventListener('click',function(){operacje(1)})
document.getElementById('minus').addEventListener('click',function(){operacje(2)})
document.getElementById('x').addEventListener('click',function(){operacje(3)})
document.getElementById('slash').addEventListener('click',function(){operacje(4)})
}
function show(nr) {
    var numer= $('#b'+nr).text()
    liczby[n]=parseInt(numer,10)
    if(pierwszy==false)
    {
        $('#score').html(numer);
        pierwszy=true;
    }
    else if(pierwszy==true)
    {
        $('#score').html($('#score').html()+numer)
    }
    n=n+1;
    pierwsza=0;
}
function usun()
{
$('#score').html('0,00') 
pierwszy=false; 
wynik = 0;
operacja = 0;
liczby.length = 0;
m = 1;
n = 0;
z = 0;
wyniki.length = 0;
}
function operacje(nr)
{
if(pierwszy==false)
{    
alert('wpisz najpierw liczbę')
}  
else if(pierwszy==true)
{
    if(pierwsza==0)
    {
        if(po_u==1)
        {
        operacja=nr;    
        }
        for(n;n>0;n--)
        {
        wynik=wynik + liczby[n-1]*m;   
        m=m*10;
        }
    if(operacja==0)
    {
    wyniki[z]=wynik;
    wynik=0;
    z=z+1;
  liczby.length=0;
   m=1;
}
if(operacja==1)
{
wynik=wynik+wyniki[z-1];
wyniki[z]=wynik;
wynik=0;
z=z+1;
liczby.length=0;
m=1;
}
if(operacja==2)
{
    wynik=wyniki[z-1]-wynik;
    wyniki[z]=wynik;
wynik=0;
z=z+1;
liczby.length=0;
m=1;
}
if(operacja==3)
{
wynik=wyniki[z-1]*wynik;
 wyniki[z]=wynik;
wynik=0;
z=z+1;
liczby.length=0;
m=1;
}
if(operacja==4)
{
wynik=wyniki[z-1]/wynik;
 wyniki[z]=wynik;
wynik=0;
z=z+1;
liczby.length=0;
m=1;
}
    if(nr==1)
    {
    $('#score').html($('#score').html()+"+")
    }
    else if(nr==2)
    {
     $('#score').html($('#score').html()+"-")   
    }
    else if(nr==3)
    {
     $('#score').html($('#score').html()+"x")   
    }
    else if(nr==4)
    {
     $('#score').html($('#score').html()+"/")   
    }
    operacja=nr;
   pierwsza=1; 
}
}
}
function sum()
{
let tempWynik = 0;
    for (let i = 0; i < n; i++) {
        tempWynik = tempWynik * 10 + liczby[i];
    }
        if (operacja == 1) {
        wynik = tempWynik+wyniki[z-1];
    } else if (operacja == 2) {
        wynik = wyniki[z-1]-tempWynik;
    } else if (operacja == 3) {
        wynik = tempWynik*wyniki[z-1];
    } else if (operacja == 4) {
        wynik = wyniki[z-1]/tempWynik;
    }
    $('#score').html(wynik);

    liczby.length = 0;
    n = 0;
    m = 1;
    operacja = 0;
}


