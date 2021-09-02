
//functionality for increment(+) button
function increment(btn)
{   
    //processing for increment button associated with tip field
    if(btn.id=="plus")
    {  
        let x=document.getElementById('tip').value;
        //Assumption tip value cannot exceed a threshold value here the threshold is  = 30
        if(x<30)
        document.getElementById('tip').value = parseInt(document.getElementById("tip").value) + 1;
    }
    //processing for increment button associated with number of people field
    else if(btn.id=="plus_people")
    {  //ParseInt is required to process the value entered by the user as an integer(it is string by default) 
        document.getElementById('people').value = parseInt(document.getElementById("people").value) + 1;   
    }  
    
}
//functionality for decrement(-) button
function decrement(btn)
{   
    if(btn.id=="min")
    {    
       let x=document.getElementById('tip').value;
        if(x>0)
            document.getElementById('tip').value = parseInt(document.getElementById("tip").value) - 1;
    }
    else if(btn.id=="min_people")
    {
       let x=document.getElementById('people').value;
        if(x>0)
            document.getElementById('people').value = parseInt(document.getElementById("people").value) - 1;
    }        
}
//functionality to restrict user to type only positive integers in the tip and number of people field
function validateInput(e)
{         
    //get ascii code of character entered in the input box
    let ASCIICode =  e.keyCode;
    
    //return true for valid characters:
    //digits 0-9 ASCII code : 48 - 57
    //ASCII codes < 31 : backspace,carriage return etc
    if (ASCIICode < 31 || (ASCIICode >= 48 && ASCIICode <= 57))
        return true;
    //return false for any other character which is not valid    
    return false;
    
}
//functionality to calculate bill and tip amount
function calculate()
{
    //Obtain values from all the fields entered by the user
    let amount = document.getElementById('amt').value;
    let tip_percent = document.getElementById('tip').value;
    let people = document.getElementById('people').value;

    //Total tip amount
    let tip_amt = tip_percent*0.01*amount;
   
    try{
    if(people==0)
        throw new Error("Number of People cannot be 0");    
    if(amount<0)
        throw new Error("Bill amount cannot be negative please re-enter");
    if(tip_percent>30)
        throw new Error("Tip amount must not exceed 30%");   

    //Tip amount per person
    tip_amt = tip_amt/people;
    //Bill amount per person
    amount=amount/people + tip_amt;

    }
    catch(e)
    {   //display error as an alert if exception occurs
        alert(e.message);
    }
    //Round to 2 decimal places
    amount=amount.toFixed(2);
    tip_amt = tip_amt.toFixed(2);
    //set bill amount to be displayed
    document.getElementById('bill_amt').innerHTML = amount;
    //Make total bill amount visible
    document.getElementById('display_bill').style.display="block";

    //set tip amount to be displayed
    document.getElementById('tip_amt').innerHTML = tip_amt;
    //Make total tip amount visible
    document.getElementById('display_tip').style.display="block";

}