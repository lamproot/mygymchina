<?php
$mysqli = mysqli_init();
$mysqli->options(MYSQLI_OPT_CONNECT_TIMEOUT, 2);//设置超时时间
$mysqli->real_connect('telegram.ck7uunebefgc.us-east-2.rds.amazonaws.com', 'telegram', 'lamproot', 'telegram');
$data = $_POST;
$mysqli->query("SET NAMES utf8");
$sql = "insert into mygymchina(Box_name,Box_birthday,Box_isvip,Box_mobile,time) values ('{$data['Box_name']}','{$data['Box_birthday']}',{$data['Box_isvip']},'{$data['Box_mobile']}',".time().")";
$mysqli->query($sql);
// $result = $mysqli->query("select * from mygymchina");
// $row=mysqli_fetch_all($result,MYSQLI_ASSOC);
// //echo json_encode($row);exit;
// foreach ($row as $key => $value) {
// 	$mysqli->query("SET NAMES utf8");
//
// 	$mysqli->query("update mygymchina set Box_name = '{$value['Box_name']}' where id = {$value['id']}");
// }
// $rst = $mysqli->query($sql);
echo json_encode(array("code" => "200", "msg" => "添加成功"));
// mysql_connect("localhost","root","root");//连接MySQL
// mysql_select_db("telegram");//选择数据库
// $data = $_POST;
// // Box_name
// // Box_birthday
// // Box_isvip
// // Box_mobile
//
// $sql = "insert into mygymchina(Box_name,Box_birthday,Box_isvip,Box_mobile,time) values ('{$data['Box_name']}','{$data['Box_birthday']}',{$data['Box_isvip']},'{$data['Box_mobile']}',".time().")";
// mysql_query($sql);//借SQL语句插入数据
//
// mysql_close();//关闭MySQL连接
// echo json_encode(array("code" => "200", "msg" => "添加成功"));
?>
