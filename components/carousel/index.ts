import KCarousel from './carousel.vue';
import KCarouselcard from './carouselcard.vue';
// KCarousel.install =(app:any) => {
//     app.component(KCarousel.name,KCarousel);
// };
// KCarouselcard.install =(app:any) => {
//     app.component(KCarouselcard.name,KCarouselcard);
// };
const component:any =[KCarousel,KCarouselcard]
component.forEach((item:any)=>{ 
    item.install =(app:any)=>{
        app.component(item.name,item);
}; 
})

export default {KCarouselcard,KCarousel};