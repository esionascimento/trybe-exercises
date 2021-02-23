let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let a, soma=0, resto, contImpar=0, maior=-9999, menor=9999;

for (a=0; a<numbers.length; a++){
    console.log(numbers[a]);
    soma+=numbers[a];
    resto=numbers[a]%2;
    if(resto!=0){
        contImpar++;
    }
    if(numbers[a]>maior){
        maior=numbers[a];
    }
    if(numbers[a]<menor){
        menor=numbers[a];
    }
}
console.log(`----------`);
console.log(`2. ${soma}`);
console.log(`3. ${soma/numbers.length}`);
if(soma>20){
    console.log('4. Valor maior que 20');
}else{
    console.log('4. Valor menor ou igual a 20');
}
console.log(`5. Maior: ${maior}`);
console.log(`6. ${contImpar}`);
console.log(`7. Menor: ${menor}`);
console.log(`----------`);
let arrayNumber=[];
for(a=1; a<=25; a++){
    arrayNumber[a]=a;
    console.log(`${arrayNumber[a]}`);
}