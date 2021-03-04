let palindromo=('rever');
verificaPalindrome(palindromo);

function verificaPalindrome(palindromo){
  let isPalindrome=palindromo.split('').reverse();
  let confirma=false;
  let tamPalindrome=palindromo.length;
  let count=0;
  for(let i=0; i<tamPalindrome;i++){
    if(isPalindrome[i]==palindromo[i])
      count++;
  }
  if(count==tamPalindrome)
    confirma=true;

  console.log(`${confirma}`);
}