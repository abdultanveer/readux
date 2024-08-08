const { createStore } = require("redux")
//action
const BUY_CAKE = 'BUY_CAKE'

//action creator
function buyCake(){
    return {
        type:BUY_CAKE,
        info:'buycake action'
    }
}

const initialState = {
    numCakes: 10,
    numIcecreams:20
}

const reducer =(state = initialState,action) => {
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numCakes:state.numCakes -1
        }
        default : return state
    }
}

const store = createStore(reducer)

console.log('initial state is',store.getState())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
console.log('after dispatching state is',store.getState())

