<?php
	//error_reporting(0);

	$length = 10;
	$feedbackImg = substr(str_shuffle("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"),0, $length);
	

	$dirname = "C:/xampp/htdocs/Feedback/FeedBackTool-Web/uploads/".$feedbackImg."/";
	mkdir($dirname, 0777);
	
	$error;
	$message;

		$validextensions = array("jpeg", "jpg", "png", "mp3");
		$ext = explode('.', basename($_FILES['file']['name']));
		$file_extension = end($ext);
		$file_name = $_FILES['file']['name'];
		$target_path = $dirname.$file_name;
		$path = $feedbackImg."/".$file_name;

		if ($_FILES["file"]["size"] < 90000000) {
			//$img64 = file_get_contents($_FILES['file']['tmp_name'][$i]);
			//$imgMain = base64_encode($img64);
			//array_push($img64Array, $target_path);
			if(file_exists($target_path)){
				echo "File already exists";

			}
			elseif(move_uploaded_file($_FILES['file']['tmp_name'], $target_path)){
				//make_thumb($target_path,$dirname."_thumb100.".$file_extension,100);
				//$img64 = file_get_contents("_thumb100.".$file_extension);
				//$imgMain = base64_encode($img64);
				//array_push($img64Array,$dirname."_thumb100.".$file_extension);
				$message =  'File successfully uploaded';
				$error =  0;
				
			} else {     
				$message = $file_name.' not uploaded';
				$error =  1;
				rmdir($dirname);
			}
		} 
		else {     
			$message = $file_name.' Invalid file Size or Type';
			$error =  2;
			rmdir($dirname);
		}
	//print_r($img64Array);

	$img64Array =  array(
		'error' => $error,
'message' => $message,
'folderName' => $feedbackImg,
		'path' => $path,
);
echo json_encode($img64Array);
?>