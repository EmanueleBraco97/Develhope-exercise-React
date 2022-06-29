const defaultState = [];

const ADD = 'TODO@ADD'
const REMOVE = 'TODO@REMOVE'
const EDIT = 'TODO@EDIT'

export function add(todo){
    return{
        type: ADD,
        paylod: todo
    }
}

export function remove(id){
    return{
        type: REMOVE,
        paylod: id
    }
}

export function edit(id, data){
    return{
        type: EDIT,
        paylod: {id, data}
    }
}


export function todoReducer(state = defaultState, action){
    switch(action.type){
        case ADD: {
            return [...state,  action.paylod]
        }

        case REMOVE: {
            return state.filter(todo => todo.id !== action.paylod)
        }

        case EDIT: {
            return state.map(todo => {
                if(todo.id === action.paylod.id){
                    return {...todo, ...action.paylod.data}
                }
                return todo
            })
        }
        default: {
            return state
        }
    }
}