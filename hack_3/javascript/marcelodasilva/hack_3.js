function squareroot(number) {
  let status = "exact";
  let lo = 0, hi = number;
  while(lo <= hi) {
       let mid = Math.floor((lo + hi) / 2);
       if(mid * mid > number) hi = mid - 1;
       else lo = mid + 1;
  }

  if (!(Math.pow(hi,2) === number)) {
    status = "closer"
  }

  return {hi,status};
}
const num = Math.floor(1 + (Math.random() * 100));
const result = squareroot(num)
console.log("Number generated: "+ num + " squareroot ("+ result.status +"): "+ result.hi );