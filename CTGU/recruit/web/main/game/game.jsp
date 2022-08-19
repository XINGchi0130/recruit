<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>
<html>
<head>
    <title>彩蛋</title>
    <link rel="stylesheet" href="game.css?v=<%= System.currentTimeMillis()%>" />
    <link rel="shortcut icon" href="#"/>
</head>
<body>
<div id="game">
    <!-- 游戏所包含的元素如下 -->
    <div id="bg"></div>
    <div id="dino"></div>
    <div id="block"></div>
    <div id="airblock"></div>
    <div id="yellowblock"></div>
    <div id="blueblock"></div>
    <div id="ground"></div>
    <div id="sorcebg">
        <div id="coin"></div>
        <div id="sorce">分数:0</div>
    </div>
    <div id="skillbg">
        <div id="skillnum">可用技能点数:0</div>
    </div>
    <div  id="instructions" class="one btn"><a href="../game_instructions/game_instructions.jsp">游戏操作说明</a></div>
</div>
<audio id="jumpm" src="../../assets/game/mp3/chicken.mp3" controls="controls" hidden="true"></audio>
<audio id="jntm" src="../../assets/game/mp3/chickenSoBeautiful.mp3" controls="controls" hidden="true"></audio>
<audio id="squatsm" src="../../assets/game/mp3/basketball.mp3" controls="controls" hidden="true"></audio>
<audio id="ccyd" src="../../assets/game/mp3/ccyd.mp3" controls="controls" hidden="true"></audio>
<audio id="jg" src="../../assets/game/mp3/jgy.mp3" controls="controls" hidden="true" ></audio>
<audio id="music" src="../../assets/game/mp3/music.mp3" controls="controls" hidden="true" ></audio>
<audio id="ybmusic" src="../../assets/game/mp3/coinMusic.mp3" controls="controls" hidden="true"></audio>
<audio id="dyc" src="../../assets/game/mp3/frist.mp3" controls="controls" hidden="true"></audio>
<audio id="over" src="../../assets/game/mp3/ngm.mp3" controls="controls"  hidden="true"></audio>

<audio id="relax" controls="controls" loop="loop" hidden="true" class='musiccontrol'>
    <source src="../../assets/game/mp3/maria.mp3" type="audio/mp3" class='musicsource'>
    </source>
</audio>

<%--<script src="../../assets/jquery.js" type="text/javascript"></script>--%>
<script type="text/javascript" src="game.js?v=<%=Math.random()%>"></script>

</body>
</html>