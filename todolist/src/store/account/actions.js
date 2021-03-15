import axios from 'axios';

export function load({ commit }){
    axios.get('json/postman.json')
            .then(response => {
                commit("load", response.data);
            })
}