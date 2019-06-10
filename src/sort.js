var arr = [2,1,4,5,2,1,3]

// 冒泡
function sort1 (arr) {
    for(var i=0; i<arr.length; i++){
        for(var j=0; j<arr.length - i; j++){
            if (arr[j] > arr[j+1]) {
                var a = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = a
            }
        }
    }

    return arr
}

// console.log(sort1(arr))

// 插入
function sort2 (arr) {
    for(var i=1; i<arr.length; i++){
        for(var j=i-1; j>=0 && arr[j] > arr[j+1]; j--) {
            var a = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = a
        }
    }

    return arr
}

function sort22 (arr) {
    for(var i=1; i<arr.length; i++) {
        var j=i
        var tmp = arr[i]
        while(j>0 && arr[j-1] > tmp) {
            arr[j]=arr[j-1]
            j--
        }
        arr[j] = tmp
    }

    return arr
}

// console.log(sort2(arr))
// console.log(sort22(arr))

// 选择
function sort3(arr) {
    for(var i=0; i<arr.length-1; i++){
        var minIndex = i
        for(var j=i+1; j<arr.length; j++) {
            minIndex = arr[j] < arr[minIndex] ? j : minIndex
        }
        if(i !== minIndex) {
            var a = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = a
        }
    }

    return arr
}

// console.log(sort3(arr))


