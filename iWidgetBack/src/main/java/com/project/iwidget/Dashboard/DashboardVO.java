package com.project.iwidget.Dashboard;

import java.util.Date;

public class DashboardVO {
    
    private String user_id;
    private String dashid;
    private String dashname;
    private Date regdate;
    private String web;
    private String mobile;
    private String tablet;

    public String getUser_id() {
        return this.user_id;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }

    public String getDashid() {
        return this.dashid;
    }

    public void setDashid(String dashid) {
        this.dashid = dashid;
    }

    public String getDashname() {
        return this.dashname;
    }

    public void setDashname(String dashname) {
        this.dashname = dashname;
    }

    public Date getRegdate() {
        return this.regdate;
    }

    public void setRegdate(Date regdate) {
        this.regdate = regdate;
    }

    public String getWeb() {
        return this.web;
    }

    public void setWeb(String web) {
        this.web = web;
    }

    public String getMobile() {
        return this.mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getTablet() {
        return this.tablet;
    }

    public void setTablet(String tablet) {
        this.tablet = tablet;
    }

    

}
