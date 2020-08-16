import { TOGGLE_SHOW_ADD_MODAL } from "../actions/actions";

const initialState = {
    shoppingLists: [
        {
            id:'l1',
            name:'Walmart',
            color: 'dodgerblue'
        },
        {
            id:'l2',
            name:'Home Depot',
            color: 'orange'
        }
    ],
    listItems: [{
        key: 'L1',
        items:[{
                id: 'I1',
                name:'toilet paper',
                selected: false
            },
            {
                id:'I2',
                name:'vitamin D',
                selected: true
            }]
    }],
    addModalIsVisible:false
}

const shoppingListReducer = (state = initialState, action) =>{


    switch(action.type){
        case TOGGLE_SHOW_ADD_MODAL:
            const existingModalVisible = state.addModalIsVisible;
            return {...state, addModalIsVisible: !state.addModalIsVisible }
            
        default:
            return state;
    }

}

export default shoppingListReducer;