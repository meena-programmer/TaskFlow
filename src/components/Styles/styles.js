import { makeStyles } from '@material-ui/core/styles';

const useAuthenticationStyle=makeStyles(theme=>({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      loginform: {
        width: '100%', 
        marginTop: theme.spacing(1),
      },
      loginsubmit: {
        margin: theme.spacing(3, 0, 2),
      },
      userType:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
}));

const useWorkPanelStyle=makeStyles(theme=>({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      workpanelform: {
        width: '100%', 
        marginTop: theme.spacing(1),
      },
      uploadsubmit: {
        margin: theme.spacing(3, 0, 2),
      },
}));

export {useAuthenticationStyle,useWorkPanelStyle}
