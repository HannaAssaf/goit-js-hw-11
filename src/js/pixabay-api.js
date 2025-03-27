import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import iconError from '../img/bi_x-octagon.svg';
import axios from 'axios';
import { createElement, clearGallery } from './render-functions.js';

const KEY = '49529656-94d7c85de64fba179c64deed7';
const URL = 'https://pixabay.com/api/';

const loader = document.querySelector('.loader');

export function showImg(value) {
  clearGallery();

  loader.classList.remove('hidden');

  const params = {
    key: KEY,
    q: value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 9,
  };

  axios
    .get(URL, { params })
    .then(response => {
      setTimeout(() => {
        loader.classList.add('hidden');
        const hits = response.data.hits;

        if (hits.length === 0) {
          iziToast.show({
            message:
              'Sorry, there are no images matching your search query. Please try again!',
            messageColor: '#FFFFFF',
            position: 'topRight',
            color: '#ef4040',
            iconUrl: iconError,
            maxWidth: '432px',
            timeout: 3000,
          });
        } else {
          createElement(hits);
        }
      }, 1500);
    })
    .catch(error => {
      loader.classList.add('hidden');

      if (error.response) {
        iziToast.show({
          title: 'Server Error',
          titleColor: '#FFFFFF',
          message: error.response.data?.message || 'Server error occurred.',
          messageColor: '#FFFFFF',
          position: 'topRight',
          color: '#ef4040',
          iconUrl: iconError,
          timeout: 3000,
        });
      } else if (error.request) {
        iziToast.show({
          title: 'Network Error',
          titleColor: '#FFFFFF',
          message: 'Network error occurred. Please check your connection.',
          messageColor: '#FFFFFF',
          position: 'topRight',
          color: '#ef4040',
          iconUrl: iconError,
          timeout: 3000,
        });
      } else {
        iziToast.show({
          title: 'Error',
          titleColor: '#FFFFFF',
          message: error.message || 'An unexpected error occurred',
          messageColor: '#FFFFFF',
          position: 'topRight',
          color: '#ef4040',
          iconUrl: iconError,
          timeout: 3000,
        });
      }
    });
}
