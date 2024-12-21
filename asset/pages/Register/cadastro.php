<?php

    require_once "config.php";

    if ($_SERVER["REQUEST_METHOD"]) == "POST") {
        $name = $_POST["name"];
        $email = $_POST["email"];
        $password = $_POST["password"];
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);

        $sql = "INSERT INTO user ( name; email, passrord) VALUES (?, ?, ?)";
        
        $stmt = $conn->prepare($sql);

        $stml->bind_param("sss", $name, $email, $hashed_password);
    }

?>