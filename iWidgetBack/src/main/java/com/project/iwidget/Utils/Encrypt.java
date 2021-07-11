package com.project.iwidget.Utils;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.util.Base64;

public class Encrypt {
  
  public String sha256hash(String password) throws NoSuchAlgorithmException {
    SecureRandom random = SecureRandom.getInstance("SHA1PRNG");
    byte[] bytes = new byte[16];
    random.nextBytes(bytes);
    String salt = new String(Base64.getEncoder().encode(bytes));
    
    MessageDigest md = MessageDigest.getInstance("SHA-256");
    md.update(salt.getBytes());
    md.update(password.getBytes());
    String hex = String.format("%064x", new BigInteger(1, md.digest()));

    return hex;
  }
}
