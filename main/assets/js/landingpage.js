// loader nw
document.addEventListener('DOMContentLoaded', () => {
    const pageLoader = document.querySelector('.page-loader');
    if (pageLoader) {
        // Mengatur opacity ke 0 untuk efek fading
        pageLoader.remove()
        
        // // Mengatur event transitionend untuk menghapus loader setelah fading selesai
        // pageLoader.addEventListener('transitionend', () => {
        //     pageLoader.style.display = 'none';
        // });
    }
});