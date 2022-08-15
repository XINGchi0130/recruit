$(document).ready(function () {
    $('.Button').click(function () {
        let ID = $("#ID").val();
        let Name = $('#Name').val();
        let Sex = $('input:radio:checked').val();
        let IntentionFirst = $(".IntentionFirst").val();
        let IntentionSecond = $(".IntentionSecond").val();
        let College = $(".College").val();
        let Major = $("#Major").val();
        let PhoneNumber = $("#PhoneNumber").val();
        let QQNumber = $("#QQNumber").val();
        let Introduction = $("#Introduction").val();
        // alert("学号:" + ID +
        //       ";姓名:" + Name +
        //       ";性别:" + Sex +
        //       ";第一志愿:" + IntentionFirst +
        //       ";第二志愿:" + IntentionSecond +
        //       ";学院:" + College +
        //       ";专业:" + Major +
        //       ";电话号码:" + PhoneNumber +
        //       ";QQ号:" + QQNumber +
        //       ";自我介绍:" + Introduction)
        if (ID == "" || Name == "" || Major =="" || PhoneNumber == "" || QQNumber == "" || Introduction == "") {
            alert("请输入信息");
        } else {
            $.ajax({
                url: "Servlet",
                type: "POST",
                timeout: 5000,
                data: {
                    "ID":ID,
                    "Name":Name,
                    "Sex":Sex,
                    "IntentionFirst":IntentionFirst,
                    "IntentionSecond":IntentionSecond,
                    "College":College,
                    "Major":Major,
                    "PhoneNumber":PhoneNumber,
                    "QQNumber":QQNumber,
                    "Introduction":Introduction
                },
                dataType: "text",
                success: function (data) {
                    alert("请求成功")
                },
                error: function () {
                    alert("请求失败")
                },
            })
        }
    });
});