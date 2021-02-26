let n=5;
let array=[];
let a=n-1;
console.log(`n = ${n} \n`);
for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
        array[j]=" ";
        if(j>=a){
            array[j]="*";   
        }
    }
    a--;
    console.log([]+array);
}
