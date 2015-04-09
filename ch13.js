
function dispArr(arr) {
for (var i = 0; i < arr.length; ++i) {
  putstr(arr[i] + " ");
    if (i % 10 == 9) {
      putstr("\n");
    }  
}
    if (i % 10 != 0) {
     putstr("\n");
    }      
} 

function insertionsort(arr) {
  var temp, inner;
    for (var outer = 1; outer <= arr.length-1; ++outer) {
      temp = arr[outer];
      inner = outer;
        while (inner > 0 && (arr[inner-1] >= temp)) {
         arr[inner] = arr[inner-1];
        --inner;
        }
       arr[inner] = temp;
    }



function seqSearch(arr, data) {
    for (var i = 0; i < arr.length; ++i) {
       if (arr[i] == data) {
        return true;
       }   
    }  
    return false;
}


var nums = [];
for (var i = 0; i < 100; ++i) {
  nums[i] = Math.floor(Math.random() * 101);
}


dispArr(nums);
putstr("Enter a number to search for: ");
var num = parseInt(readline());
print();
if (seqSearch(nums, num)) {
    print(num + " is in the array.");
}
else {
print(num + " is not in the array.");
}
print();
dispArr(nums);

function seqSearch(arr, data) {
for (var i = 0; i < arr.length; ++i) {
   if (arr[i] == data) {
   return i;
   }   
}
return -1;
}
