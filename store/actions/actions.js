export const TOGGLE_SHOW_ADD_MODAL = 'TOGGLE_SHOW_MODAL';
export const ADD_LIST = 'ADD_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';

export const ADD_LIST_ITEM = 'ADD_LIST_ITEM';



export const toggleShowAddModal = () =>{
    return {
        type: TOGGLE_SHOW_ADD_MODAL
    }
}

//Item requires id, name, color
export const addList = (item) =>{
    return{
        type: ADD_LIST,
        item:item
    }
}

//Item requires id, name, color
export const addListItem = (item, listId) =>{
    return{
        type: ADD_LIST_ITEM,
        listId,
        item:item
    }
}

//Requires index
export const removeList = (index) =>{
    return{
        type: REMOVE_LIST,
        index:index
    }
}