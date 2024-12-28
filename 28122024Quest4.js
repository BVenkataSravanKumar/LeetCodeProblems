//Merge Strings Alternately
//Question: You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.Return the merged string.
//Solution;
var mergeAlternately = function(word1, word2) {
    let res = "";
    let i = 0, j = 0;
    while (i < word1.length && j < word2.length) {
        res += word1[i++];
        res += word2[j++];
    }
    if (i < word1.length) res += word1.slice(i);
    if (j < word2.length) res += word2.slice(j);
    return res;
}; 
