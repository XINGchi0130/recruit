<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<html>
<head>
    <title>彩蛋</title>
    <link rel="stylesheet" href="game.css">
</head>
<body>
    <h1>this is a game</h1>
<script src="game.js" type="text/javascript"></script>
</body>
</html>