document.getElementById("but").addEventListener("click", fib);


function fib(){
    var num = document.getElementById("num").value;
    function fibo(num) {
        if (num == 0) return 0
        else if (num == 1) return 1
        else return (fibo(num - 1) + fibo(num - 2))
     
}
document.getElementById("ans").innerHTML = fibo(num)
}

