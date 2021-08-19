package com.project.iwidget.Dashboard;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DashboardService implements DashboardMapper {
    
    @Autowired
    private DashboardMapper mapper;

    public void insertDashboard(DashboardVO dashboardVO) throws Throwable {
        mapper.insertDashboard(dashboardVO);
    }

    


}
