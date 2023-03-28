function get_profileInfo()
{

var Dataget = JSON.parse(localStorage.getItem("G_userData"));

if(!Dataget){

window.location.href="login.html";


}
 var user_name=$("#email").val();
  $.ajax
  ({
  type:'post',
  url:'php/profile.php',
  data:{
   user_name:Dataget[0],
  },
  success:function(res) {

    var response = JSON.parse(res);
    console.log(res[0])
    document.getElementById('user_name').value = response[1];
    document.getElementById('dob').value = response[3];
    document.getElementById('age').value = response[4];
    document.getElementById('mobile').value = response[5];
    document.getElementById('email').value = response[6];
    document.getElementById('id').value = response[0];

  }
  });
 return false;
}




function do_update()
{

 var email=$("#email").val();
 var mobile=$("#mobile").val();
 var age=$("#age").val();
 var dob=$("#dob").val();
 var user_name=$("#user_name").val();
 var id=$("#id").val();

  $.ajax
  ({
  type:'post',
  url:'php/profile.php',
  data:{
   email:email,
   mobile:mobile,
   age:age,
   dob:dob,
   user_name:user_name,
   id:id,
   edit:"edit"
  },
  success:function(res) {
   
    
     var response = JSON.parse(res);
if(response)
{
alert("Profile Updated!")
} 
else{
alert("Something went Wrong")
}           


  }
  });
 return false;
}




function do_logout()
{   
    localStorage.removeItem("G_userData");
    window.location.href="login.html";
}