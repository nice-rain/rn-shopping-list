import * as actions  from "../actions/actions";

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
    listItems: {
        'l1':[{
                id: 'I1',
                name:'toilet paper',
                selected: false
            },
            {
                id:'I2',
                name:'vitamin D',
                selected: true
            }],
            
    },
    addModalIsVisible:false
}


//Helpers
function insertItem(array, action) {
    
    let newArray = array ? array.slice() : [];
    newArray.splice(action.index, 0, action.item)
    return newArray
}

function removeItem(array, action) {
  let newArray = array.slice()
  newArray.splice(action.index, 1)
  return newArray
}

function updateListItems(listItems, action){

  const currentListItem = listItems[action.listId];
  listItems[action.listId] = insertItem(currentListItem, action);

    return {...listItems}
}

function removeListItems(listItems, action){

  const currentListItem = listItems[action.listId];
  listItems[action.listId] = removeItem(currentListItem, action);

    return {...listItems}
}

function toggleSelection(listItems, action)
{

  //List that contains our selection
  const currentListItem = listItems[action.listId];

  //Update our selected key
  currentListItem[action.index].selected = !currentListItem[action.index].selected;

  return {...listItems, currentListItem};
}

//Reducer
const shoppingListReducer = (state = initialState, action) =>{

    switch(action.type){
        case actions.TOGGLE_SHOW_ADD_MODAL:
            return {...state, addModalIsVisible: !state.addModalIsVisible };
        case actions.ADD_LIST:
            return {...state, shoppingLists: insertItem(state.shoppingLists, action)};
        case actions.REMOVE_LIST:
            return {...state, shoppingLists: removeItem(state.shoppingLists, action)};
        case actions.ADD_LIST_ITEM:
            return {...state, listItems: updateListItems(state.listItems, action)};
        case actions.REMOVE_LIST_ITEM:
            return {...state, listItems: removeListItems(state.listItems, action)};
        case actions.TOGGLE_ITEM_SELECT:
            return {...state, listItems: toggleSelection(state.listItems, action)};
        default:
            return state;
    }

}

export default shoppingListReducer;