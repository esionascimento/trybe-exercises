let salarioBruto=3000;

if(salarioBruto<=1556.94){
    salarioBruto-=(salarioBruto*0.08);
}else if(salarioBruto<=2594.92){
    salarioBruto-=(salarioBruto*0.09);
}else if(salarioBruto<=5189.82){
    salarioBruto-=(salarioBruto*0.11);
}else{
    salarioBruto-=570.88;
}

if(salarioBruto>=1903.99 && salarioBruto<=2826.65){
    salarioBruto-=(salarioBruto*0.075)-142.80;
}else if(salarioBruto>=2826.66){
    salarioBruto-=(salarioBruto*0.15)-354.80;
}
else if(salarioBruto>=3751.06){
    salarioBruto-=(salarioBruto*0.225)-636.13;
}
else if(salarioBruto>=4664.68){
    salarioBruto-=(salarioBruto*0.275)-869.36;
}

console.log(salarioBruto);