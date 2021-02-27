let n=5;
let array=[];

console.log(`n = ${n} \n`);
for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
        array[j]="*";
    }
    console.log([]+array);
}
