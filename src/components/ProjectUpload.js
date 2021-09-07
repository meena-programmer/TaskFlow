import React,{useState} from 'react'
import {Button,TextField} from '@material-ui/core';
import {useWorkPanelStyle} from './Styles/styles';
import WorkPanel from './WorkPanel';

function ProjectUpload(props) {
    
    const classes = useWorkPanelStyle();     //stylesheet

    const {uploadProject}=props;

    const [projectId,setprojectId]=useState('');
    const [projectName,setprojectName]=useState('');
    const [projectDescription,setprojectDescription]=useState('');

    const handleUpload=()=>{
            uploadProject(projectId,projectName,projectDescription);
            setprojectId('')
            setprojectName('')
            setprojectDescription('')
    }

    return (
        <WorkPanel title="Project Upload">
                            <TextField 
                                    name='id' 
                                    variant='outlined' 
                                    label='Project ID' 
                                    margin='dense'
                                    fullWidth
                                    onChange={(e)=>setprojectId(e.target.value)}
                                    /> 

                            <TextField 
                                    name='name' 
                                    variant='outlined' 
                                    label='Project Name'                                     
                                    margin='dense'
                                    fullWidth
                                    onChange={(e)=>setprojectName(e.target.value)}
                                    /> 
                            <TextField 
                                    name='description' 
                                    multiline
                                    maxRows={5}
                                    variant='outlined' 
                                    label='Project Description'                                     
                                    margin='dense'
                                    fullWidth
                                    onChange={(e)=>setprojectDescription(e.target.value)}
                                    /> 

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color='primary'
                                className={classes.uploadsubmit} 
                                onClick={handleUpload}                          
                            >
                                Upload
                            </Button>
        </WorkPanel>
    )
}

export default ProjectUpload
