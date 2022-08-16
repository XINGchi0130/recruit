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

            window.setTimeout(function () {
                $("#NoticeWarning").alert('close');
                $("#NoticeSuccess").alert('close');
                $("#NoticeDanger").alert('close');
            }, 3500);

            function checkID(ID) {
                let len = ID.length;
                let Year = ID.substr(0, 4);
                let SerialNumber = ID.substr(len - 2);
                if (len == 10 || len == 12) {//学号长度
                    if (Year == 2022 || Year == 2021) {//入学时间
                        if (SerialNumber >= 1 && SerialNumber <= 55) {//班级编号
                            return true;
                        } else {
                            return false;
                        }
                    } else {
                        return false;
                    }
                } else {
                    return false;
                }
            }

            function checkPhoneNumber(PhoneNumber) {
                let Target = /^[1][3,4,5,7,8][0-9]{9}$/;
                if (Target.test(PhoneNumber)) {
                    return true;
                } else {
                    return false;
                }
            }

            function checkQQNumber(QQNUmber) {
                let Target = /^[1-9][0-9]{4,9}$/gim;
                if (Target.test(QQNUmber)) {
                    return true;
                } else {
                    return false;
                }
            }

            if (ID == "") {
                $('body').append("<div id='NoticeWarning' class=\"alert alert-warning\" role=\"alert\" data-dismiss=\"alert\">请输入学号！！！</div>")
            } else if (Name == "") {
                $('body').append("<div id='NoticeWarning' class=\"alert alert-warning\" role=\"alert\" data-dismiss=\"alert\">请输入姓名！！！</div>")
            } else if (Major == "") {
                $('body').append("<div id='NoticeWarning' class=\"alert alert-warning\" role=\"alert\" data-dismiss=\"alert\">请输入专业！！!</div>")
            } else if (PhoneNumber == "") {
                $('body').append("<div id='NoticeWarning' class=\"alert alert-warning\" role=\"alert\" data-dismiss=\"alert\">请输入电话号码！！！</div>")
            } else if (QQNumber == "") {
                $('body').append("<div id='NoticeWarning' class=\"alert alert-warning\" role=\"alert\" data-dismiss=\"alert\">请输入QQ号！！！</div>")
            } else if (Introduction == "") {
                $('body').append("<div id='NoticeWarning' class=\"alert alert-warning\" role=\"alert\" data-dismiss=\"alert\">请输入自我介绍！！！</div>")
            } else {
                if (checkID(ID)) {
                    if (checkPhoneNumber(PhoneNumber)) {
                        if (checkQQNumber(QQNumber)) {
                            $.ajax({
                                url: "../../Servlet",
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
                        } else {
                            $('body').append("<div id='NoticeWarning' class=\"alert alert-warning\" role=\"alert\" data-dismiss=\"alert\">QQ号输入非法！！！</div>")
                        }
                    } else {
                        $('body').append("<div id='NoticeWarning' class=\"alert alert-warning\" role=\"alert\" data-dismiss=\"alert\">电话号码输入非法！！！</div>")
                    }
                } else {
                    $('body').append("<div id='NoticeWarning' class=\"alert alert-warning\" role=\"alert\" data-dismiss=\"alert\">学号输入非法！！！</div>")
                }
            }
        });
    }
);