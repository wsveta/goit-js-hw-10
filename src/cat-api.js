import axios from 'axios';
import Notiflix from 'notiflix';

const url = `https://api.thecatapi.com/v1/`;
const api_key =
  'live_88fbrqBpwUElQGVG1s2hiapaVOk7V2WSVmcJNesFiLWJvymMZMLatGoiJZNnaDbA';

function fetchBreeds() {
  return axios('/breeds')
    .then(value => {
      return value.data;
    })
    .catch(() => {
      Notiflix.Notify.failure(
        'Oops! Something went wrong! Try reloading the page!'
      );

    }
      
    );
}

function fetchCatByBreed(breedId) {
  return axios('/images/search?breed_ids=' + breedId)
    .then(value => {
      return value.data;
    })
    .catch(() => {
      Notiflix.Notify.failure(
        'Oops! Something went wrong! Try reloading the page!'
      );
    });
}

export { fetchBreeds, fetchCatByBreed };
