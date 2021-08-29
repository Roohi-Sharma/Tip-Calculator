function increment()
{   
   let x=document.getElementById('tip').value;
    if(x<30)
    document.getElementById('tip').value = parseInt(document.getElementById("tip").value) + 1;
}
function decrement()
{   
    x=document.getElementById('tip').value;
    if(x>0)
    document.getElementById('tip').value = parseInt(document.getElementById("tip").value) - 1;
}