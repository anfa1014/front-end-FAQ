/** 
 * 冒泡排序是经过n-1趟子排序完成的
 * 第i趟子排序从第1个数至第n-i个数
 * 若第i个数比后一个数大（则升序，小则降序）则交换两数。
 */
function bubbleSort(arr){
    var temp;
    for(var i=0; i<arr.length; i++){
        for(var j=0; j<arr.length-i-1; j++){
            if(arr[j] > arr[j+1]){
                [ arr[j] , arr[j+1] ] = [ arr[j+1] , arr[j] ];
                /*
                    或者这样交换：
                        arr[j] ^= arr[j+1];
                        arr[j+1] ^= arr[j];
                        arr[j] ^= arr[j+1];
                */
            }
        }
    }
    return arr;
}