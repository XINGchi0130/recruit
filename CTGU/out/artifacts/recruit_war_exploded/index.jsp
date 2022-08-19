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

    <link rel="stylesheet" href="main/index/main.css?v=1660882008911"/>

    <link rel="shortcut icon" href="#"/>
</head>
<body>


<div class="title">
    <h2>2022启明星工作室&ACM集训队秋季联合招新</h2>
</div>
<div class="Box">
    <div class="container">
        <div class="main">
            <div class="QMX">
                <div>
                    <h4>启明星开发组</h4>
                    <p>
                        主要涉及软件类：程序设计，游戏开发，网页制作，算法竞赛，python爬虫等等各类方向，将课堂学习的内容运用到实战，以独立的小团队的管理制度引导自学，承包学院内外项目、参与程序设计比赛，注重综合素质的培养，在学业优先的前提下学以致用。</p>
                    <br>
                    <h4>启明星智能组</h4>
                    <p>
                        主要涉及硬件类：嵌入式开发，diy机器人，pcb设计及其焊接，linux开发等等各类方向，通过学习，你可以独立创造出一些比较有意思的东西，能够锻炼动手能力和创造能力，并且在学长的带领下，让你快速成长，工作室有大量硬件资源提供同学们免费学习开发。</p>
                </div>
            </div>
            <br>
            <div class="ACM">
                <div>
                    <h4>ACM集训队</h4>
                </div>
                <div>
                    <p>
                        ACM国际大学生程序设计大赛。三峡大学ACM集训队是代表三峡大学参加各类程序设计大赛的竞赛组织。主要用于选拔和训练编程能力和逻辑思维较强的一批同学代表学校外出参加比赛(公费旅游)，主要训练内容为各类算法和思维锻炼。集训队拥有独立的工作室和机房，用于平时训练和比赛。集训队采用一对一或者一对多的培训方式，由学长学姐引导辅助学习，不仅能让你轻松应对学校课程，更能让你在学校举办的各类编程比赛上取得更好的能力同时锻炼自己，积累更多有用的知识。</p>
                </div>
            </div>
        </div>
    </div>
    <div class="recruit">
        <a href="main/recruit/recruit.jsp" class="btn">点我报名</a>
    </div>
    <div class="game">
        <div id="effect-windmill">
            <div class="blade-container">
                <div class="blade-item"></div>
                <div class="blade-item"></div>
                <div class="blade-item"></div>
                <div class="blade-item"></div>
            </div>
            <div class="pole"></div>
        </div>
    </div>
</div>


<script src="assets/jquery.js" type="text/javascript"></script>

<script type="text/javascript" src="main/index/main.js?v=0.9359370620995011"></script>

<script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"
        integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd"
        crossorigin="anonymous"></script>
</body>
</html>