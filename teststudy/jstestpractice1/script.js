var count=0;
function myFunction() {
    count+=1;
    document.getElementById("counter").innerHTML = count;
    if(count %2 ==0){
        document.getElementById("counter").style.color = "red";
    }
    else{
        document.getElementById("counter").style.color = "blue";
    }
    
  }
  function refresh(){
    location.reload();
  }