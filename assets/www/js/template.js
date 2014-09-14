/**
 * Created by VishwasHK on 6/23/14.
 */
var UI= {};
UI.template = {};
UI.template.Carousel = function(id,urls){
    var template='',i;
    var element = document.getElementById(id);
    element.classList.add('owl-carousel');
    element.classList.add('owl-theme');
    for(i=0;i<urls.length;i=i+1){
        template += '<div class="carouselItem"><img src="'+urls[i]+'"></div>';
    }
    element.innerHTML = template;
};