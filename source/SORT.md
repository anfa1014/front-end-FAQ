## (快速排序)[./sort/quickSort.js]

## 冒泡排序
冒泡排序是经过n-1趟子排序完成的，第i趟子排序从第1个数至第n-i个数，若第i个数比后一个数大（则升序，小则降序）则交换两数。

```
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
```
## 选择排序
每一次从待排序的数据元素中选出最小（或最大）的一个元素，存放在序列的起始位置，直到全部待排序的数据元素排完。 

```
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
```
## 归并排序
归并排序是建立在归并操作上的一种有效的排序算法,该算法是采用分治法（Divide and Conquer）的一个非常典型的应用。将已有序的子序列合并，得到完全有序的序列；即先使每个子序列有序，再使子序列段间有序。若将两个有序表合并成一个有序表，称为二路归并。


```
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
```
## 希尔排序
## 堆排序
## 插入排序