function binarySearch(arr,target){
let left=0;
let right=arr.length-1;
while(left<=right)
{const mid=Math.floor((right+left)/2);
 if(arr[mid]==target){
    return mid;
 }
 else if(arr[mid]<target)
 {
    left=mid+1;
 }
 else{
    right=mid-1;
 }
}
return -1;
}
var arr=[2,12,15,17,27,29,45];
console.log(binarySearch(arr,45));