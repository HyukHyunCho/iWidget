import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from 'react-router-dom';
import InputLabel from "@material-ui/core/InputLabel";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
// import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

// Material
import TextField from '@material-ui/core/TextField';

// Axios
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "95%",
    margin: theme.spacing(1),
    '& label.Mui-focused': {
        color: '#C56ACE',
    },
    '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
            borderColor: '#C56ACE',
        },
    },
  },
  customText: {
    color: "#C56ACE",
    fontWeight: "bold",
    cursor:"pointer",
    "&:hover": {
      color: "#FF6CAB"
    }
  }
}));

export default function Signup() {
    const classes = useStyles();
    let history = useHistory();
    
    const [errInfo, setErrInfo] = useState({
      useridErr: false,
      passwdErr: false,
      passwdConfirmErr: false,
      userNameErr: false,
      emailErr: false,
      phoneErr: false
    });

    const [userInfo, setUserInfo] = useState({
      userid: '',
      passwd: '',
      passwdConfirm: '',
      userName: '',
      email: '',
      phone: ''
    });

    const handleChange = (e) => {
      const { value, name } = e.target;
   
      setUserInfo({
        ...userInfo,
        [name]: value,
      });
    }

    function isEmpty(value) {	
      if (value == null || value.trim() == "") {
        return true;
      }	
    }


    // useridErr: false,
    // passwdErr: false,
    // passwdConfirmErr: false,
    // userNameErr: false,
    // emailErr: false,
    // phoneErr: false


    const validationCheck = () => {

      if(isEmpty(userInfo.userid)) {
        setErrInfo({
          useridErr: true
        });
        return alert("유저 아이디를 입력하세요.");
      }

      if(isEmpty(userInfo.passwd)) {
        setErrInfo({
          passwdErr: true
        });
        return alert("패스워드를 입력하세요.");
      }

      if(isEmpty(userInfo.passwdConfirm)) {
        setErrInfo({
          passwdConfirmErr: true
        });
        return alert("패스워드 확인을 입력하세요.");
      }

      if(isEmpty(userInfo.userName)) {
        setErrInfo({
          userNameErr: true
        });
        return alert("유저 이름을 입력하세요.");
      }

      if(isEmpty(userInfo.email)) {
        setErrInfo({
          emailErr: true
        });
        return alert("이메일을 입력하세요.");
      }
      if(isEmpty(userInfo.phone)) {
        setErrInfo({
          phoneErr: true
        });
        return alert("휴대폰번호를 입력하세요.");
      }
     
      if(userInfo.passwd !== userInfo.passwdConfirm) {
        //setPasswdErr(true);
        return alert('비밀번호가 일치 하지 않습니다.');
      }


      //setPasswdErr(false);

      //createAccount();

    }

    const createAccount = () => {
      
      axios.post('http://localhost:8080/auth/createAccount', 
        { 
          user_id: userInfo.userid, 
          user_name: userInfo.userName,
          password: userInfo.passwd,
          email: userInfo.email,
          phone: userInfo.phone
        }
      )
      .then((result) => { 

        console.log(result);
        
        result.data.returnCode === "200" ? alert("회원가입이 완료 되었습니다.") : alert("중복된 아이디 입니다.");
        

      })
      .catch(error => {
        alert(error);
        throw new Error(error);
      });
    }

    return (
      <GridContainer>
        <GridItem xs={10} sm={4} md={3} style={{margin: "50px auto"}}>
          <Card>
            <CardHeader style={{margin: "20px auto"}}>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12} >
                  <TextField
                    className={classes.root}
                    name="userid"
                    label="User ID"
                    variant="outlined"
                    onChange={handleChange}
                    error = { errInfo.useridErr === true ? true : false }
                    helperText= { errInfo.useridErr === true ? "Userid" : null }

                    

                  />
                  <TextField
                    className={classes.root}
                    name="passwd"
                    label="Password"
                    variant="outlined"
                    error = { errInfo.passwdErr === true ? true : false }
                    helperText= { errInfo.passwdErr === true ? "Please check your password" : null }
                    //error = { passwdErr === true ? true : false }
                    //helperText= { passwdErr === true ? "Please check your password" : null }
                    onChange={handleChange}
                  />
                  <TextField
                    className={classes.root}
                    name="passwdConfirm"
                    label="Password Confirm"
                    variant="outlined"
                    error = { errInfo.passwdConfirmErr === true ? true : false }
                    helperText= { errInfo.passwdConfirmErr === true ? "Please check your password" : null }
                    //error = { passwdErr === true ? true : false }
                    //helperText= { passwdErr === true ? "Please check your password" : null }
                    onChange={handleChange}
                  />
                  <TextField
                    className={classes.root}
                    name="userName"
                    label="User Name"
                    variant="outlined"
                    onChange={handleChange}
                  />
                  <TextField
                    className={classes.root}
                    name="email"
                    label="Email"
                    variant="outlined"
                    onChange={handleChange}
                  />
                  <TextField
                    className={classes.root}
                    name="phone"
                    label="Phone Number"
                    variant="outlined"
                    onChange={handleChange}
                  />                
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button 
                color="custom" 
                round
                style={{width: "93%", margin: "0 auto"}}
                onClick= { () => validationCheck() }
              >
                Create Account
              </Button>
            </CardFooter>
            <CardFooter>
                <p style={{margin: "0 auto"}}>Already have an account? </p>
            </CardFooter>
            <CardFooter style={{marginTop: "-20px"}}>
                <p 
                    className={classes.customText} 
                    style={{margin: "0 auto"}}
                    onClick={ () => history.goBack() }
                >
                    Sign In
                </p> 
            </CardFooter>
            
          </Card>
        </GridItem>
      </GridContainer>
    );
}