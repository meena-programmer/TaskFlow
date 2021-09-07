import React from 'react'
import {Button, Card, CardActions, CardContent, Typography} from '@material-ui/core'

function TaskView(props) {

    const {project}=props;
    return (
        <div>
            <Card>
                <CardContent>
                    <Typography variant='h5'>{project.projectName}</Typography>
                    <Typography variant='subtitle1' color='primary'>{project.taskName}</Typography>
                    <Typography color='textSecondary'>{project.taskDescription}</Typography>
                </CardContent>
                <CardActions>
                    <Button color='primary'>Start</Button>
                    <Button color='secondary'>End</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default TaskView
