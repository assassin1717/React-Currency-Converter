import {API_KEY} from '../api'
import axios from 'axios'


const BASE_URL='http://api.currencylayer.com'

export const CURRENCY_CONVERTER='CURRENCY_CONVERTER'

export function currencyConverter(data){
    const url=`${BASE_URL}/live?access_key=${API_KEY}&currencies=${data.currencies}&source=${data.source}&format=1`
    const request=axios.get(url)

    return{
        type: CURRENCY_CONVERTER,
        payload: request
    }
}