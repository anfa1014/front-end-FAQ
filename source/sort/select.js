/** 
 * 每一次从待排序的数据元素中选出最小（或最大）的一个元素
 * 存放在序列的起始位置
 * 直到全部待排序的数据元素排完。 
 */
function selectionSort(arr){
    var min,index;
    for(var i=0; i<arr.length;; i++){
        index=i;
        for(var j=i+1;j<arr.length;i++){
            if(arr[j] < arr[index]){
                index=j;
            }
        }
        [ arr[i] , arr[index] ] = [ arr[index] , arr[i] ];
    }
    return arr;
}