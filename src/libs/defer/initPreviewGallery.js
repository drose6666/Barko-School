const galleryItemsInit = document.querySelectorAll('.gallery [class^="item"]')
const galleryPreviewSliderInit = document.querySelector('#gallery-preview-swiper .swiper-wrapper')

for (let item of galleryItemsInit) {
   const dataImgPreview = item.getAttribute('data-img-preview')
   const renderSlide = `
      <div class="swiper-slide preview-img">
         <img loading="lazy" src="${dataImgPreview}" alt="">
      </div>
   `
   galleryPreviewSliderInit.insertAdjacentHTML('beforeend', renderSlide)
}



