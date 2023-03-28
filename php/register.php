<?php
    include('db.php');

    //For edit Action 



     $email=$_POST['email'];
     $mobile=$_POST['mobile'];
     $age=$_POST['age'];
     $dob=$_POST['dob'];
      $user_name=$_POST['user_name'];
     $password=$_POST['password'];

     //,user_name = '".$user_name."',age='".$age."',dob='".$dob,mobile_number=$mobile

    $result = $mysqli -> query("INSERT INTO `user_data` (`user_name`, `password`, `dob`, `age`, `mobile_number`, `email_id`) VALUES('".$user_name."','".$password."','".$dob."','".$age."','".$mobile."','".$email."')");
    
    echo json_encode($result);





?>