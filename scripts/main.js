window.addEventListener('load', () => {
    let loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;

    let loadTimeSpan = document.createElement('span');
    loadTimeSpan.className = 'load_time_block'
    loadTimeSpan.textContent = 'Время загрузки: ' + (loadTime / 1000).toFixed(2) + ' секунд';

    document.getElementsByClassName("footer")[0].appendChild(loadTimeSpan);

    let currentLocation = window.location.pathname.split('/').at(-1);
    console.log(currentLocation)
    let menuItems = document.querySelectorAll('.header_nav_bar_item');


    menuItems.forEach(function(item) {
        if (item.getAttribute('href') === currentLocation) {
            item.classList.add('active');
        }
    });
});


