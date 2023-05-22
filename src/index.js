import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import fetchData from './js/fetchData';
import renderMarkup from './js/renderMarkup';

const lightbox = new SimpleLightbox('.gallery a');
const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loadBtn = document.querySelector('.load-more');

form.addEventListener('submit', onFormSubmit);
loadBtn.addEventListener('click', onLoadBtnClick);

function onFormSubmit(evt) {
  evt.preventDefault();
  const formValue = evt.target.elements.searchQuery.value;
  fetchData(formValue)
    .then(data => {
      let markup = renderMarkup(data.data.hits);
      console.log(markup);
      gallery.insertAdjacentHTML('beforeend', markup);
    })
    .catch(error => console.log(error));
}

function onLoadBtnClick(evt) {}
