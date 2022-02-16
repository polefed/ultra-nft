// ===================================================================================================================================================================================================================================================================================================================================================================================================================================
// ===================================================================================================================================================================================================================================================================================================================================================================================================================================

// filter 

function app() {
    const buttons = document.querySelectorAll('.js-filter__navigation-button')
    const cards = document.querySelectorAll('.js-filter__content-item')

    function filter(category, items) {
        items.forEach((item) => {
            const isItemFiltered = !item.classList.contains(category)
            const isShowAll = category.toLowerCase() === 'all'
            if (isItemFiltered && !isShowAll) {
                item.classList.add('anime')
            } else {
                item.classList.remove('hide')
                item.classList.remove('anime')
            }
        })
    }

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const currentCategory = button.dataset.filter
            filter(currentCategory, cards)
        })
    })

    cards.forEach((card) => {
        card.ontransitionend = function () {
            if (card.classList.contains('anime')) {
                card.classList.add('hide')
            }
        }
    })
}
app()

const filterButtons = document.querySelectorAll('.js-filter__navigation-button');
const filterItems = document.querySelectorAll('.js-filter__content-item')
filterButtons.forEach(item => {
    item.addEventListener("click", function() {
        let currentFilterItem = document.querySelector(item.dataset.filter);
        if( ! item.classList.contains('__active')) {
            filterButtons.forEach(function(item) {
                item.classList.remove('__active');
            });
            item.classList.add('__active');
        }
    });
});
filterItems.forEach((item) => {
    item.ontransitionend = function () {
        if (item.classList.contains('anime')) {
            item.classList.add('hide')
        }
    }
})