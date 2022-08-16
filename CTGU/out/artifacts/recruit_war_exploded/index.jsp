<%--
  Created by IntelliJ IDEA.
  User: z'x'c
  Date: 2022/8/9
  Time: 17:42
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>
<html>
<head>
    <title>秋季招新</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
          integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">
    <link rel="stylesheet" href="main/index/main.css?v=<%= System.currentTimeMillis()%>" />
    <link rel="shortcut icon" href="#"/>
</head>
<body>
<div class="title">
    <h3>2022启明星工作室&ACM集训队秋季联合招新</h3>
</div>
<div>
    <a href="main/recruit/recruit.jsp">点我报名</a>
</div>
<div>
    <a href="main/game/game.jsp">this is a game</a>
</div>
<script src="assets/jquery.js" type="text/javascript"></script>

<script type="text/javascript" src="main/index/main.js?v=<%=Math.random()%>"></script>

<script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"
        integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd"
        crossorigin="anonymous"></script>
</body>
</html>
