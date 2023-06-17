let inputtypetex=document.querySelector(`.input`)
let buttoncalcular=document.querySelector(`.calcular`)
let perimetroptext=document.querySelector(`.perimetrotext`)
let areaptext=document.querySelector(`.areatypetext`)
let ladostriangulo=document.querySelector(`.ladost`)
let basetriangulo=document.querySelector(`.baset`)
let buttoncalculartriangulo=document.querySelector(`.calculatriangulo`)
let perimetrotri=document.querySelector(`.perimetrot`)
let areatri=document.querySelector(`.areat`)
let alturat=document.querySelector(`.alturat`)
let inputcircle=document.querySelector(`.inputc`)
let buttonc=document.querySelector(`.calcularc`)
let pdiametro=document.querySelector(`.diametroc`)
let pcircunferencia=document.querySelector(`.circunferenciac`)
let pareac=document.querySelector(`.areac`)
let inputa=document.querySelector(`.A`)
let inputb=document.querySelector(`.B`)
let inputc=document.querySelector(`.C`)
let buttontc=document.querySelector(`.btc`)
let perimetrotc=document.querySelector(`.perimetrotc`)
let areatc=document.querySelector(`.areatriangulos`)
let monto=document.querySelector(`.inputmonto`)
let sobrante=document.querySelector(`.inputporciento`)
let buttonsobrante=document.querySelector(`.buttonporcentaje`)
let resultado=document.querySelector(`.resultadodelsobrante`)
let totaltopay=document.querySelector(`.Totaltopay`)
let coupon=document.querySelector(`.coupon`)
let buttonTopay=document.querySelector(`.topay`)
let pPrice=document.querySelector(`.price`)
let pDescount=document.querySelector(`.descount`)
let ptotalTopay=document.querySelector(`.Total`)
buttoncalcular.addEventListener(`click`,perimetrocuadradoarea)
buttoncalculartriangulo.addEventListener(`click`,calcularperimetro)
buttonc.addEventListener(`click`,circulo)
buttontc.addEventListener(`click`,trianguloesca)
buttonsobrante.addEventListener(`click`,porsentajes)
buttonTopay.addEventListener(`click`,coupons)  
function perimetrocuadradoarea(){
let numeros=Number(inputtypetex.value)
let perimetro=numeros *4
perimetroptext.innerHTML="tu perimetro :" + perimetro
let area=numeros * numeros
areaptext.innerHTML="tu area :" + area
}
function calcularperimetro(){
let lados=Number(ladostriangulo.value)   
let base=Number(basetriangulo.value)
if (lados==base){
alturat.innerHTML="este no es un triangulo isoseles "
}else{
let altura= Math.sqrt((lados**2)-((base**2))/4)
let perimetro=lados+ lados + base
let area=(base * altura)/2 
areatri.innerHTML="tu area :" + area
perimetrotri.innerHTML="tu perimetro :" +perimetro; 
alturat.innerHTML="esta es tu altura :" +altura}
}
function circulo(){
let radio=Number(inputcircle.value)
let diametro=radio*2
let pi=3.1415
let circunferencia=diametro * pi
let areac=(radio **2) * pi
pdiametro.innerHTML="este es tu diametro :" + diametro
pcircunferencia.innerHTML="esta es tu circunferencia :" + circunferencia
pareac.innerHTML="esta es tu area :" + areac
}
function trianguloesca(){
let inputA=Number(inputa.value) 
let inputB=Number(inputb.value) 
let inputC=Number(inputc.value)
let perimetro=inputA + inputB + inputC
let division=perimetro/2
let formula=Math.sqrt(division*(division-inputA)*(division-inputB)*(division-inputC));
perimetrotc.innerHTML="este es tu perimetro :" + perimetro
areatc.innerHTML=`esta es tu area :${formula}`
}
function porsentajes(){
let montos=Number(monto.value)
let sobrantes=Number(sobrante.value)
if(monto===0||sobrantes===0){
resultado.innerHTML="ingrese monto y porcentaje para poder realizar una operacion"
}else if(sobrantes>=100){
resultado.innerHTML="el porsentaje no puede ser igual o exceder el 100%"
}else{
let mate=montos*(100-sobrantes)/100
resultado.innerHTML="Resultado :" + mate}
} 
let couponTodiscount=[]
couponTodiscount.push({name:"platino",discount:30})
couponTodiscount.push({name:"dorado",discount:20})
couponTodiscount.push({name:"bienvenido",discount:10})
function coupons (){
let totalltopay=Number(totaltopay.value)
let cuponsito=coupon.value
let descuento;
function comparador(cupon){
return cupon.name == cuponsito;}
let cuponarr= couponTodiscount.find(comparador);
if(cuponarr){
descuento=cuponarr.discount;
let mate=totalltopay*(100-descuento)/100
pPrice.innerHTML="total a pagar es de :" +totalltopay+" $"
pDescount.innerHTML="su descuento es de :"+descuento+" %"
ptotalTopay.innerHTML="el precio con descuento es de :"+mate+" $"
}else if(cuponsito>=31||totalltopay===0||cuponsito===0 ){ptotalTopay.innerHTML="en caso de haber ingresado un cupon mayor a 30% no sera valido o ingresa monto y cupon correctos"}
}

