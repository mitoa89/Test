    
var map = undefined;

function makeMap()
{
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new daum.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

  map = new daum.maps.Map(mapContainer, mapOption); // 지도를 생성합니다    
}

function setCenter() {            
    // 이동할 위도 경도 위치를 생성합니다 
    var moveLatLon = new daum.maps.LatLng(33.452613, 126.570888);
    
    // 지도 중심을 이동 시킵니다
    map.setCenter(moveLatLon);
}

function panTo( Lat, Lng ) {
    // 이동할 위도 경도 위치를 생성합니다 
    var moveLatLon = new daum.maps.LatLng(Lat, Lng);
    
    // 지도 중심을 부드럽게 이동시킵니다
    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
    map.panTo(moveLatLon); 
       
}   

$(document).ready(function(){
  makeMap();

});

/*



/*
      $('.promotion').on('click',function(){
      var $this=$(this);
      adclick("fei1el0ddvg9w82u8kftf5veougygwka","카테고리 페이지", parseInt($this.attr('id')));
    });

    var $table=$(".table").stupidtable({
      "alpha":function(b,a){
        return parseInt(b.replace(",",""),10)-parseInt(a.replace(",",""),10);
      }
    });


    var $th_to_sort = $table.find("thead th").eq(0);
    $th_to_sort.stupidsort('desc');
    var $th_to_sort = $table.find("thead th").eq(4);
    $th_to_sort.stupidsort('desc');
    var $th_to_sort = $table.find("thead th").eq(8);
    $th_to_sort.stupidsort('desc');
    var $th_to_sort = $table.find("thead th").eq(12);
    $th_to_sort.stupidsort('desc');
    var $th_to_sort = $table.find("thead th").eq(16);
    $th_to_sort.stupidsort('desc');



    $('td').on('click',function(){
      var $this=$(this)
    if($(this)[0].className=='like'){
      
      if(confirm('로그인이 필요합니다. 로그인페이지로 이동하시겠습니까?')){
      location.href="http://seoulprice.com/accounts/login/?next=/snu/stores/?keyword="
      }
      
       var change=function(data){
        if($this.children()[0].className=="fa fa-heart-o"){
        $this.html(data+" <i class='fa fa-heart'></i>");
        }
        else{
        $this.html(data+" <i class='fa fa-heart-o'></i>");
        }
       }

    }
    else{

    if($this.parent()[0].className=='promotion'){
        location.href=$(this).parent().children().children()[2].href;
      }
      else{
      location.href=$(this).parent().children().children()[1].href;
      }


    }
    })
    })



          var adanalytics=function(session, page, store){
        $.ajax({
              url:"/snu/tool/advertisement/",
              type:"POST",
              data:{
                session:session,
                page:page,
                store:store
              },
              success:function(json){
                console.log(json)
              },
              error:function(json){
                console.log(json)
              }
            })
      };

      var adclick=function(session, page, store){
        $.ajax({
              url:"/snu/tool/advertisement/click/",
              type:"POST",
              data:{
                session:session,
                page:page,
                store:store
              },
              success:function(json){
                console.log(json)
              },
              error:function(json){
                console.log(json)
              }
            })
      };

    var couponView=function(coupon_id){

      $.ajax({
        url:"/snu/coupon/view/",
        type: "POST",
        data: {
        coupon_id : coupon_id
        },
        success:function(json){
          console.log(json);
        },
        error:function(json){
          console.log(json);
        }
      })
    }

    var coupon_list=[];
    for(var i=0; i<$('.special').length;i++){
      coupon_list.push($('.special')[i].id);
    }
    jQuery.unique(coupon_list);
    for(var i=0; i<coupon_list.length;i++){
      couponView(coupon_list[i]);
    }


  Kakao.init('c137b36ab4ced88d9fffae0d6e7374b0');

      Kakao.Link.createTalkLinkButton({
      container: '#kakao-link-btn',
      label: '실시간 추천 맛집 | 스누프라이스 -  모든 가격 정보를 한 눈에',
      //image: {
      //src: 'http://seoulprice.com/static/blog/logo3.png',
      //width: '300',
      //height: '100'
      //},
      webButton: {
      text: '스누프라이스로 가기',
      url: 'http://seoulprice.com/snu/recommend/?location=낙성대' // 앱 설정의 웹 플랫폼에 등록한 도메인의 URL이어야 합니다.
      }
      });
      var mapContainer = document.getElementById('map')

      if($('.active').last()[0]==undefined){
        var here="서울대입구";
        $('.nav-pills>li').first().attr('class','active');
        $('div#서울대입구').attr('class','tab-pane active');
      }
      else{
        var here=$('.active').last()[0].id;
      }
      if(here=="서울대입구"){
        var lat=37.479469,lon=126.952240;
        
      
      }
      else if(here=="낙성대"){
        var lat=37.477028,lon=126.961715;
      }
      else if(here=="녹두"){
        var lat=37.469937,lon=126.938937;
      }
      else if(here=="서울대"){
        var lat=37.461072,lon=126.952110;
      }
      else if(here=="신촌"){
        var lat=37.557478,lon=126.936701;
      }
      else if(here=="이대앞"){
        var lat=37.557952,lon=126.945676;
      }
      else if(here=="서강대앞"){
        var lat=37.549523,lon=126.938490;
      }
      else{
        var lat=37.479469,lon=126.952240;
        
      
      }
      

    mapOption = {
        center: new daum.maps.LatLng(lat, lon), // 지도의 중심좌표
        draggable: true,
        level: 4 // 지도의 확대 레벨
    };

var map = new daum.maps.Map(mapContainer, mapOption); // 지도를 생성합니다


// HTML5의 geolocation으로 사용할 수 있는지 확인합니다
// var here=function(){

// if (navigator.geolocation) {

//     // GeoLocation을 이용해서 접속 위치를 얻어옵니다
//     navigator.geolocation.getCurrentPosition(function(position) {

//         var lat = position.coords.latitude, // 위도
//             lon = position.coords.longitude; // 경도

//         var locPosition = new daum.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
//             message = '<div style="padding:5px;">현 위치</div>'; // 인포윈도우에 표시될 내용입니다

//         // 마커와 인포윈도우를 표시합니다
//         displayMarker(locPosition, message);

//       });

// } else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다

//     var locPosition = new daum.maps.LatLng(37.480960, 126.952658),
//         message = 'geolocation을 사용할수 없어요..'

//     displayMarker(locPosition, message);
// }

// }
// here();
// 주소-좌표 변환 객체를 생성합니다
var geocoder = new daum.maps.services.Geocoder();

// 주소로 좌표를 검색합니다
// var points=[]
// var bounds = new daum.maps.LatLngBounds();
var check=function(address,info){
geocoder.addr2coord(address, function(status, result) {

    // 정상적으로 검색이 완료됐으면
     if (status === daum.maps.services.Status.OK) {
       $.ajax({
        url:"/snu/savecoords/",
        type: "GET",
        data: {
        lat : result.addr[0].lat,
        lon : result.addr[0].lng,
        info : info
        },
        success:function(json){
        console.log(json);
        },
        error:function(json){
        console.log(json);
        }
      })
        var coords = new daum.maps.LatLng(result.addr[0].lat, result.addr[0].lng);
        //points.push(coords);
        // 결과값으로 받은 위치를 마커로 표시합니다
        var marker = new daum.maps.Marker({
            map: map,
            position: coords
        });
        var iwcontent = '<div style="padding:5px;"><a href="http://seoulprice.com/snu/store/?keyword='+info+'">'+info+'</a></div>'
        // 인포윈도우로 장소에 대한 설명을 표시합니다
        var infowindow = new daum.maps.InfoWindow({
            content: iwcontent,
            removable : true
        });
        daum.maps.event.addListener(marker, 'click', function(){
            infowindow.open(map, marker);
          });
        //infowindow.open(map, marker);
    }
});
}

var createmarker=function(lat, lon, info, detail){
  var coords = new daum.maps.LatLng(lat, lon);
  var imageSrc = "/static/blog/marker1.png",
            imageSize = new daum.maps.Size(35, 39),
            imageOption = {offset: new daum.maps.Point(18, 13)};
        var markerImage = new daum.maps.MarkerImage(imageSrc, imageSize, imageOption);

        var marker = new daum.maps.Marker({
            map: map,
            position: coords,
            image:markerImage
        });
        // 인포윈도우로 장소에 대한 설명을 표시합니다
        var infowindow = new daum.maps.InfoWindow({
            content: '<div style="padding:5px;"><a href="http://seoulprice.com/snu/store/?keyword='+info+'">'+info+'</a><br>'+detail+'</div>',
            removable : true
        });

        var x=0;
        daum.maps.event.addListener(marker, 'click', function(){
          if(x==0){
            infowindow.open(map, marker);
            x=1;
          }
          else if(x==1){
            infowindow.close();
            x=0;
          }

          });

}

//createmarker(37.479469,126.952240,'여기');
function panTo(lat, lon) {
    // 이동할 위도 경도 위치를 생성합니다
    var moveLatLon = new daum.maps.LatLng(lat, lon);
    // 지도 중심을 부드럽게 이동시킵니다
    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
    map.panTo(moveLatLon);
}
// var i;
// for(i=0;i<points.length;i++){
//   bounds.extend(points[i]);
// }
// var setBounds=function(){
// map.setBounds(bounds);
// }

*/

// 
