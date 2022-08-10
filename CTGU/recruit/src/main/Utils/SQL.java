package main.Utils;

import java.sql.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class SQL {
    private final Connection connect;
    private final String username;
    private final String password;
    private final String ipAddress;
    private final String databaseName;
    private final String port;

    public SQL(Connection connect, String username, String password, String ipAddress, String databaseName, String port) {
        this.connect = connect;
        this.username = username;
        this.password = password;
        this.ipAddress = ipAddress;
        this.databaseName = databaseName;
        this.port = port;
    }


    //构造
    public SQL(String username, String password, String ipAddress, String databaseName, String port) {
        this.username = username;
        this.password = password;
        this.ipAddress = ipAddress;
        this.databaseName = databaseName;
        this.port = port;
        this.connect = this.Connect();
    }


    //连接数据库
    private Connection Connect() {
        Connection c = null;
        try {
            Class.forName("org.postgresql.Driver");
            c = DriverManager
                    .getConnection("jdbc:postgresql://" + this.ipAddress + ":" + this.port + "/" + this.databaseName,
                            this.username, this.password);
        } catch (Exception e) {
            e.printStackTrace();
            System.err.println(e.getClass().getName() + ": " + e.getMessage());
            System.exit(0);
        }
        return c;
    }


    //关流操作
    public void close() {
        Connection c = this.connect;
        try {
            c.close();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }


    //查询
    public List<HashMap<String, Object>> Select(String sql) {
        //建立链接
        Connection c = this.connect;
        //创建操作对象
        Statement stmt = null;
        //创建返回最终查询的数据集合
        List<HashMap<String, Object>> list = new ArrayList<>();
        try {
            //初始化操作对象
            stmt = c.createStatement();
            //执行需要执行的sql语句
            ResultSet rs = stmt.executeQuery(sql);
            //开始封装返回的对象
            ResultSetMetaData metaData = rs.getMetaData();//获取全部列名
            int columnCount = metaData.getColumnCount();//列的数量
            //读取数据
            while (rs.next()) {
                HashMap<String, Object> map = new HashMap<>();
                for (int i = 1; i <= columnCount; i++) {
                    //getColumnName获取列名
                    String name = metaData.getColumnName(i);
                    //获取对应的元素
                    Object object = rs.getObject(i);
                    map.put(name, object);
                }
                list.add(map);
            }
            //6、关流操作
            rs.close();
            stmt.close();
        } catch (SQLException throwable) {
            throwable.printStackTrace();
        }
        return list;
    }


    //插入操作
    public Boolean Insert(String sql) {
        //建立链接
        Connection c = this.connect;
        //创建操作对象
        Statement stmt = null;
        int count = 0;
        try {
            //初始化创建对象
            stmt = c.createStatement();
            //添加特殊语句。
            c.setAutoCommit(false);
            //执行添加操作
            count = stmt.executeUpdate(sql);

            //关流
            stmt.close();
            c.commit();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return count != 0;
    }
}
