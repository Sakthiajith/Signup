function do_register()
{

 var email=$("#email").val();
 var mobile=$("#mobile").val();
 var age=$("#age").val();
 var dob=$("#dob").val();
 var user_name=$("#user_name").val();
 var password=$("#password").val();

  $.ajax
  ({
  type:'post',
  url:'php/register.php',
  data:{
   email:email,
   mobile:mobile,
   age:age,
   dob:dob,
   user_name:user_name,
   password:password,
  },
  success:function(res) {
   
    
     var response = JSON.parse(res);
if(response)
{
alert("Registered Successfully!")
window.location.href="login.html";

} 
else{
alert("Something went Wrong")
}           
  }
  });
 return false;
}
