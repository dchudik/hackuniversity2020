import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Typography, TextField, Button}  from '@material-ui/core';
import {setCriticalParam} from '../../redux/actions/CriticalParams';
import {connect} from 'react-redux';

const useStyles = makeStyles(theme => ({
    root: {
        width:'100%',

    },
    papper:{
        padding:'20px'
    },
    field:{
        display: 'flex',
        margin: '10px 0 0 5%',
        alignItems: 'flex-end',
    },
    label:{
        paddingRight: '10px'
    },
    button:{
        marginTop: '15px',
        marginLeft: '20%',
    }
}));

export const SimplePaper = (props) => {
    const classes = useStyles();
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);
    const sendSetData = ()=>{
        console.log("click");
        setCriticalParam(props.selectItem, parseFloat(min),parseFloat(max));
    }
    return (
        <div className={classes.root}>
            <Paper elevation={3} className={classes.papper}>
                <Typography variant={"h4"} component={"span"}>Настройки критических параметров</Typography>
                <form className={classes.root} noValidate autoComplete="off">
                    <span className={classes.field}>
                        <Typography variant={"subtitle1"} className={classes.label} component={"span"}>Минимальное значение: </Typography>
                        <TextField id="standard-basic" label="Minimum" onChange={(event)=>{setMin(event.target.value)}}/>
                    </span>
                    <span className={classes.field}>
                        <Typography variant={"subtitle1"} className={classes.label} component={"span"}>Максимальное значение: </Typography>
                        <TextField id="standard-basic" label="Maximum" onChange={(event)=>{setMax(event.target.value)}}/>
                    </span>
                    <Button className={classes.button} onClick={sendSetData}>Установить</Button>
                </form>
            </Paper>
        </div>
    );
}
const mapStateToProps = state => {
    return {
        selectItem: state.CriticalParams.itemSelected,
    };
};

export default connect(mapStateToProps, )(SimplePaper);