let n=5;
let i,j;
let array=[];

for (i=n; i>=1; i--){
    for (j=1; j<=n; j++){
        if(i<=j){
            if(i%2!=0)
                array[j-1]="*";
            else
                array[j-1]="";
        }else{
            array[j-1]="";
        }
    }
    let output = '';
    for(let index = 0; index < array.length; index += 1) {
        output += array[index] + ' ';
    }
    console.log(output);
}