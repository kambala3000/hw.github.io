"use strict";var slidr1=slidr.create("slidr-div",{transition:"none"}).add("h",["one","two","three","one"]).start(),slidr2=slidr.create("slidr-div2",{transition:"none"}).add("h",["one","two","three","one"]).start(),slidr3=slidr.create("slidr-div3",{transition:"none"}).add("h",["one","two","three","one"]).start();$(function(){function e(){var e=$(".grid");e.imagesLoaded(function(){e.masonry({itemSelector:".grid-item",percentPosition:!0,columnWidth:".grid-sizer"})})}function n(){$(".ideas__container").find("div").remove();var n=$(".search-form__input").val();$.ajax({url:"https://pixabay.com/api/",data:{key:"3629924-63e5f9f547b9ecefc6648f55f",q:n,callback:pixabayCallback()},method:"GET",dataType:"jsonp",error:function(){console.log("Some error happened")},success:function(n){var t=$("#masonry-tmpl").html(),a=tmpl(t,n);$(".ideas__container").append(a),e()}})}window.pixabayCallback=function(){},n(),$(".js-btn-search").on("click",function(e){e.preventDefault(),n(),$(".search-form__input").val("")})});