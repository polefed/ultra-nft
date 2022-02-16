// ===================================================================================================================================================================================================================================================================================================================================================================================================================================
// ===================================================================================================================================================================================================================================================================================================================================================================================================================================

// tabs 

const tabsButtons = document.querySelectorAll(".js-tabs__navigation-button");
const tabsItems = document.querySelectorAll(".js-tabs__content-item");

tabsButtons.forEach(item => {
    item.addEventListener("click", function () {
        const currentTabItem = document.querySelector(item.dataset.tab);
        if (!item.classList.contains('__active')) {
            tabsButtons.forEach(function (item) {
                item.classList.remove('__active');
            });
            tabsItems.forEach(function (item) {
                item.classList.remove('__active');
            });
            item.classList.add('__active');
            currentTabItem.classList.add('__active');
        }
    });
});
document.querySelector('.js-tabs__navigation-button').click();