<?php
    include('db.php');

    $user_name=$_POST['user_name'];
    $password=$_POST['password'];
    $userData=[];
    if ($result = $mysqli -> query("SELECT * FROM user_data where email_id='".$user_name."' AND password='".$password."' ")) {
        $isLoggin= $result -> num_rows; 

       $userData = $result -> fetch_row();

        if($isLoggin!=0)
        {
          
          echo json_encode($userData);
        }
        else{
          echo json_encode($userData);
        }
      }

?>