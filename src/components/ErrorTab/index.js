import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Menu from "./Menu";
import {connect} from 'react-redux';
import * as constants from '../../redux/constants/CriticalParams';
import JournalErrors from './JournalErrors';
import ParametrError from "./ParametrError";
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
}));

const ErrorTab = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Menu/>
            {
                props.MenuItem === constants.SELECT_JOURNAL
                ? <JournalErrors />
                : <ParametrError/>
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        MenuItem:state.CriticalParams.itemSelected,
    };
};
const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorTab);