const nums=[2,4,6,8,10];
let sum=0
for(let i=0;i<nums.length;i++){
sum=sum+(nums[i]**(2+i))
}
console.log(sum)