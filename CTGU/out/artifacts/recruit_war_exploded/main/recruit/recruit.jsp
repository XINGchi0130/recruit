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
<div class="title">
    <h3 align="center">秋季招新报名表</h3>
    <p align="center"><em>2022启明星工作室&ACM集训队秋季联合招新报名表</em></p>
</div>



<%--表单--%>
<div class="container">

    <%--  学号、姓名  --%>
    <div class="row row1">
        <div class="col-md-6 Box">
            <div>
                <label for="ID" class="form-label">学号</label>
                <input type="number" id="ID" placeholder="请输入学号">
            </div>
        </div>
        <div class="col-md-6 Box">
            <div>
                <label for="Name" class="form-label">姓名</label>
                <input type="text" id="Name" placeholder="请输入姓名">
            </div>
        </div>
    </div>

    <%--  性别、第一志愿  --%>
    <div class="row row2">
        <div class="col-md-6 Box">
            <div class="Sex">
                <strong>&nbsp;性别</strong>
                <span class="form-check">
                <input type="radio" name="Sex" id="Male" checked>
                <label class="form-check-label" for="Male">
                    &nbsp;&nbsp;男
                </label>
            </span>
                <span class="form-check">
                <input type="radio" name="Sex" id="Female">
                <label class="form-check-label" for="Female">
                    &nbsp;&nbsp;女
                </label>
            </span>
            </div>
        </div>
        <div class="col-md-6 Box">
            <div>
                <strong>第一志愿&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>
                <select class="IntentionFirst">
                    <option value="启明星开发组" selected>启明星开发组</option>
                    <option value="启明星智能组">启明星智能组</option>
                    <option value="启明星机械组">启明星机械组</option>
                    <option value="ACM集训队">ACM集训队</option>
                </select>
                <strong>&nbsp;&nbsp;&nbsp;&nbsp;</strong>
            </div>
        </div>
    </div>

    <%--  第二志愿、学院  --%>
    <div class="row row3">
        <div class="col-md-6 Box">
            <div>
                <strong>第二志愿&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>
                <select class="IntentionSecond">
                    <option value="启明星开发组" selected>启明星开发组</option>
                    <option value="启明星智能组">启明星智能组</option>
                    <option value="启明星机械组">启明星机械组</option>
                    <option value="ACM集训队">ACM集训队</option>
                </select>
                <strong>&nbsp;&nbsp;&nbsp;&nbsp;</strong>
            </div>
        </div>
        <div class="col-md-6 Box">
            <div>
                <strong>学院&nbsp;&nbsp;&nbsp;</strong>
                <select class="College">
                    <option value="计算机与信息学院" selected>计算机与信息学院</option>
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
                <strong>&nbsp;&nbsp;</strong>
            </div>
        </div>
    </div>

    <%--  专业、电话号码  --%>
    <div class="row row4">
        <div class="col-md-6 Box">
            <div>
                <label for="Major" class="form-label">专业</label>
                <input type="text" id="Major" placeholder="请输入专业">
            </div>
        </div>
        <div class="col-md-6 Box">
            <div>
                <label for="PhoneNumber" class="form-label">&nbsp;&nbsp;&nbsp;&emsp;&nbsp;电话号码</label>
                <input type="number" id="PhoneNumber" placeholder="请输入电话号码">
            </div>
        </div>
    </div>

    <%--  QQ号  --%>
    <div class="row row5">
        <div class="col-md-12 Box">
            <div>
                <label for="QQNumber" class="form-label">&nbsp;&nbsp;QQ号</label>
                <input type="number" id="QQNumber" placeholder="请输入QQ号">
            </div>
        </div>
    </div>

    <%--  自我介绍  --%>
    <div class="row6">
        <div class="TextareaBox">
            <label for="Introduction" class="form-label">自我介绍</label>
            <textarea class="form-control" rows="2" id="Introduction" placeholder="请介绍自己"></textarea>
        </div>
    </div>

    <%--  提交  --%>
    <div class="row row7">
        <button type="submit" class="btn btn-primary">提交</button>
    </div>
</div>



<script src="recruit.js" type="text/javascript"></script>

<script src="assets/jquery.js"></script>

<script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"
        integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd"
        crossorigin="anonymous"></script>
</body>
</html>