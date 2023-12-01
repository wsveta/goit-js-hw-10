import axios from 'axios';
import Notiflix from 'notiflix';


function fetchBreeds() {
  return axios('/breeds')
    .then(value => {
      return value.data;
    })
    .catch(error => {
      Notiflix.Notify.failure(
        'Oops! Something went wrong! Try reloading the page!'
      );
      console.log(error.message, error);
    });
}

function fetchCatByBreed(breedId) {
  return axios(`/images/search?breed_ids=${breedId}`)
    .then(value => {
      return value.data;
    })
    .catch(error => {
      Notiflix.Notify.failure(
        'Oops! Something went wrong! Try reloading the page!'
      );
      console.log(error.message, error);
    });
}

export { fetchBreeds, fetchCatByBreed };
