

const data = [10, 20, 30, 50, 60, 80, 110, 130, 140, 170]

const binarySearch = (arr,start,last,x)=>{
    if(start>=last){
        return -1
    }else{
        let mid = start + Math.floor((last-start)/2);
        
        if (arr[mid]==x){

            return mid
        }else if(arr[mid]>x){
            return binarySearch(arr,start,mid-1,x)
        }else{
            return binarySearch(arr,mid+1,last,x)
        }
    }
}


// let arr = [ 2, 3, 4, 10, 40 ];
// let x = 10;
// let n = arr.length

// const result_index = binarySearch(arr,0,n-1,x)
// console.log(result_index)

const bubbleSort = (arr)=>{
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length-1-i; j++){
            if(arr[j+1]<arr[j]){
                arr[j+1] = arr[j]+arr[j+1]
                arr[j] = arr[j+1]-arr[j]
                arr[j+1] = arr[j+1]-arr[j]
            }
        }
    }
    console.log(arr)

}
// const arr = [64, 34, 25, 12, 22, 11, 90]
const arr = [64, 34, 25, 12, 22, 11, 90]
bubbleSort(arr)