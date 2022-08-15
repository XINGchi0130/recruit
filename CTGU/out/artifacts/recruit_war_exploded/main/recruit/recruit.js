$(document).ready(function () {
        $('.Button').click(function () {
            window.setTimeout(function () {
                $("#NoticeWarning").alert('close');
                $("#NoticeSuccess").alert('close');
                $("#NoticeDanger").alert('close');
            }, 3500);
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
            // if (ID == "") {
            //     $('body').append("<div id='NoticeWarning' class=\"alert alert-warning\" role=\"alert\" data-dismiss=\"alert\">请输入学号!!!</div>")
            // } else if (Name == "") {
            //     $('body').append("<div id='NoticeWarning' class=\"alert alert-warning\" role=\"alert\" data-dismiss=\"alert\">请输入姓名!!!</div>")
            // } else if (Major == "") {
            //     $('body').append("<div id='NoticeWarning' class=\"alert alert-warning\" role=\"alert\" data-dismiss=\"alert\">请输入专业!!!</div>")
            // } else if (QQNumber == "") {
            //     $('body').append("<div id='NoticeWarning' class=\"alert alert-warning\" role=\"alert\" data-dismiss=\"alert\">请输入QQ号!!!</div>")
            // } else if (Introduction == "") {
            //     $('body').append("<div id='NoticeWarning' class=\"alert alert-warning\" role=\"alert\" data-dismiss=\"alert\">请输入自我介绍!!!</div>")
            // } else {
                $.ajax({
                    url: "Servlet",
                    type: "POST",
                    timeout: 5000,
                    data: {
                        "ID": ID,
                        "Name": Name,
                        "Sex": Sex,
                        "IntentionFirst": IntentionFirst,
                        "IntentionSecond": IntentionSecond,
                        "College": College,
                        "Major": Major,
                        "PhoneNumber": PhoneNumber,
                        "QQNumber": QQNumber,
                        "Introduction": Introduction
                    },
                    dataType: "text",
                    success: function (data) {
                        $('body').append("<div id='NoticeSuccess' class=\"alert alert-success\" role=\"alert\" data-dismiss=\"alert\">上传或更新信息成功！！！</div>")
                    },
                    error: function () {
                        $('body').append("<div id='NoticeDanger' class=\"alert alert-danger\" role=\"alert\" data-dismiss=\"alert\">上传或更新信息失败！！！</div>")
                    },
                })
            // }
        });
    }
);