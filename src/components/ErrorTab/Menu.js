import React from 'react';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux';
import * as constants from '../../redux/constants/CriticalParams';
import * as actions from '../../redux/actions/CriticalParams';
const useStyles = makeStyles(theme => ({
    root: {
    },
    paper: {
        marginRight: theme.spacing(2),
    },
}));

const  Menu = (props) => {
    const classes = useStyles();

    const handleClick = name =>{
        props.selectMenuItem(name)
    }
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <MenuList>
                    <MenuItem onClick={()=>handleClick(constants.SELECT_JOURNAL)}>Журнал ошибок</MenuItem>
                    <hr />
                    <MenuItem onClick={()=>handleClick(constants.SELECT_PRESSURE)}>Давление</MenuItem>
                    <MenuItem onClick={()=>handleClick(constants.SELECT_HUMIDITY)}>Влажность</MenuItem>
                    <MenuItem onClick={()=>handleClick(constants.SELECT_TEMP_HOME)}>Температура помещения</MenuItem>
                    <MenuItem onClick={()=>handleClick(constants.SELECT_TEMP_WORK)}>Температура рабочей зоны</MenuItem>
                    <MenuItem onClick={()=>handleClick(constants.SELECT_LEVEL)}>Уровень рН</MenuItem>
                    <MenuItem onClick={()=>handleClick(constants.SELECT_MASS)}>Масса</MenuItem>
                    <MenuItem onClick={()=>handleClick(constants.SELECT_WATER)}>Расход жидкости</MenuItem>
                    <MenuItem onClick={()=>handleClick(constants.SELECT_CO2)}>Уровень СО2</MenuItem>
                </MenuList>
            </Paper>
        </div>
    );
}
const mapStateToProps = state => {
    return {

    };
};
const mapDispatchToProps = dispatch => ({
    selectMenuItem: (nameItem) => dispatch(actions.selectMenuItem(nameItem)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Menu);