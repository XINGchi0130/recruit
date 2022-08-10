package main.Person;

public class Student {
    private int ID;
    private String Name;
    private String Sex;
    private String IntentionFirst;
    private String IntentionSecond;
    private String College;
    private String Major;
    private String PhoneNumber;
    private String QQNumber;
    private String Introduction;


    public Student(int ID, String name, String sex, String intentionFirst, String intentionSecond, String college, String major, String phoneNumber, String QQNumber, String introduction) {
        this.ID = ID;
        Name = name;
        Sex = sex;
        IntentionFirst = intentionFirst;
        IntentionSecond = intentionSecond;
        College = college;
        Major = major;
        PhoneNumber = phoneNumber;
        this.QQNumber = QQNumber;
        Introduction = introduction;
    }


    public int getID() {
        return ID;
    }

    public String getName() {
        return Name;
    }

    public String getSex() {
        return Sex;
    }

    public String getIntentionFirst() {
        return IntentionFirst;
    }

    public String getIntentionSecond() {
        return IntentionSecond;
    }

    public String getCollege() {
        return College;
    }

    public String getMajor() {
        return Major;
    }

    public String getPhoneNumber() {
        return PhoneNumber;
    }

    public String getQQNumber() {
        return QQNumber;
    }

    public String getIntroduction() {
        return Introduction;
    }
}
