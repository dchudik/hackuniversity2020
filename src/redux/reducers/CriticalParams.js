import * as constants from '../constants/CriticalParams';

const initialState = {
    itemSelected:constants.SELECT_JOURNAL
}

const CriticalParamsReducer = (state=initialState, action) => {
    switch(action.type){
        case constants.SELECT_MENU_ITEM:
            return {
                itemSelected: action.itemName
            }
        default:
            return state;
    }
}

export default  CriticalParamsReducer;