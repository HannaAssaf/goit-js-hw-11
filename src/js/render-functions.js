import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

function createTextBlock(label, value) {
  const li = document.createElement('li');
  li.classList.add('text-li');

  const h3 = document.createElement('h3');
  h3.classList.add('title');
  h3.textContent = label;

  const p = document.createElement('p');
  p.classList.add('text');
  p.textContent = value;

  li.append(h3, p);
  return li;
}

export function createElement(hits) {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';

  const galleryElements = hits.map(hit => {
    const createLi = document.createElement('li');
    createLi.classList.add('gallery-item');

    const createLink = document.createElement('a');
    createLink.classList.add('gallery-link');
    createLink.href = hit.largeImageURL;
    createLink.addEventListener('click', event => event.preventDefault());

    const createImg = document.createElement('img');
    createImg.classList.add('gallery-image');
    createImg.src = hit.webformatURL;
    createImg.alt = hit.tags;

    const createUlText = document.createElement('ul');
    createUlText.classList.add('text-ul');

    const likesBlock = createTextBlock('Likes', hit.likes);
    const viewsBlock = createTextBlock('Views', hit.views);
    const commentsBlock = createTextBlock('Comments', hit.comments);
    const downloadsBlock = createTextBlock('Downloads', hit.downloads);

    createUlText.append(likesBlock, viewsBlock, commentsBlock, downloadsBlock);

    createLink.append(createImg);
    createLi.append(createLink, createUlText);

    return createLi;
  });

  gallery.append(...galleryElements);

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
  lightbox.refresh();
}

export function clearGallery() {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
}
