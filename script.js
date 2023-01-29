function threeSum(arr, target) {
  //your code here
  let ans=Math.pow(10,9);
  arr.sort();
  if(arr.length<3) {
    return 0;
  }
  for(let i=0;i<arr.length;i++) {
    let sum1=arr[i];
    let j=i+1;
    let k=arr.length-1;

    while(j<k) {
      let sum2=arr[j]+arr[k];

      if( (Math.abs(target-(sum1+sum2)) ) < Math.abs(target-ans) ) {
        ans=sum1+sum2;
      }

      // if((sum1+sum2) === target) {
      //   return sum1+sum2;
      // }
      if((sum1+sum2) > target) {
        k--;
      }
      else {
        j++;
      }
    }

    return ans;
  }
}

module.exports = threeSum;
