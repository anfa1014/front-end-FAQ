/**
 * 直接插入排序
 * 每趟将一个元素，按照大小插入到它前面已排序的子序列中
 * 依次重复，直到插入全部元素
 */
function insertSort(arr){
    for(let i = 1; i < arr.length; i++) {
        let j = i -1;
        let temp = arr[i];
        for(;j >= 0 && temp < arr[j]; j--) a[j+1] = a[j];
        arr[j+1] = temp;
    }
}