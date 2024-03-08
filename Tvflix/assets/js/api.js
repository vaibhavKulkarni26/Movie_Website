'use strict';

const api_key='6a25da355a2dfbb504f1e9de58812111';
const imageBaseURL='https://image.tmdb.org/t/p/';

/**
 * fetch data from server
 */

const fetchDataFromServer = function(url , callback, optimalParam){
    fetch(url)
    .then(response => response.json())
    .then(data =>callbackdata(data,optimalParam));
}

export {imageBaseURL , api_key, fetchDataFromServer};