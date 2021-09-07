import React,{useState} from 'react';
import {Button,FormControl, TextField,Avatar,Typography} from '@material-ui/core';
import {Radio,RadioGroup,FormControlLabel,FormHelperText} from '@material-ui/core';
import {useAuthenticationStyle} from './Styles/styles';

export default function SignIn(props) {

  const classes = useAuthenticationStyle();     //stylesheet

  const {checkAuthentication} = props;

  const [username,setUserName]=useState('');
  const [password,setPassword]=useState('');

  const [user,setUser]=useState('admin');

  return (
  <div className={classes.paper}>
        
        <Avatar className={classes.avatar}/>
        <Typography component="h1" variant="h5">
                Welcome
        </Typography>
            <FormControl className={classes.loginform} noValidate>                                                        
                            
                            <TextField 
                                    name='username' 
                                    variant='outlined' 
                                    label='User Name' 
                                    margin='dense'
                                    fullWidth
                                    onChange={(e)=>setUserName(e.target.value)}
                                    /> 

                            <TextField 
                                    name='password' 
                                    variant='outlined' 
                                    label='Password' 
                                    type='password' 
                                    margin='dense'
                                    fullWidth
                                    onChange={(e)=>setPassword(e.target.value)}
                                    /> 

                            <FormHelperText>Signed in as</FormHelperText>

                            <RadioGroup value={user} className={classes.userType}>
                                <FormControlLabel value="admin" 
                                                  control={<Radio />} 
                                                  onChange={(e)=>setUser(e.target.value)}
                                                  label="Admin" />
                                <FormControlLabel value="manager" 
                                                  control={<Radio />}
                                                  onChange={(e)=>setUser(e.target.value)} 
                                                  label="Manager" />
                                <FormControlLabel value="developer" 
                                                  control={<Radio />} 
                                                  onChange={(e)=>setUser(e.target.value)}
                                                  label="Developer" />
                            </RadioGroup>

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color='primary'
                                className={classes.loginsubmit}
                                onClick={()=>checkAuthentication(username,password,user)}                           
                            >
                                Login
                            </Button>

            </FormControl>
  </div>
  );
}
