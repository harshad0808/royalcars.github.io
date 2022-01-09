function addmodel()
{
  let a=true;
  var letters = /^[A-Za-z]+$/;
//    let b = a.innerHTML;
  //  localStorage.setItem("model", b);
  var e = document.getElementById("cars");
  var brand = e.options[e.selectedIndex].text;
  var mname=document.adminform.mname.value;
  var details=document.adminform.details.value;
  var fuel=document.adminform.fuel.value;
  var price=document.adminform.startprice.value;
  var emi=document.adminform.emi.value;
  console.log(mname,details,fuel);
  

  if(letters.test(mname)==false)
  {
    document.querySelector("#mname").innerHTML="Enter Model Name in Letters Only"
    a=false
  }
  else
  {
    document.querySelector("#mname").innerHTML=""
  }


  if(letters.test(details)==false)
  {
    document.querySelector("#details").innerHTML="Enter Details in Letters Only"
    a=false
  }
  else
  {
    document.querySelector("#details").innerHTML=""
  }


  if(letters.test(fuel)==false)
  {
    document.querySelector("#fuel").innerHTML="Enter Fuel Details in Letters Only"
    a=false
  }
  else
  {
    document.querySelector("#fuel").innerHTML=""
  }

  if(isNaN(price)==true || price=="")
  {
    document.querySelector("#price").innerHTML="Enter Price in Numbers Only"
    a=false
  }
  else
  {
    document.querySelector("#price").innerHTML=""
  }

  if(isNaN(emi)==true || emi=="")
  {
    document.querySelector("#emi").innerHTML="Enter Emi in Numbers Only"
    a=false
  }
  else
  {
    document.querySelector("#emi").innerHTML=""
  }

  










  localStorage.setItem("brandname",brand)
  localStorage.setItem("modelname",mname)
  localStorage.setItem("extradetails",details)
  localStorage.setItem("fueltype",fuel)
  localStorage.setItem("price",price)
  localStorage.setItem("emi",emi)

 if(a==false)
 {
  return false
 }
 else
 {
  document.adminform.mname.value="";
  document.adminform.details.value="";
 document.adminform.fuel.value="";
  document.adminform.startprice.value="";
  document.adminform.emi.value="";
   return true
 }
 


}
