package main.Servlet;

import main.Entity.Student;
import main.Utils.QQEmail;
import main.Utils.SQL;

import javax.mail.MessagingException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.HashMap;
import java.util.List;


@WebServlet("/Servlet")
public class Servlet extends HttpServlet {
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        req.setCharacterEncoding("utf-8");
        resp.setContentType("text/html; charset=UTF-8");
        String ID = req.getParameter("ID");
        String Name = req.getParameter("Name");
        String Sex = req.getParameter("Sex");
        String IntentionFirst = req.getParameter("IntentionFirst");
        String IntentionSecond = req.getParameter("IntentionSecond");
        String College = req.getParameter("College");
        String Major = req.getParameter("Major");
        String PhoneNumber = req.getParameter("PhoneNumber");
        String QQNumber = req.getParameter("QQNumber");
        String Introduction = req.getParameter("Introduction");

        Student student = new Student(ID,
                Name,
                Sex,
                IntentionFirst,
                IntentionSecond,
                College,
                Major,
                PhoneNumber,
                QQNumber,
                Introduction);

        SQL SqlConnect = new SQL("",
                "",
                "",
                "",
                "");

        if (checkIn(student, SqlConnect)) {
            String sqlUpdate =  "update students set" + " name = " + "'" + student.getName() + "'" + "," + " sex = " + "'" + student.getSex() + "'" + "," + " intention_first = " + "'" + student.getIntentionFirst() + "'" + "," + " intention_second = " + "'" + student.getIntentionSecond() + "'" + "," + " college = " + "'" + student.getCollege() + "'" + "," + " major = " + "'" + student.getMajor() + "'" + "," + " phone_number = " + "'" + student.getPhoneNumber() + "'" + "," + " qq_number = " + "'" + student.getQQNumber() + "'" + "," + " introduction = " + "'" + student.getIntroduction() + "'" + " where id = " + "'" + student.getID() + "'";
            SqlConnect.Insert(sqlUpdate);
            sendMessage(student);
        } else {
            String sqlInsert = "insert into students (id,name,sex,intention_first,intention_second,college,major,phone_number,qq_number,introduction)" +
                    "VALUES ('" + student.getID() + "','"
                    + student.getName() + "','"
                    + student.getSex() + "','"
                    + student.getIntentionFirst() + "','"
                    + student.getIntentionSecond() + "','"
                    + student.getCollege() + "','"
                    + student.getMajor() + "','"
                    + student.getPhoneNumber() + "','"
                    + student.getQQNumber() + "','"
                    + student.getIntroduction() + "')";
            SqlConnect.Insert(sqlInsert);
            sendMessage(student);
        }
    }

    public static boolean checkIn(Student Student, SQL SqlConnect) {
        String sql = "select * from students where id = " +  "'" + Student.getID() + "'";
        List<HashMap<String, Object>> list = SqlConnect.Select(sql);
        if (list.isEmpty()) {
            return false;
        } else {
            return true;
        }
    }

    public static void sendMessage(Student student){
        QQEmail qqEmail = new QQEmail(student);
        try {
            qqEmail.sendMessage();
        } catch (GeneralSecurityException e) {
            e.printStackTrace();
        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }
}
