package com.project.iwidget.Auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

import com.project.iwidget.Utils.encryptUtil;

@Service
public class AuthService implements AuthMapper {

    @Autowired
	private AuthMapper mapper;

    @Override
    public AuthVO getUser(AuthVO authVO) throws Throwable {
        return mapper.getUser(authVO);
    }

    public boolean login(AuthVO authVO) {

        if(authVO == null) return false;

        AuthVO resultVO = null;

        try {
            String passwordEncrypt = encryptUtil.sha256hash( authVO.getUser_id(),authVO.getPassword() );
            authVO.setPassword(passwordEncrypt);
            resultVO = mapper.getUser(authVO);

            if(resultVO == null) return false;
         
        } catch (Throwable e) {
            e.printStackTrace();
            return false;
        }

		return true;
    }

    @Override
    public AuthVO getUserIdCheck(AuthVO authVO) throws Throwable {
        return mapper.getUserIdCheck(authVO);
    }

    @Override
    public void insertUser(AuthVO authVO) throws Throwable {

        Date date = new Date();

        // 비밀번호 암호화
        String passwordEncrypt = encryptUtil.sha256hash( authVO.getUser_id(),authVO.getPassword() );

        // 회원가입
        authVO.setRegdate(date);
        authVO.setPassword(passwordEncrypt);
        
        mapper.insertUser(authVO);
    }

}