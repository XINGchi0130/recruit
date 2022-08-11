<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<html>
<head>
    <title>秋季招新</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
          integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">
    <link rel="stylesheet" href="recruit.css">
</head>
<body>
<%--标题--%>
<div>
    <h3 align="center">秋季招新报名表</h3>
    <p align="center"><em>2022启明星工作室&ACM集训队秋季联合招新报名表</em></p>
</div>



<%--表单--%>
<div class="container">

    <%--  学号、姓名  --%>
    <div class="row">
        <div class="col-md-6">
            <label for="ID" class="form-label">学号</label>
            <input type="number" id="ID" placeholder="请输入学号">
        </div>
        <div class="col-md-6">
            <label for="Name" class="form-label">姓名</label>
            <input type="text" id="Name">
        </div>
    </div>

    <%--  性别、第一志愿、第二志愿  --%>
    <div class="row">
        <div class="col-md-4">
            <div class="form-check">
                <input type="radio" name="Sex" id="Male" checked>
                <label class="form-check-label" for="Male">
                    男
                </label>
            </div>
            <div class="form-check">
                <input type="radio" name="Sex" id="Female">
                <label class="form-check-label" for="Female">
                    女
                </label>
            </div>
        </div>
        <div class="col-md-4">
            <select class="IntentionFirst">
                <option selected>请选择第一志愿</option>
                <option value="启明星开发组">启明星开发组</option>
                <option value="启明星智能组">启明星智能组</option>
                <option value="启明星机械组">启明星机械组</option>
                <option value="ACM集训队">ACM集训队</option>
            </select>
        </div>
        <div class="col-md-4">
            <select class="IntentionSecond">
                <option selected>请选择第二志愿</option>
                <option value="启明星开发组">启明星开发组</option>
                <option value="启明星智能组">启明星智能组</option>
                <option value="启明星机械组">启明星机械组</option>
                <option value="ACM集训队">ACM集训队</option>
            </select>
        </div>
    </div>

    <%--  学院、专业  --%>
    <div class="row">
        <div class="col-md-6">
            <select class="College">
                <option selected>请选择学院</option>
                <option value="计算机与信息学院">计算机与信息学院</option>
                <option value="电气与新能源学院">电气与新能源学院</option>
                <option value="理学院">理学院</option>
                <option value="经济与管理学院">经济与管理学院</option>
                <option value="水利与环境学院">水利与环境学院</option>
                <option value="机械与动力学院">机械与动力学院</option>
                <option value="医学院">医学院</option>
                <option value="田家炳教育学院">田家炳教育学院</option>
                <option value="法学与公共管理学院">法学与公共管理学院</option>
                <option value="土木与建筑学院">土木与建筑学院</option>
                <option value="材料与化工学院">材料与化工学院</option>
                <option value="其他学院">其他学院</option>
            </select>
        </div>
        <div class="col-md-6">
            <label for="Major" class="form-label">专业</label>
            <input type="text" id="Major">
        </div>
    </div>

    <%--  电话号码、QQ号  --%>
    <div class="row">
        <div class="col-md-6">
            <label for="PhoneNumber" class="form-label">电话号码</label>
            <input type="number" id="PhoneNumber">
        </div>
        <div class="col-md-6">
            <label for="QQNumber" class="form-label">QQ号</label>
            <input type="number" id="QQNumber">
        </div>
    </div>

    <%--  自我介绍  --%>
    <div>
        <label for="Introduction" class="form-label">自我介绍</label>
        <input type="text" id="Introduction">
    </div>

    <%--  提交  --%>
    <button type="submit" class="btn btn-primary">提交</button>
</div>



<script src="recruit.js" type="text/javascript"></script>

<script src="assets/jquery.js"></script>

<script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"
        integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd"
        crossorigin="anonymous"></script>
</body>
</html>