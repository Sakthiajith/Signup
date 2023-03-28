<?php
    include('db.php');

    //For edit Action 
    if(isset($_POST['edit']))
{

     $id=$_POST['id'];
     $email=$_POST['email'];
      $mobile=$_POST['mobile'];
     $age=$_POST['age'];
     $dob=$_POST['dob'];
      $user_name=$_POST['user_name'];

     //,user_name = '".$user_name."',age='".$age."',dob='".$dob,mobile_number=$mobile

    $result=$mysqli -> query("UPDATE user_data SET email_id ='".$email."',dob='".$dob."',age='".$age."',mobile_number='".$mobile."',user_name = '".$user_name."' WHERE id = $id");
   
    echo json_encode($result);
}

else{


    $user_name=$_POST['user_name'];
    
    $userData=[];
    if ($result = $mysqli -> query("SELECT * FROM user_data where id='".$user_name."'")) {
        $isData= $result -> num_rows; 

       $userData = $result -> fetch_row();

        if($isData!=0)
        {
          echo json_encode($userData);
        }
        else{
          echo json_encode($userData);
        }
      }
    }
?>