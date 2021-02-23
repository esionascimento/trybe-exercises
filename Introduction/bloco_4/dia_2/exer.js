let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let a, soma=0, maior=-9999;

for (a=0; a<numbers.length; a++){
    console.log(numbers[a]);
    soma+=numbers[a];
    if(numbers[a]>maior){
        maior=numbers[a];
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