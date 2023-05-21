import fetchData from './fetchData';
import renderMarkup from './renderMarkup';

const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loadBtn = document.querySelector('.load-more');

form.addEventListener('submit', onFormSubmit);
loadBtn.addEventListener('click', onLoadBtnClick);

function onFormSubmit(evt) {
  evt.preventDefault();
  const formValue = evt.target.elements.searchQuery.value;
  fetchData(formValue)
    .then(data => console.log(data))
    .catch(error => console.log(error));
}

function onLoadBtnClick(evt) {}
