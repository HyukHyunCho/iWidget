package com.project.iwidget.Auth;

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
        
        if(authVO.getUser_id() == null || authVO.getPassword() == null) {
            ret.setReturnCode(StatusCode.ERROR_PARAMETER);
            return ret;
        }
        
        try {
            if(authService.login(authVO) == false) {
                ret.setReturnCode(StatusCode.ERROR_UNAUTHORIZED);
                return ret;
            }
        } catch (Throwable e) {
            e.printStackTrace();
        }

        ret.setReturnCode(StatusCode.SUCCESS);
        return ret;

    }
    
    @PostMapping("/createAccount")
    public ResponseObject createAccount(@RequestBody AuthVO authVO) {

        ResponseObject ret = new ResponseObject();
        AuthVO resultVO = new AuthVO();
        

        // 파라미터 null 체크
        if(authVO.getUser_id() == null || authVO.getUser_name() == null || authVO.getPassword() == null 
            || authVO.getEmail() == null || authVO.getPhone() == null) {
                ret.setReturnCode(StatusCode.ERROR_PARAMETER);
                return ret;
        }

        try {
            resultVO.setUser_id(authVO.getUser_id());
            resultVO = authService.getUser(resultVO);

            if(resultVO != null) {
                ret.setReturnCode(StatusCode.WARNING_EXISTS);
                return ret;
            }

            authService.insertUser(authVO);

        } catch (Throwable e) {
            e.printStackTrace();
        } 

        ret.setReturnCode(StatusCode.SUCCESS);
        return ret;

    } 

}
