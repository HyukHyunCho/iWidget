package com.project.iwidget.Dashboard;

import com.project.iwidget.Response.ResponseObject;
import com.project.iwidget.Response.StatusCode;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/dashboard/")
public class DashboardController {
    
    @Autowired
    private DashboardService dashboardService;

    @PostMapping("list")
    public ResponseObject getDashboardList() {

        ResponseObject ret = new ResponseObject();

        // 유저별로 대시보드 정보를 가져와야함



        return ret;
    }

    @PostMapping("add")
    public ResponseObject add(@RequestBody DashboardVO dashboardVO) {

        ResponseObject ret = new ResponseObject();

        if(dashboardVO.getDashid() == null || dashboardVO.getDashname() == null){
            ret.setReturnCode(StatusCode.ERROR_PARAMETER);
            return ret;
        }

        try {
            // Dashboard 테이블에 없으면 insert 있으면 교체
            dashboardService.insertDashboard(dashboardVO);

        } catch(Throwable e) {
            e.printStackTrace();
        }

        ret.setReturnCode(StatusCode.SUCCESS);
        return ret;
    } 













}
