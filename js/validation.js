

function checkval()
{
    const regexExp = /^[6-9]\d{9}$/gi;
    var letters = /^[A-Za-z]+$/;
let fname=document.mainform.fname.value;
    let lname=document.mainform.lname.value;
    let city=document.mainform.city.value;
    let model=document.mainform.model.value;
    let mobile=document.mainform.mno.value;
    let sdate=document.mainform.date1.value;


   let a=true;
    if(fname=="")
    {
        document.querySelector("#name").innerHTML="Enter Your First Name*";
        a=false;
        //return false;
    }
    else
    {
        document.querySelector("#name").innerHTML="";
    }

    if(letters.test(fname)==false)
    {
        document.querySelector("#name").innerHTML="Enter Your First Name in letters only*";
        a=false
    }
    else
    {
        document.querySelector("#name").innerHTML="";
    }




    if(lname=="")
    {
        document.querySelector("#lname").innerHTML="Enter Your Last Name*";
        a=false;
       // return false;
    }
    else
    {
        document.querySelector("#lname").innerHTML="";
    }

    if(letters.test(lname)==false)
    {
        document.querySelector("#lname").innerHTML="Enter Your Last Name in letters only*";
        a=false
    }
    else
    {
        document.querySelector("#lname").innerHTML="";
    }


    if(city=="")
    {
        document.querySelector("#city").innerHTML="Enter Your City Name*";
        a=false;
       // return false;
    }
    else
    {
        document.querySelector("#city").innerHTML="";
    }

    if(letters.test(city)==false)
    {
        document.querySelector("#city").innerHTML="Enter Your City in letters only*";
        a=false
    }
    else
    {
        document.querySelector("#city").innerHTML="";
    }




    
    if(model=="")
    {
        document.querySelector("#model").innerHTML="Enter car Model Name*";
        a=false;
        //return false;
    }
    else
    {
        document.querySelector("#model").innerHTML="";
    }

    



     
    if(mobile=="")
    {
        document.querySelector("#mob").innerHTML="Enter Your mobile no*";
        a=false;
       // return false;
    }
    else
    {
        document.querySelector("#mob").innerHTML="";
    }

    

    if(sdate=="")
    {
        document.querySelector("#date").innerHTML="Please Select the Date";
        a=false;
        //return false;
    }
    else
    {
        document.querySelector("#date").innerHTML="";
    }
    if(regexExp.test(mobile)==false)
    {
        document.querySelector("#mob").innerHTML="Enter correct mobile no* e.g 8035475898";
        a=false;
       // return false;
    }
    else
    {
        document.querySelector("#mob").innerHTML="";
    }
  
    if(a==false)
    {return false;}
    else{return true}
    
}