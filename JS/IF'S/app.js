let arr = [11, -2, 34, 45, 19, 6]; 

function getMaxSubSum(arr){
  let number=0

  for (let i= 0; i < arr.length; i++) {
    number += arr[i];
  }
  return number;
}


console.log(getMaxSubSum(arr));