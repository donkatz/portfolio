$(document).ready(function(){

        $("#fullpage").fullpage({
          //options here
          navigation: true,  // 섹션네비게이션
          navigationPosition: 'right', // 섹션네비게이션 의 위치 설정 right / left   
          
          navigationTooltips: [
            'HOME',
            'ABOUT ME',
            'PORTFOLIO',
            'CONTACT',
          ], 
      
          controlArrows: true, // 슬라이드 컨트롤 애로우 생성 
              slidesNavigation: true, // 슬라이드 컨트롤 네비게이션 생성
              slidesNavPosition: 'bottom' // 슬라이드 컨트롤 네비게이션 위치 top / bottom
        });
});