<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
<head>
    <title>秋季招新</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
          integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">
    <link rel="stylesheet" href="recruit.css">
</head>
<body>
<h1>this is recruit</h1>
<div>
    <div>
        <label for="ID" class="form-label">学号</label>
        <input type="number" class="form-control" id="ID" placeholder="请输入学号">
    </div>
    <div>
        <label for="Name" class="form-label">姓名</label>
        <input type="text" class="form-control" id="Name">
    </div>
    <div>
        <label for="Sex" class="form-label">性别</label>
        <input type="text" class="form-control" id="Sex">
    </div>
    <div>
        <select class="IntentionFirst" class="form-select" aria-label="Default select example">
            <option selected>请选择第一志愿</option>
            <option value="启明星开发组">启明星开发组</option>
            <option value="启明星智能组">启明星智能组</option>
            <option value="启明星机械组">启明星机械组</option>
            <option value="ACM集训队">ACM集训队</option>
        </select>
    </div>
    <div>
        <select class="IntentionSecond" class="form-select" aria-label="Default select example">
            <option selected>请选择第二志愿</option>
            <option value="启明星开发组">启明星开发组</option>
            <option value="启明星智能组">启明星智能组</option>
            <option value="启明星机械组">启明星机械组</option>
            <option value="ACM集训队">ACM集训队</option>
        </select>
    </div>
    <div>
        <select class="College" class="form-select" aria-label="Default select example">
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
    <div>
        <label for="Major" class="form-label">专业</label>
        <input type="text" class="form-control" id="Major">
    </div>
    <div>
        <label for="PhoneNumber" class="form-label">电话号码</label>
        <input type="number" class="form-control" id="PhoneNumber">
    </div>
    <div>
        <label for="QQNumber" class="form-label">QQ号</label>
        <input type="number" class="form-control" id="QQNumber">
    </div>
    <div>
        <label for="Introduction" class="form-label">自我介绍</label>
        <input type="text" class="form-control" id="Introduction">
    </div>
    <button type="submit" class="btn btn-primary">提交</button>
</div>
<script src="recruit.js" type="text/javascript"></script>
<script src="assets/jquery.js"></script>
<script src="https://fastly.jsdelivr.net/npm/jquery@1.12.4/dist/jquery.min.js"
        integrity="sha384-nvAa0+6Qg9clwYCGGPpDQLVpLNn0fRaROjHqs13t4Ggj3Ez50XnGQqc/r8MhnRDZ"
        crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap-theme.min.css"
      integrity="sha384-6pzBo3FDv/PJ8r2KRkGHifhEocL+1X2rVCTTkUfGk7/0pbek5mMa1upzvWbrUbOZ" crossorigin="anonymous">
<script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"
        integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd"
        crossorigin="anonymous"></script>
</body>
</html>