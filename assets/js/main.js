$(".option").click(function(){
   $(".option").removeClass("active");
   $(this).addClass("active");
   
});

$(function() {

    $(".open-button").hover(function(){
        //$(".hive img").attr("src", "img/hexa_hover.png");
        $(".container img").fadeTo(250, 0.6);
    }, function (){
        $(".container img").fadeTo(250, 1);
    });

    $( "#datepicker" ).datepicker();
    var availableTags = [
        "Albert Heijn",
        "Wendeling",
        "Jumbo",
        "Aldi"
      ];
      $( "#tags" ).autocomplete({
        source: availableTags
      });

      toggleDataSeries();
      
  
    
      
});
function openForm() {

  document.getElementById("myForm").style.display = "block";

}
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
function openForm2() {
  document.getElementById("myForm2").style.display = "block";
}
function closeForm2() {
  document.getElementById("myForm2").style.display = "none";
}
// function addDiv() {
//   var newDiv="<div class='option active' style='--optionBackground:url(https://www.supermarketnews.com/sites/supermarketnews.com/files/styles/article_featured_retina/public/Aldi%20store-St%20Charles%20IL.png?itok=igwsh2_b);'><div class='shadow'></div><div class='label'><div class='icon'><img src='aldi.png' alt='logo'></div><div class='info'><a href ='statistics.html'><div class='main'>Beehive #3</div></a><div id='sub'>Temp: 5&#176; - Humidity: 79% - Weight: 50.1kg</div></div></div></div>";
//   $(newDiv).insertBefore(".myButton");


//   //$(".options").append(newDiv);
//    closeForm();
// }
// // function deleteDiv() {
// //   $(".option:nth-child(4").remove();
// // }

