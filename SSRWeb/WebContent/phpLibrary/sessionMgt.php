<?php

switch ($_GET['action']) {
    case 'add_session' :
        add_session();
        break;

    case 'get_session' :
        get_session();
        break;

    case 'remove_session' :
        remove_session();
        break;
}


function add_session()
{
    session_start();
    $data = json_decode(file_get_contents("php://input"));
    $_SESSION["feedbackTool"] = json_encode($data);
    echo $_SESSION["feedbackTool"];
}

function get_session()
{
    session_start();

    if (isset($_SESSION["feedbackTool"])) {
        if ($_SESSION["feedbackTool"] != null) {
            echo $_SESSION["feedbackTool"];
        } else {
            echo json_encode(array('SESSION' => 'NOSESSION'));
        }
    } else {
        echo json_encode(array('SESSION' => 'NOSESSION'));
    }
}

function remove_session()
{
    session_start();
    $_SESSION['feedbackTool'] = "";
    session_destroy();
    echo "Yes It is";

}


?>
