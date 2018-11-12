<?php
$zolPhone=isSet($_GET["zolPhone"])?$_GET["zolPhone"]:'';
$zolChk=isSet($_GET["zolChk"])?$_GET["zolChk"]:'';
$zolChk2=isSet($_GET["zolChk2"])?$_GET["zolChk2"]:'';
$zolPass=isSet($_GET["zolPass"])?$_GET["zolPass"]:'';
$zolPass1=isSet($_GET["zolPass1"])?$_GET["zolPass1"]:'';



echo $zolPhone." ".$zolChk." ".$zolChk2." ".$zolPass." ".$zolPass1
?>