package com.project.iwidget.Dashboard;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface DashboardMapper {
    
    public void insertDashboard(DashboardVO dashboardVO) throws Throwable;

    public DashboardVO getDashboardInfo() throws Throwable;


}
