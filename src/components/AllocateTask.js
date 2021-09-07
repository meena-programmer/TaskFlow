import React,{useState} from 'react'
import {Button,TextField} from '@material-ui/core';
import {useWorkPanelStyle} from './Styles/styles';
import WorkPanel from './WorkPanel';

function AllocateTask(props) {
    
    const classes = useWorkPanelStyle();     //stylesheet

    const {uploadTask}=props;

    const [projectId,setprojectId]=useState('');
    const [taskId,settaskId]=useState('');
    const [taskName,settaskName]=useState('');
    const [allocateTo,setallocateTo]=useState('');
    const [taskDescription,settaskDescription]=useState('');

    const handleUpload=()=>{
            uploadTask(projectId,taskId,taskName,allocateTo,taskDescription);
            setprojectId('')
            settaskId('')
            settaskName('')
            setallocateTo('')
            settaskDescription('')
    }

    return (
        <WorkPanel title="Task Allocation">
                            <TextField 
                                    name='project_id' 
                                    variant='outlined' 
                                    label='Project ID' 
                                    margin='dense'
                                    fullWidth
                                    onChange={(e)=>setprojectId(e.target.value)}
                                    /> 

                            <TextField 
                                    name='task_id' 
                                    variant='outlined' 
                                    label='Task ID'                                     
                                    margin='dense'
                                    fullWidth
                                    onChange={(e)=>settaskId(e.target.value)}
                                    /> 
                            <TextField 
                                    name='task_name' 
                                    variant='outlined' 
                                    label='Task'                                     
                                    margin='dense'
                                    fullWidth
                                    onChange={(e)=>settaskName(e.target.value)}
                                    />
                            <TextField 
                                    name='allocate_to' 
                                    variant='outlined' 
                                    label='Allocate To'                                     
                                    margin='dense'
                                    fullWidth
                                    onChange={(e)=>setallocateTo(e.target.value)}
                                    /> 
                            <TextField 
                                    name='description' 
                                    multiline
                                    maxRows={5}
                                    variant='outlined' 
                                    label='Project Description'                                     
                                    margin='dense'
                                    fullWidth
                                    onChange={(e)=>settaskDescription(e.target.value)}
                                    /> 

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color='primary'
                                className={classes.uploadsubmit} 
                                onClick={handleUpload}                          
                            >
                                Allocate
                            </Button>
        </WorkPanel>
    )
}

export default AllocateTask
