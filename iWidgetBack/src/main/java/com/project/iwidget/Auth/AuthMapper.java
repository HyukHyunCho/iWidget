package com.project.iwidget.Auth;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface AuthMapper {
    
    // 유저 정보
    public AuthVO login(AuthVO authVO) throws Throwable;

    // 유저 아이디 중복 체크
    public AuthVO getUserIdCheck(AuthVO authVO) throws Throwable;

    // 회원가입
    public void insertUser(AuthVO authVO) throws Throwable;


}
