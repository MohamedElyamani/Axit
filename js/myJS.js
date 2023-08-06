$(function(){
'use starct';
var windowHeight = $(window).height(),
    navHeight    = $('.navbar').innerHeight();

$('.head').height(windowHeight - navHeight);

}
);