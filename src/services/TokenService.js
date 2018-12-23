import axios from 'axios';

const baseUrl = '/api/'

export default class TokenService {

    constructor(){

        this.token = null
        this.headers = null
        this.setToken()
        this.setHeaders()
    }

    setToken(){

        try {

            this.token = localStorage.getItem('auth_token')

        } catch (e) {

            // TODO logout action run

        }

    }

    setHeaders(){

        this.headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }

    }

    addTokenToHeader(headers){

        return {...headers,  'Authorization':  'Bearer ' + this.token}
    }

    post(url, data, headers = this.headers){

        headers = this.addTokenToHeader(headers)

        return  axios.post( baseUrl + url, data, {headers : headers})

    }

    put(url, data, headers = this.headers){

        headers = this.addTokenToHeader(headers)

        return  axios.put(baseUrl + url, data, {headers : headers})

    }

    get(url, headers = this.headers){

        headers = this.addTokenToHeader(headers)

        return  axios.get(baseUrl + url, {headers : headers})

    }

    delete(url, headers = this.headers){

        headers = this.addTokenToHeader(headers)

        return  axios.delete(baseUrl + url, {headers : headers})

    }


}