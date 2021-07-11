package com.project.iwidget.Auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService implements AuthMapper {

    @Autowired
	private AuthMapper mapper;
	
	@Override
    public AuthVO getUser(AuthVO authVO) throws Throwable {
		return mapper.getUser(authVO);
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