import {CURRENCY_CONVERTER} from '../actions/index'
const INITIAL_STATE=[]

export default function convert(state=INITIAL_STATE, action){
    if(action.type===CURRENCY_CONVERTER){
        const result=action.payload.data

        return result
    }
    else{
        return state
    }
}