function toggleDataSeries(e) {
  if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
    e.dataSeries.visible = false;
  } else {
    e.dataSeries.visible = true;
  }
  e.chart.render();
}
window.onload = function () {
        var options = {
          exportEnabled: true,
          animationEnabled: true,
          title:{
            text: ""
          },
          subtitles: [{
            text: ""
          }],
          axisX: {
            title: ""
          },
          axisY: {
            title: "°C",
            titleFontColor: "#e45806",
            lineColor: "#f7d366",
            labelFontColor: "#f7d366",
            tickColor: "#f7d366",
            includeZero: false
          },
         
          toolTip: {
            shared: true
          },
          legend: {
            cursor: "pointer",
            itemclick: toggleDataSeries
          },
          data: [{    
            markerColor: "#f79b66", 
            type: "spline",
            color:"#f7d366",
            name: "Inside",
            showInLegend: true,
            xValueFormatString: "MMM YYYY",
            yValueFormatString: "#,##0 Units",
            dataPoints: [
              { x: new Date(2020, 0, 1),  y: 23 },
              { x: new Date(2020, 1, 1), y: 14 },
              { x: new Date(2020, 2, 1), y: 15 },
              { x: new Date(2020, 3, 1),  y: 5},
              { x: new Date(2020, 4, 1),  y: 9},
              { x: new Date(2020, 5, 1),  y: 21 },
              { x: new Date(2020, 6, 1), y: 15 },
              { x: new Date(2020, 7, 1), y: 17},
              { x: new Date(2020, 8, 1),  y: 17},
              { x: new Date(2020, 9, 1),  y: 18},
              { x: new Date(2020, 10, 1),  y: 12 },
              { x: new Date(2020, 11, 1), y: 6 }
            ]
          }
          ,{    
            markerColor: "#e45806", 
            type: "spline",
            lineColor:"#e45806",
            name: "Outside Temperature",
            showInLegend: true,    
            xValueFormatString: "MMM YYYY",
            yValueFormatString: "#,##0 Units",
            dataPoints: [
              { x: new Date(2020, 0, 1),  y: 29 },
              { x: new Date(2020, 1, 1), y: 24 },
              { x: new Date(2020, 2, 1), y: 10 },
              { x: new Date(2020, 3, 1),  y: 15},
              { x: new Date(2020, 4, 1),  y: 29},
              { x: new Date(2020, 5, 1),  y: 11 },
              { x: new Date(2020, 6, 1), y: 15 },
              { x: new Date(2020, 7, 1), y: 17},
              { x: new Date(2020, 8, 1),  y: 17},
              { x: new Date(2020, 9, 1),  y: 18},
              { x: new Date(2020, 10, 1),  y: 12 },
              { x: new Date(2020, 11, 1), y: 6 }
            ]
          }]
        };
        var options2 = {
          exportEnabled: true,
          animationEnabled: true,
          title:{
            text: ""
          },
          subtitles: [{
            text: ""
          }],
          axisX: {
            title: ""
          },
          axisY: {
            title: "%",
            titleFontColor: "#e45806",
            lineColor: "#f7d366",
            labelFontColor: "#f7d366",
            tickColor: "#f7d366",
            includeZero: false
          },
          toolTip: {
            shared: true
          },
          legend: {
            cursor: "pointer",
            itemclick: toggleDataSeries
          },
          data: [{
            markerColor: "#f79b66", 
            type: "spline",
            color:"#f7d366",
            name: "Inside",
            showInLegend: true,
            xValueFormatString: "MMM YYYY",
            yValueFormatString: "#,##0 Units",
            dataPoints: [
              { x: new Date(2020, 0, 1),  y: 56 },
              { x: new Date(2020, 1, 1), y: 79 },
              { x: new Date(2020, 2, 1), y: 87 },
              { x: new Date(2020, 3, 1),  y: 76 },
              { x: new Date(2020, 4, 1),  y: 67 },
              { x: new Date(2020, 5, 1),  y: 89 },
              { x: new Date(2020, 6, 1), y: 45 },
              { x: new Date(2020, 7, 1), y: 54 },
              { x: new Date(2020, 8, 1),  y: 67},
              { x: new Date(2020, 9, 1),  y: 78 },
              { x: new Date(2020, 10, 1),  y: 98 },
              { x: new Date(2020, 11, 1), y: 76}
            ]
          },
          {
            markerColor: "#e45806", 
            type: "spline",
            lineColor:"#e45806",
            name: "Outside Humidity",
            showInLegend: true,
            xValueFormatString: "MMM YYYY",
            yValueFormatString: "#,##0 Units",
            dataPoints: [
              { x: new Date(2020, 0, 1),  y: 79 },
              { x: new Date(2020, 1, 1), y: 87 },
              { x: new Date(2020, 2, 1), y: 76 },
              { x: new Date(2020, 3, 1),  y: 76 },
              { x: new Date(2020, 4, 1),  y: 45 },
              { x: new Date(2020, 5, 1),  y: 89 },
              { x: new Date(2020, 6, 1), y: 67 },
              { x: new Date(2020, 7, 1), y: 54 },
              { x: new Date(2020, 8, 1),  y: 98},
              { x: new Date(2020, 9, 1),  y: 78 },
              { x: new Date(2020, 10, 1),  y: 76 },
              { x: new Date(2020, 11, 1), y: 76}
            ]
          }]
        };
        var options3 = {
          exportEnabled: true,
          animationEnabled: true,
          title:{
            text: ""
          },
          subtitles: [{
            text: ""
          }],
          axisX: {
            title: ""
          },
          axisY: {
            title: "kg",
            titleFontColor: "#e45806",
            lineColor: "#f7d366",
            labelFontColor: "#f7d366",
            tickColor: "#f7d366",
            includeZero: false
          },
          toolTip: {
            shared: true
          },
          legend: {
            cursor: "pointer",
            itemclick: toggleDataSeries
          },
          data: [{
            markerColor: "#e45806",
            type: "spline",
            lineColor: "#f7d366",
            name: "Weight",
            showInLegend: true,
            xValueFormatString: "MMM YYYY",
            yValueFormatString: "#,##0 Units",
            dataPoints: [
              { x: new Date(2020, 0, 1),  y: 14 },
              { x: new Date(2020, 1, 1), y: 15 },
              { x: new Date(2020, 2, 1), y: 23 },
              { x: new Date(2020, 3, 1),  y: 34 },
              { x: new Date(2020, 4, 1),  y: 24 },
              { x: new Date(2020, 5, 1),  y: 29 },
              { x: new Date(2020, 6, 1), y: 32 },
              { x: new Date(2020, 7, 1), y: 45 },
              { x: new Date(2020, 8, 1),  y: 43 },
              { x: new Date(2020, 9, 1),  y: 36 },
              { x: new Date(2020, 10, 1),  y: 45 },
              { x: new Date(2020, 11, 1), y: 41 }
            ]
          }]
        };
        $("#chartContainer1").CanvasJSChart(options); 
        $("#chartContainer2").CanvasJSChart(options2);
        $("#chartContainer3").CanvasJSChart(options3);
        }
        
