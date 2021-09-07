import React,{useState} from 'react';
import {CssBaseline, Container} from '@material-ui/core';
import Authentication from './Authentication'
import ProjectUpload from './ProjectUpload'
import AllocateTask from './AllocateTask'

import userData from './Data/userAuth.json'
import projectData from './Data/projectData.json'
import TaskView from './TaskView';

export default function Home() {

    const [usertype,setUserType]=useState(null);
    const [usertask,setUserTask]=useState([]);

    // --------------------------CHECK LOGIN ------------------------
    const handleLogin=(username,password,userType)=>{        
        setUserType('')
          userData.users.map((user)=>{            
            if(user.username===username && user.password===password && user.userType===userType)
                {
                    setUserType(userType) 
                    // --------------------------GET DEVELOPER TASKS AND STORE IN STATE ARRAY
                    if(userType==='developer')
                    {
                        projectData.projects.map((project,index)=>{                          
                            if(project.task[index].allocateTo===username)
                              setUserTask([...usertask,
                                {
                                  "projectName":project.projectName,
                                  "taskName":project.task[index].taskName,
                                  "taskDescription":project.task[index].taskDescription
                              }])
                        })
                    }                                       
                }            
          })     
      }

    // -------------------------PROJECT UPLOAD BY ADMIN-------------------
      const handleProjectUpload=(projectId,projectName,description)=>{        
           projectData.projects.push(
             {
               "projectId":projectId,
               "projectName":projectName,
               "projectDescription":description,
               "task":[]
             }
           );           
      }
    // -------------------------TASK UPLOAD BY MANAGER-------------------
      const handleTaskUpload=(projectId,taskId,taskName,allocateTo,description)=>{        
           projectData.projects.map((project,index)=>{
            
              if(project.projectId===projectId)
                  projectData.projects[index].task.push({
                      "taskId":taskId,
                      "taskName":taskName,
                      "allocateTo":allocateTo,
                      "taskDescription":description
                  })
           })
           console.log(projectData.projects[0].task);
      }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
            
        {!usertype && <Authentication checkAuthentication={handleLogin}/>    }
        {usertype==="admin" && <ProjectUpload uploadProject={handleProjectUpload}/>   }
        {usertype==="manager" && <AllocateTask uploadTask={handleTaskUpload}/>  }
        {usertype==="developer" && 
          usertask.map((project,index)=>{
            return <TaskView key={index} project={project}/>
          })
        }
      
    </Container>
  );
}