package com.project.iwidget.Auth;

import java.util.Date;

import com.project.iwidget.Response.ResponseObject;
import com.project.iwidget.Response.StatusCode;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/auth")
public class AuthController {
    
    @Autowired
    private AuthService authService;

    // @RequestParam(value="userid", required=false) String userid, @RequestParam(value="password", required=false) String password
    // @RequestBody AuthVO authVO
    // required=false -> 해당 필드가 쿼리스트링에 존재하지 않아도 예외 발생 X
    @PostMapping("/login")
    public ResponseObject login(@RequestBody AuthVO authVO) {

        ResponseObject ret = new ResponseObject();
        AuthVO resultVO = new AuthVO();
        
        if(authVO.getUser_id() == null || authVO.getPassword() == null) {
            ret.setReturnCode(StatusCode.ERROR_PARAMETER);
            return ret;
        }

        try {
            
            resultVO = authService.login(authVO);
          
            if(resultVO == null) {
                ret.setReturnCode(StatusCode.ERROR_SERVICE);
                return ret;
            }

            if(!resultVO.getUser_id().equals(authVO.getUser_id())) {
                ret.setReturnCode(StatusCode.ERROR_SERVICE);
                return ret;
            }

            if(!resultVO.getPassword().equals(authVO.getPassword())) {
                ret.setReturnCode(StatusCode.ERROR_SERVICE);
                return ret;
            }

        } catch (Throwable e) {
            ret.setReturnCode(StatusCode.ERROR_SERVICE);
            e.printStackTrace();
            return ret;
        } 
        
        ret.setResponseObj(resultVO);
        ret.setReturnCode(StatusCode.SUCCESS);
        return ret;

    } 
    
    @PostMapping("/createAccount")
    public ResponseObject createAccount(@RequestBody AuthVO authVO) {

        ResponseObject ret = new ResponseObject();
        AuthVO resultVO = new AuthVO();
        Date date = new Date();

        // 파라미터 null 체크
        if(authVO.getUser_id() == null || authVO.getUser_name() == null || authVO.getPassword() == null 
            || authVO.getEmail() == null || authVO.getPhone() == null) {
                ret.setReturnCode(StatusCode.ERROR_PARAMETER);
                return ret;
        }

        try {
             // 유저아이디 중복 체크
            resultVO = authService.getUserIdCheck(authVO);
            
            if (resultVO !=  null) {
                ret.setReturnCode(StatusCode.WARNING_EXISTS);
                return ret;
            }

            // 회원가입
            authVO.setRegdate(date);
            authService.insertUser(authVO);
            
        } catch (Throwable e) {
            // TODO Auto-generated catch block
            ret.setReturnCode(StatusCode.ERROR_SERVICE);
            e.printStackTrace();
            return ret;
        }

        ret.setReturnCode(StatusCode.SUCCESS);
        return ret;

    } 

    


}
