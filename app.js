
function getNumber(num){
var total=document.getElementById('result');
total.value +=num;
}

function clearResult(){
    var total=document.getElementById('result');
    total.value ="";
    


}
function getResult(){

    var total=document.getElementById('result');
    total.value=eval(result.value); 
    

}
function Lifo(){


    var total=document.getElementById('result');
    total.value=(result.value).substring(0,(total.value).length-1);
    
    // console.log((total.value).length);


}
