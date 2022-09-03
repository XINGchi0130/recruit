package main.Utils;

import com.sun.mail.util.MailSSLSocketFactory;
import main.Entity.Student;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.security.GeneralSecurityException;
import java.util.Properties;

public class QQEmail extends Thread{
    private Student student;
    private final String smtp = "发送者的smtp授权码";//QQ邮箱中的smtp授权码
    private final String QQ = "发送者的QQ号";//向别人发送QQ邮箱的QQ号
    private final String MyQQ = "自己的QQ";//自己的QQ（QQ邮箱发送的内容，方便联系管理员）

    public QQEmail(Student student) {
        this.student = student;
    }

    public Student getStudent() {
        return student;
    }

    @Override
    public void run() {
        try {
            Properties prop = new Properties();
            prop.setProperty("mail.host", "smtp.qq.com");///设置QQ邮件服务器
            prop.setProperty("mail.transport.protocol", "smtp");///邮件发送协议
            prop.setProperty("mail.smtp.auth", "true");//需要验证用户密码
            //QQ邮箱需要设置SSL加密
            MailSSLSocketFactory sf = new MailSSLSocketFactory();
            sf.setTrustAllHosts(true);
            prop.put("mail.smtp.ssl.enable", "true");
            prop.put("mail.smtp.ssl.socketFactory", sf);

            //使用javaMail发送邮件的5个步骤
            //1.创建定义整个应用程序所需要的环境信息的session对象
            Session session = Session.getDefaultInstance(prop, new Authenticator() {
                @Override
                protected PasswordAuthentication getPasswordAuthentication() {
                    return new PasswordAuthentication( QQ + "@qq.com", smtp);
                }
            });
            //开启session的debug模式，这样可以查看到程序发送Email的运行状态
            session.setDebug(true);
            //2.通过session得到transport对象
            Transport ts = session.getTransport();
            //3.使用邮箱的用户名和授权码连上邮件服务器
            ts.connect("smtp.qq.com", QQ + "@qq.com", smtp);
            //4.创建邮件：写文件
            //注意需要传递session
            MimeMessage message = new MimeMessage(session);
            //指明邮件的发件人
            message.setFrom(new InternetAddress(QQ + "@qq.com"));
            //指明邮件的收件人
            message.setRecipient(Message.RecipientType.TO, new InternetAddress( "" + student.getQQNumber() + "" + "@qq.com"));
            //邮件标题
            message.setSubject("上传或更新信息如下");
            //邮件的文本内容
            message.setContent("学号：" + "'" + student.getID() + "'" + "<br>" + "姓名：" + "'" + student.getName() + "'" + "<br>" + "性别：" + "'" + student.getSex() + "'" + "<br>" + "第一志愿：" + "'" + student.getIntentionFirst() + "'" + "<br>" + "第二志愿：" + "'" + student.getIntentionSecond() + "'" + "<br>" + "学院：" + "'" + student.getCollege() + "'" + "<br>" + "专业：" + "'" + student.getMajor() + "'" + "<br>" + "电话号码：" + "'" + student.getPhoneNumber() + "'" + "<br>" + "QQ号：" + "'" + student.getQQNumber() + "'" + "<br>" + "自我介绍：" + "'" + student.getIntroduction() + "'" + "<br>" + "如果信息有误可重新提交或者联系管理员" + "(qq:" + MyQQ + ")", "text/html;charset=UTF-8");
            //5.发送邮件
            ts.sendMessage(message, message.getAllRecipients());

            //6.关闭连接
            ts.close();
        }catch (Exception e){
            System.out.println(e);
        }
    }
}
