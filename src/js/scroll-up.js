// ===================================================================================================================================================================================================================================================================================================================================================================================================================================
// ===================================================================================================================================================================================================================================================================================================================================================================================================================================

// scroll up

const scrollUpOffset = 100;
const scrollUp = document.querySelector('.scroll-up');
const scrollUpSvgPath = document.querySelector('.scroll-up__svg-path');
const scrollUpPathLength = scrollUpSvgPath.getTotalLength();

scrollUpSvgPath.style.strokeDasharray = `${scrollUpPathLength} ${scrollUpPathLength}`;
scrollUpSvgPath.style.transition = 'stroke-dashoffset 20ms';

const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

const updateDashoffset = () => {
    const scrollUpHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollUpDashoffset = scrollUpPathLength - (getTop() * scrollUpPathLength / scrollUpHeight);

    scrollUpSvgPath.style.strokeDashoffset = scrollUpDashoffset;
};

window.addEventListener('scroll', () => {
    updateDashoffset();
    if (getTop() > scrollUpOffset) {
        scrollUp.classList.add('__active');
    } else {
        scrollUp.classList.remove('__active');
    }
});

scrollUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});