// Median of Two Sorted Arrays
//Question:
//Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// Solution :
var findMedianSortedArrays = function(nums1, nums2) {
    let res=[...nums1,...nums2];
    res.sort((a, b) => a - b);
    const n=res.length;
    if(n%2!=0){
        return res[Math.floor(n/2)];
    }else return (res[n / 2 - 1] + res[n / 2])/2;
};
