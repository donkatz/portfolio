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
          keyboardScrolling: true,
          
          onLeave: function(origin, destination, direction){
            var leavingSection = this;
        
            //구역 2를 떠난 후
            if(destination.index == 1 ){
                          
              $('.pie_html').data('easyPieChart').update(-80);
              $('.pie_css').data('easyPieChart').update(-70);
              $('.pie_js').data('easyPieChart').update(-60);
              $('.pie_ps').data('easyPieChart').update(-70);
              $('.pie_ai').data('easyPieChart').update(-60);
              $('.pie_figma').data('easyPieChart').update(-80);

            } else{
              $('.pie_html').data('easyPieChart').update(0);
              $('.pie_css').data('easyPieChart').update(0);
              $('.pie_js').data('easyPieChart').update(0);
              $('.pie_ps').data('easyPieChart').update(0);
              $('.pie_ai').data('easyPieChart').update(0);
              $('.pie_figma').data('easyPieChart').update(0);
            }
          }

          
        });

        var test = '<header><h1>Portfolio</h1><img src="img/p6.png" alt=""></header>'

        $(".portfolio").append(test);

        $('.pie-chart ').easyPieChart({
          barColor: '#FDA53D',  //차트가 그려질 색
          trackColor: '#ccc',  // 차트가 그려지는 트랙의 기본 배경색(chart1 의 회색부분)
          scaleColor: 'transparent', // 차트 테두리에 그려지는 기준선 (chart2	의 테두리 선)
          lineCap: 'round', // 차트 선의 모양 chart1 butt / chart2 round / chart3 square
          lineWidth: 15, // 차트 선의 두께
          size: 100, // 차트크기
          animate: 1000, // 그려지는 시간 
          onStart: $.noop,
          onStop: $.noop
      });

      var typingBool = false;
      var typingIdx;
      var typingTxt;
      var tyInt;

      function slice_text(__test__){  
      typingIdx = 0;
     typingTxt = __test__; // 타이핑될 텍스트를 가져온다
     typingTxt = typingTxt.split(""); // 한글자씩 자른다.
      }

      function typing_start(__test__){
       slice_text(__test__)
       if (typingBool == false) {
       // 타이핑이 진행되지 않았다면
       typingBool = true;
       tyInt = setInterval(typing, 50); // 반복동작
        }  
       }

        function typing() {
         if (typingIdx < typingTxt.length) {
         // 타이핑될 텍스트 길이만큼 반복
         $(".hash_tag").append(typingTxt[typingIdx]); // 한글자씩 이어준다.
         typingIdx++;
         } else {
          clearInterval(tyInt); //끝나면 반복종료
         }
        }

         typing_start("#활기찬 #감각적인 #섬세한 #창의적인");
});