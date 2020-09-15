window.addEventListener('load', hidePreloader);

function hidePreloader() {
    setTimeout(function() {
        document.querySelector('.preloader').classList.add('hide-preloader');
    }, 2000);
}