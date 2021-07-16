package com.project.iwidget.Auth;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.project.iwidget.Utils.encryptUtil;

@Service
public class AuthService implements AuthMapper {

    @Autowired
	private AuthMapper mapper;

    @Override
    public AuthVO getLoginInfo(AuthVO authVO) throws Throwable {
        return mapper.getLoginInfo(authVO);
    }

    public boolean login(AuthVO authVO) {

        if(authVO == null) return false;

        AuthVO resultVO = null;

        try {
            String passwordEncrypt = encryptUtil.sha256hash( authVO.getUser_id(),authVO.getPassword() );
            authVO.setPassword(passwordEncrypt);
            resultVO = mapper.getLoginInfo(authVO);

            if(resultVO == null) {
                return false;
            }

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
        mapper.insertUser(authVO);
    }

}