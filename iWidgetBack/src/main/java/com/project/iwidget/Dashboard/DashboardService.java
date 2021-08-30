package com.project.iwidget.Dashboard;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DashboardService implements DashboardMapper {
    
    @Autowired
    private DashboardMapper mapper;

    @Override
    public void insertDashboard(DashboardVO dashboardVO) throws Throwable {

        Date date = new Date();       
        dashboardVO.setRegdate(date); 

        mapper.insertDashboard(dashboardVO);
    }

    @Override
    public DashboardVO getDashboardInfo() throws Throwable {
        return mapper.getDashboardInfo();
    }


}
