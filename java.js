
sum = function() {
    let number1=Number(prompt(" enter number N1:" ))

    let number2=Number(prompt( " enter number N2:") )

    console.log(number1+number2)
    console.log(number1*number2)
}

largest = function() {
    let number1=Number(prompt("Enter number N1:"))
    let number2=Number(prompt("Enter number N2:"))
    let number3=Number(prompt("Enter number N3:"))
    let number4=Number(prompt("Enter number N4:"))
    let number5=Number(prompt("Enter number N5:"))

    let max=Math.max(number1,number2,number3,number4,number5);

    console.log(max)
}

even = function() {
    let number=Number((prompt("enter number:")))
    if(number %2==0){
        console.log("The number is even.");
    }else{
        console.log("The number is odd.");
    }

}