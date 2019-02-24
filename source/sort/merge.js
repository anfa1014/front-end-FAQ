/** 
 * 归并排序是建立在归并操作上的一种有效的排序算法
 * 该算法是采用分治法（Divide and Conquer）的一个非常典型的应用。
 * 将已有序的子序列合并，得到完全有序的序列；
 * 即先使每个子序列有序，再使子序列段间有序。
 * 若将两个有序表合并成一个有序表，称为二路归并。
 */
function mergeSort (arr) {
    if(arr.length <=1 ){
      return arr;
    }
    var index=Math.floor( arr.length/2 ),
      left=arr.slice(0,index),
      right=arr.slice(index);
    return merge(mergeSort(left), mergeSort(right));
  }
function merge(left,right){
    var tmp=[];
    while (left.length>0 && right.length>0){
        if(left[0] > right[0]){
        tmp.push(left.shift());
        }else{
        tmp.push(right.shift());
        }
    }
    return tmp.concat(left,right);
}