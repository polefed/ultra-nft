// ===================================================================================================================================================================================================================================================================================================================================================================================================================================
// ===================================================================================================================================================================================================================================================================================================================================================================================================================================

// infinite scroll

const loadList = document.querySelector('.load-list');
const loadObserver = new IntersectionObserver(
    function (entries) {
        if (entries[0].intersectionRatio <= 0) return;
        loadItems(5);
});
loadObserver.observe(
    document.querySelector('.load-button')
);

function loadItems(num) {
    let i = 0;
    const loadInterval = setInterval(function(){
        const loadNode = document.createElement("li");
        const loadImg = document.createElement("img");
        loadNode.className += "load-list__item";
        loadImg.src = 'https://picsum.photos/200/300/?random';
        loadNode.appendChild(loadImg);
        loadList.appendChild(loadNode);
        i=i+1;
        if(i > num) {
            clearInterval(loadInterval)
        }
    },500)
}