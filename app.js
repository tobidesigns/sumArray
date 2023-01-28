//$ pip3 install flask && python3 server.py

function sumNumbers(arr){
    let total = 0;
    console.log(`We will be finding the sum of the array ${arr}`)
    console.log("Please wait.....")
    for (let i = 0; i < arr.length; i++){
        total += arr[i];
} console.log(parseInt(total))
}

sumNumbers([2,3,4,5,6,7]);
sumNumbers([1,2,4,5,6,7]);
sumNumbers([5,4,4,5,6,7]);