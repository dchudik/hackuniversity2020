import * as constants from '../constants/CriticalParams';
import {SetCriticalFetch} from '../axios/CriticalParams';

export const selectMenuItem = (itemName) => ({
    type: constants.SELECT_MENU_ITEM,
    itemName
})

const fromReduxToApi = (name) => {
    let nameApi = "";
    switch(name){
        case constants.SELECT_PRESSURE: nameApi = "PRESSURE";break;
        case constants.SELECT_HUMIDITY: nameApi = "HUMIDITY";break;
        case constants.SELECT_TEMP_HOME: nameApi = "TEMPHOME";break;
        case constants.SELECT_TEMP_WORK: nameApi = "TEMPWORK";break;
        case constants.SELECT_LEVEL: nameApi = "LEVELPH";break;
        case constants.SELECT_MASS: nameApi = "MASS";break;
        case constants.SELECT_WATER: nameApi = "WATER";break;
        case constants.SELECT_CO2: nameApi = "LEVELCO2";break;
        default:
            nameApi ="";
    }
    return nameApi;
}

export const setCriticalParam = (param, min, max) => {
    const name = fromReduxToApi(param);
    console.log(param);
    SetCriticalFetch(name, min, max);
}