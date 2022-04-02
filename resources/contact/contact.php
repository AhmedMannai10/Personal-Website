<?php
    if(isset($_POST['submit'])){
        $name = $_POST['name'];
        $mailFrom = $_POST['email'];
        $message = $_POST['message'];
        
        $mailTo = "manai@fss.u-sfax.tn";
        $headers =  "From: " . $mailFrom;

        $txt = "You have received an e-mail from ".$name .".\n\n".$message;

        
        mail($mailTo,"e-mail from Website", $txt, $headers);
        header("Location: index.php?mailsend");
    }
?>