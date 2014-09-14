/**
 * Created by VishwasHK on 6/23/14.
 */

var APP = {};
APP.globalData = {};
APP.util = {};
APP.service = {};
APP.service.URL = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?apikey=pnbzrq6zznmr2yjujr6mqat9';
APP.pageList = {
    'START_UP':{'url':'index.html','title':'Flipkart'},
    'DETAILS':{'url':'app/details.html','title':'Flipkart'}
};
APP.util.defNavType = 'slide';

APP.util.getURL = function(id){
  return APP.pageList[id].url;
};
APP.util.moveToNextPage = function(id,navType){
    var trans= APP.util.defNavType;
    if(navType){
        trans = navType;
    }
    $.mobile.changePage(APP.util.getURL(id),{transition:trans});
};
APP.service.ServiceCall = function(URL,success){
    $.ajax({
        url: URL,
        type: "GET",
        dataType: "JSON",
        contentType: "text/xml; charset=\"utf-8\"",
        success:success,
        crossDomain:true,
        error:function(error){
            alert('NetWork Error');
        }
    });
};