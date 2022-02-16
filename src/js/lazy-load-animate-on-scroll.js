// ===================================================================================================================================================================================================================================================================================================================================================================================================================================
// ===================================================================================================================================================================================================================================================================================================================================================================================================================================

// lazy load & Animate on scroll

const lazyImages = document.querySelectorAll('[data-src]');
const showItems = document.querySelectorAll('.show-item');

const showLazyOptions = {
    root: null,
    rootMargin: '200px',
    threshold: .1
}

const showLazyCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let lazyImage = entry.target;
            lazyImage.src = lazyImage.dataset.src;
            showLazyObserver.unobserve(lazyImage);
            entry.target.classList.add('__show')
        }
    })
};

let showLazyObserver = new IntersectionObserver(showLazyCallback, showLazyOptions);

lazyImages.forEach(el => {
    showLazyObserver.observe(el);
});

showItems.forEach(el => {
    showLazyObserver.observe(el);
});