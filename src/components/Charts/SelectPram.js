import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles(theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function ControlledOpenSelect(props) {
  const classes = useStyles();
  const [age, setAge] = React.useState('PRESSURE');
  const [open, setOpen] = React.useState(false);

  const handleChange = event => {
    setAge(event.target.value);
    props.setData(event);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = (param) => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Параметр</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={"PRESSURE"}>Давление</MenuItem>
          <MenuItem value={"HUMIDITY"}>Влажность </MenuItem>
          <MenuItem value={"TEMPHOME"}>Температура помещения</MenuItem>
          <MenuItem value={"TEMPWORK"}>Температура рабочей зоны</MenuItem>
          <MenuItem value={"LEVELPH"}>Уровень pH</MenuItem>
          <MenuItem value={"MASS"}>Масса</MenuItem>
          <MenuItem value={"WATER"}>Вода</MenuItem>
          <MenuItem value={"LEVELCO2"}>Уровень</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}