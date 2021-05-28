
const initialstate = 0;

export const counterReducer = (state = initialstate, action) => {

    switch(action.type) {
        case "INC":
            return state + action.payload;
        case "DEC" :
            return state - action.payload;
            default :
            return state;    
    }

}