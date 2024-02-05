export const INCREMENTER='INCREMENTER'
export const INCREMENTER_By_AMOUNT='INCREMENTER_By_AMOUNT'
export const DECREMENTER='DECREMENTER'
export const DECREMENTER_By_AMOUNT='DECREMENTER_By_AMOUNT'
export const SAVE_COUNTER='SAVE_COUNTER'
export function incrementer(){
    return {type:INCREMENTER}
}
export function decrementer(){
    return{type:DECREMENTER}
}
export function incrementerByAmount(amount){
    return{
        type:INCREMENTER_By_AMOUNT,
        payload:{amount:amount}
    }
}
export function saveHistoriqueCounter(count,info){
    return{
        type:SAVE_COUNTER,
        payload:{info:info,count:count}
    }
}

export function decrementerByAmount(amount){
    return{
        type:DECREMENTER_By_AMOUNT,
        payload:{amount:amount}

    }
}

export const asyncIncrementerByAmountIfOdd = (amount) => {
    return (dispatch, getState) => {
    const stateBefore = getState()
    console.log(`Conteur avant: ${stateBefore.value}`)
    console.log(`History avant: ${stateBefore.hisoriqueCounter}`);
    if(stateBefore.value%2===1){
    dispatch(incrementerByAmount(amount))
    const stateAfter = getState()
    console.log(`Conteur aprés: ${stateAfter.value}`)
    console.log(`History aprés: ${stateBefore.hisoriqueCounter}`);

}
    
    else{console.log("pas d'incrementation car !!!!!!")}
    }
}

function fetchCount(amount = 1) {
    return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 1200)
    );
    }

    export const asyncIncrementerByAmount = amount => {
    return async (dispatch, getState) => {
    console.log('conteur avant changements:',getState().value)
    const response= await fetchCount(amount)
    dispatch(incrementerByAmount(response.data))
    console.log('conteur est changé aprés (1.2second) :',getState().value)
    }
    }
            

const initialState = {
    value: 0,
    hisoriqueCounter: [],
  };
export default function  reducer(state=initialState,action){
switch(action.type){
case INCREMENTER:
    return {...state,value:state.value+1}
case DECREMENTER:
    return {...state,value:state.value-1}
case INCREMENTER_By_AMOUNT:
    return {...state,value:state.value+action.payload.amount}
case DECREMENTER_By_AMOUNT:
    return {...state,value:state.value-action.payload.amount}
case SAVE_COUNTER:
    return {...state,hisoriqueCounter:[...state.hisoriqueCounter,{info:action.payload.info,count:action.payload.count}]}
            
default:
    return state
}
}