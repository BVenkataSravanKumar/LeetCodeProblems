//3Sum
//question 
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.Notice that the solution set must not contain duplicate triplets.
//Solution:
var threeSum = function(nums) {
    const len=nums.length;
    let res=[];
    nums.sort((a,b)=>a-b);
    for(let i=0;i<len;i++){
        if(i>0 && nums[i]===nums[i-1])continue;
        let left=i+1;
        let right=len-1;
        while(left<right){
            let sum=nums[i]+nums[left]+nums[right];
            if(sum==0){
                res.push([nums[i],nums[left],nums[right]]);
                left++;
                right--;
                while (left < right && nums[left] === nums[left - 1]) left++;
                while (left < right && nums[right] === nums[right + 1]) right--;
            }else if(sum<0){
                left++
            }else{
                right--;
            }
        }
    }
    return res;
};
