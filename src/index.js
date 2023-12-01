import axios from 'axios';
import Notiflix from 'notiflix';
import { fetchBreeds, fetchCatByBreed } from './cat-api';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] =
  'live_88fbrqBpwUElQGVG1s2hiapaVOk7V2WSVmcJNesFiLWJvymMZMLatGoiJZNnaDbA';

const refs = {
  selectBreed: document.querySelector('.breed-select'),
  load: document.querySelector('.loader'),
  error: document.querySelector('.error'),
  info: document.querySelector('.cat-info'),
};

refs.selectBreed.addEventListener('change', event => {
  fetchCatByBreed(event.target.value).then(value => {
    refs.load.classList.remove('loader');
    let markup = `<img
        width="50%"
        height="50%"
        src="${value[0].url}"
        alt="${value[0].breeds[0].name}"
      />
      <div width="50%">
        <h1>${value[0].breeds[0].name}</h1>
        <p>${value[0].breeds[0].description}</p>
        <p><b>Temperament: </b>${value[0].breeds[0].temperament}</p>
      </div>`;
    refs.info.innerHTML = markup;
    refs.load.classList.add('loader');
  }).catch(error => {
      Notiflix.Notify.failure(
        'Oops! Something went wrong! Try reloading the page!'
      );
    console.log(error.message, error);
    refs.load.classList.add('loader');
    refs.info.classList.add('error');
    });
});

fetchBreeds()
  .then(breeds => {
    let markup = breeds
      .map(breed => {
        return `<option value=${breed.id}>${breed.name}</option>`;
      })
      .join('');
    refs.selectBreed.insertAdjacentHTML('beforeend', markup);
  })
  .catch(error => {
    Notiflix.Notify.failure(
      'Oops! Something went wrong! Try reloading the page!'
    );
    console.log(error.message, error);
    refs.load.classList.add('loader');
    refs.info.classList.add('error');
  });
