import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    appBar: {
        // margin: '30px 0',
        width:"100%",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 50px',
        [theme.breakpoints.down('sm')]: {
            // flexDirection: 'column',
        },
    },
}))