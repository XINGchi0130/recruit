package main.Servlet;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


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
        System.out.println("ID:" + ID);
    }
}
