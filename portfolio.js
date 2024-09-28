var grid = document.querySelector('.gallery-grid');
var masonry = new Masonry(grid, {
    itemSelector: '.gallery-item',
    columnWidth: '.gallery-item',
    gutter: 15
});

const lightbox = GLightbox({
    selector: '.glightbox',
    touchNavigation: true,
    zoomable: true,
    loop: true,
    closeOnOutsideClick: true,
});