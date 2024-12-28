//Container With Most Water
//Question 2
//You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).Find two lines that together with the x-axis form a container, such that the container contains the most water.
//Solution:
var maxArea = function(height) {
    let left=0;
    let right=height.length-1;
    let maxArea=0;
    while(left<right){
        const currentHeight = Math.min(height[left], height[right]);
        const width = right - left;
        const area = currentHeight * width;
        maxArea = Math.max(maxArea, area);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    } 
    return maxArea;
};
