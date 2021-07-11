package com.project.iwidget.Controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.iwidget.Config.MongoConfig;
import com.project.iwidget.service.TestService;
import com.project.iwidget.service.TestVO;

@RestController
@RequestMapping("/api")
public class TestController {

	@Autowired
	private TestService testService;
	
	@PostMapping("/time")
	public ResponseEntity<String> time (HttpServletRequest request) {
		
		SimpleDateFormat format1 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		
		Date time = new Date();
		
		String time1 = format1.format(time);
		
		return ResponseEntity.ok("iWidget Time :" + time1);
	}
	
	@PostMapping("/test")
	public String getDevice () {
		
//		SimpleDateFormat format1 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
//		
//		Date time = new Date();
//		
//		String time1 = format1.format(time);
//		
//		return ResponseEntity.ok("iWidget Time :" + time1);
		
		//Stromg<TestVO> listVO = null;
		String deviceid = "";
		
		try {
			deviceid = testService.getDevice();
		} catch (Throwable e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		System.out.println(deviceid);
		
		
		return deviceid;
		
	}
	
}
