/**
 * Created by 302407 on 6/23/14.
 */
$(document).on('pageinit','#indexPage',function(ev){
    var posterUrls= [];

    var processData = function(data){
        var index = 0,listStmt='';
        for(index=0;index<data.movies.length;index++){
            if(index<4){
                posterUrls.push(data.movies[index].posters.profile);
            }
            listStmt += '<li id="'+data.movies[index].id+'">'+
                '<a class="ui-btn ui-btn-icon-right" target="blank">'+
                '<div class="newsItemTitle">'+data.movies[index].title+'</div>'+
                '<div style="padding-bottom: 10px;padding-top: 10px;"><div style="display: inline-block;float: left;font-family: calibri;font-size: 10px;margin-left: 20px;">Release Date</div>'+
                '<div class="newsItemPubDate" style="display: inline-block;float: right;font-family: calibri;font-size: 10px;margin-right: 20px">'+data.movies[index].release_dates.theater+'</div>'+
                '</div>'+
                '<div class="ui-grid-b">'+
                '<div class="ui-block-a "><img class="imgBg" src="'+data.movies[index].posters.profile+'"></div>'+
                '<div class="ui-block-b">'+'<div class="details">'+data.movies[index].synopsis+'</div>'+
                '</div>'+
                '<div class="ui-block-c">'+
                '<div class="ui-grid-a">'+
                '<div class="ui-block-a">'+data.movies[index].ratings.audience_rating+'</div>'+
                '<div class="ui-block-b">'+data.movies[index].ratings.audience_score+'</div>'+
                '</div>'+
                '<div class="ui-grid-a">'+
                '<div class="ui-block-a">'+data.movies[index].ratings.critics_rating+'</div>'+
                '<div class="ui-block-b">'+data.movies[index].ratings.critics_score+'</div>'+
                '</div>'+
                '</div>'+
                '</div>'+
                '</a>'+
                '</li>';
        }
        $('#newsDiv').html(listStmt);
        APP.util.ReloadCarousel(posterUrls);
        $('#newsDiv li').off('die').on('tap',function(eve){
            alert(eve.currentTarget.id);
        });

    };
    var serviceResponse = function(data){
        console.log(data);
        processData(data);
    };
        APP.service.ServiceCall(APP.service.URL,serviceResponse);



});
$(document).on('pageinit','#detailPage',function(ev){
    $('#btnConfirmLogin').off('die').on('tap',function(){
        alert('Login');
    });
});


$(document).on('pageinit','#contactUsPage',function(ev){

});

APP.util.ReloadCarousel = function(URLS){
    $(function(){
        UI.template.Carousel('dynamicCarousel',URLS);
        var dynamicCarousel =$('#dynamicCarousel');
        dynamicCarousel.owlCarousel({
            itemsTablet: [600,1], //2 items between 600 and 0
            itemsMobile : [479,1] // itemsMobile disabled - inherit from itemsTablet option
        });
        dynamicCarousel.trigger('owl.play',1000);
        var carousel = $('#autoPlayCarousel');
        carousel.owlCarousel({
            itemsTablet: [600,1], //2 items between 600 and 0
            itemsMobile : [479,1] // itemsMobile disabled - inherit from itemsTablet option
        });
        carousel.trigger('owl.play',1500);
    });

};

