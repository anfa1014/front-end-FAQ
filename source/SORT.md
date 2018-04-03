## 快速排序
思想如下：

1. 在数据集之中，选择一个元素作为"基准"（pivot）。
2. 所有小于"基准"的元素，都移到"基准"的左边；所有大于"基准"的元素，都移到"基准"的右边。
3. 对"基准"左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止。

```
	function qucikSort(arr){
		if(arr.length <= 1) return arr;
		var pivotIndex = Math.floor(arr.length/2);
		var pivot = arr.splice(pivotIndex,1)[0];
		var left=[],right=[];
		for(var i=0; i<arr.length; i++){
			if(arr[i] < pivot){
				left.push(arr[i]);
			}else{
				right.push(arr[i]);
			}
		}
		return quickSort(left).concat.([privot],quickSort(right));
	}
```
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
```
	function merge(left,right){
		
	}
```
## 希尔排序
## 堆排序
## 插入排序