package com.project.iwidget.Auth;

import java.util.Date;

public class AuthVO {
    
    private String user_id;
    private Date regdate;
    private String user_name;
    private String password;
    private String email;
    private String phone;

    public String getUser_id() {
        return this.user_id;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }

    public Date getRegdate() {
        return this.regdate;
    }

    public void setRegdate(Date regdate) {
        this.regdate = regdate;
    }

    public String getUser_name() {
        return this.user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return this.phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
    
}
