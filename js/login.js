
function do_login()
{

 var user_name=$("#email").val();
 var pass=$("#password").val();
 if(user_name!="" && pass!="")
 {

  $.ajax
  ({
  type:'post',
  url:'php/login.php',
  data:{
   user_name:user_name,
   password:pass
  },
  success:function(res) {
 
    var response = JSON.parse(res);

    if (typeof response != "undefined" && response != null && response.length != null && response.length > 0) {
      
        localStorage.setItem("G_userData", JSON.stringify(response));

        alert("Login Successfully!");

        window.location.href="profile.html";
    }
  else
  { 
    
    alert("Invalid Account Details!");
  }
  }
  });
 }

 else
 {
  alert("Please Fill All The Details");
 }

 return false;
}