package com.project.iwidget.Utils;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;

public class encryptUtil {
  
  public static String sha256hash(String Id, String password) throws NoSuchAlgorithmException {
    byte[] bytes =Id.getBytes();
    String salt = new String(Base64.getEncoder().encode(bytes));
    
    MessageDigest md = MessageDigest.getInstance("SHA-256");
    md.update(salt.getBytes());
    md.update(password.getBytes());
    String hex = String.format("%064x", new BigInteger(1, md.digest()));

    return hex;
  }
}