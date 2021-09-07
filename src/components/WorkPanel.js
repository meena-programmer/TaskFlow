import React from 'react';
import {FormControl,Avatar,Typography} from '@material-ui/core';
import {useWorkPanelStyle} from './Styles/styles';

export default function WorkPanel(props) {
  
  const {title,children}=props;
  const classes = useWorkPanelStyle();     //stylesheet

  return (
        <div className={classes.paper}>        
            <Avatar className={classes.avatar}/>
            <Typography component="h1" variant="h5">
                    {title}
            </Typography>
            <FormControl className={classes.workpanelform} noValidate>                                                                                    
                    {children}
            </FormControl>
        </div>
  );
}
