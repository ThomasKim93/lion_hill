$( function() {
    $( ".accordion" ).accordion({
       collapsible: true,
       heightStyle: "content"
    });
});



var container = document.querySelectorAll('.map')[0];
var options = {
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 3
};

var map = new kakao.maps.Map(container, options);

const ElNav = document.querySelector('nav.navigation'),
      ElA = ElNav.querySelector('li>a'); 
