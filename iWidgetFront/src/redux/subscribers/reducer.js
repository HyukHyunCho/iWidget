import { DASHBOARD_ADD, DASHBOARD_REMOVE } from './types'

// // Data
import Items from "api/Items.js";

const reducer = (state = Items.dashboard, action) => {
    
    switch(action.type) {
        case DASHBOARD_ADD:
            let dashCopy = [...state, action.dashboardAdd];
            return dashCopy
        default: return state
    }
}

export default reducer

    // if(action.type === "dashboardAdd") {
    //   let dashCopy = [...state, action.dashboardAdd];
    //   return dashCopy
    // }
    
    // return state;


