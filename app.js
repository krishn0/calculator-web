function clearDisplay(){
document.getElementById('display').value = "";
}

function appendToDisplay(value){
document.getElementById('display').value += value 
}
function  deleteLast(){

let dis = document.getElementById('display')

dis.value = dis.value.slice(0,-1)

}
function calculateResult(value) {
    let cal  = document.getElementById('display')
try{

    
    cal.value = eval(cal.value)
}
catch(error){

    cal.value= "error"
}

}



