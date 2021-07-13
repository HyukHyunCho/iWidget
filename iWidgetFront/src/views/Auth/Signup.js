import React, { useState, useRef } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from 'react-router-dom';

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

// Form 양식
import { useForm, Controller } from "react-hook-form";

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
   

    


    const { register, watch, errors, handleSubmit, control } = useForm();
    const password = useRef();
    password.current = watch("passwd");
   
   

    const onSubmit = (data) => {
      console.log(password.current);
      //console.log('data', data);
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





                {/* <TextField
                  className={classes.root}
                  type="password"
                  //name="password"
                  label="Password"
                  variant="outlined"
                  {...register('password', { required: true, minLength: 7 })}
                />   */}
               




                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                      name="userid"
                      control={control}
                      defaultValue=""
                      render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <TextField
                          className={classes.root} 
                          label="User ID"
                          variant="outlined"
                          value={value}
                          onChange={onChange}
                          error={!!error}
                          helperText={error ? error.message : null}
                         
                        />
                      )}
                      rules={{ 
                        required: 'asasfd.',
                        validate: (data) => {
                          console.log(data);
                          
                        }
                      }}
                      />              

                      <Controller
                        name="passwd"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                          <TextField
                            className={classes.root} 
                            type="password"
                            label="Password"
                            variant="outlined"
                            value={value}
                            onChange={onChange}
                            error={!!error}
                            helperText={error ? error.message : null}
                          />
                        )}
                        rules={{ required: '패스워드를 입력 해주세요.' }}
                      />

                      <Controller
                        name="passwdConfirm"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                          <TextField
                            className={classes.root} 
                            type="password"
                            label="Password Confirm"
                            variant="outlined"
                            value={value}
                            onChange={onChange}
                            error={!!error}
                            helperText={error ? error.message : null}
                          />
                        )}
                        rules={{ 
                          required: '패스워드 확인을 입력 해주세요.',
                          validate: (data) => {
                            //console.log(password);
                            //console.log(useform.getValues('passwd'));
                            //passwdConfirm.current === password.current ? error === "aaa" : null
                          }
                        }}
                      />        




                    <input type="submit" />
                  </form>  


                   

                 
                    {/* <input
                      
                    >
                    </input> */}



                         


                </GridItem>
              </GridContainer>
            </CardBody>
          
              
            
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