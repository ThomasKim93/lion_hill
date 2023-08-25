//sec2 - 아코디언 ----- ----- ----- ----- -----
$( function() {
    $( ".accordion" ).accordion({
       collapsible: true,
       heightStyle: "content"
    });
});

//sec2 - 페이지네이션 ----- ----- ----- ----- -----

//sec3 - map ----- ----- ----- ----- -----
// window.kakao.maps.load(() => {
//     const container = document.querySelectorAll('.map')[0];
//     const options = {
//         center: new kakao.maps.LatLng(33.281601, 126.319233),
//         level: 3
//     };
//     const map = new kakao.maps.Map(container, options); 

//     var markerPosition  = new kakao.maps.LatLng(33.281601, 126.319233); 

//     var marker = new kakao.maps.Marker({
//         position: markerPosition
//     });
//     marker.setMap(map);

//     // 지도 확대, 축소 컨트롤에서 확대 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
//     function zoomIn() {
//         map.setLevel(map.getLevel() - 1);
//     }
    
//     // 지도 확대, 축소 컨트롤에서 축소 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
//     function zoomOut() {
//         map.setLevel(map.getLevel() + 1);
//     }

// });

//sec4 - 모바일 스와이퍼 ----- ----- ----- ----- -----
    const swiper = new Swiper(".SNSSwiper_Mb", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
//nav 관련 것들 ----- ----- ----- ----- -----
let Prekey = 0;
window.onload = function(){  
    //scroll nav색 바꾸기
    window.addEventListener('scroll', function(){
        let elNav = document.querySelector('nav.navigation'),
            elAAll = elNav.querySelectorAll('li>a');     
        let elSecAll = document.querySelectorAll('section');
        

        //section 뷰포트부터의 Y거리 알아내기 //전부 elSecAll_h 배열로 만들기
        let elSecAll_h = [];
        elSecAll.forEach(function(ele, key){
            elSecAll_h.push(ele.getBoundingClientRect().top); 
        });

        //section 절대위치 Y거리 알아내기 //전부 elSecAll_offsetTop 배열로 만들기
        let elSecAll_offsetTop = [];
        elSecAll.forEach(function(ele, key){
            elSecAll_offsetTop.push(ele.offsetTop); //ele.offsetTop //절대 위치(문서기준)
        });
        
        //a태그 뷰포트부터의 Y거리 알아내기 //전부 elAAll_h 배열로 만들기
        let elAAll_h = [];
        elAAll.forEach(function(ele, key){
            elAAll_h.push(ele.getBoundingClientRect().top);
        });
        
        // console.log('elSecAll_offsetTop',elSecAll_offsetTop);
        // console.log('window.scrollY', window.scrollY + window.innerHeight);
        
        //section위치에 맞게 불 들어오기
        elSecAll_offsetTop.forEach(function(ele, k){
            if((window.scrollY + window.innerHeight*1/3) > ele){
                elAAll[Prekey].classList.remove('active');
                elAAll[k].classList.add('active');
                Prekey = k
            }
        });


        //녹색 -> 흰색 -> 녹색 //sec 1, 3에 녹색이 들어가야 함
        elAAll_h.forEach(function(ele, k){
                if(ele > elSecAll_h[1] || ele > elSecAll_h[3] ){ 
                    elAAll[k].classList.add('green');
                }else{
                    elAAll[k].classList.remove('green');
                }

                if(elSecAll_h[3] > ele && ele > elSecAll_h[2]) 
                elAAll[k].classList.remove('green');
        });






        elAAll.forEach(function(ele, k){
            ele.onclick = (e) => {
                e.preventDefault(); //a태그 이동 막기
                console.log( elSecAll_offsetTop[k]);

                window.scrollTo({
                    top: elSecAll_offsetTop[k] ,
                    left: 0,
                    behavior: "smooth"
                });//window.scrollTo
            };//ele.onclick
        });//elAAll.forEach(function(ele, k)
          
    });//window.scroll

    

}//window.onload
