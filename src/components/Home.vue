<template>
  <v-container-fluid grid-list-md text-xs-center fill-height>
    <v-layout row wrap align-center>
      <v-flex xs12>
        <v-flex>
          <div id="header">
            <vue-typed-js :loop="false" :startDelay="1000" :strings="['Sachin Tendulkar', 'A former Indian cricketer', 'The God of Cricket', 'Master Blaster', 'Widely regarded as,', 'The greatest cricketer of all time.']">
              <h1 id="centered" class="typing"></h1>
            </vue-typed-js>
            <v-btn id="knowMore" round large outline color="yellow" bottom href="#body">See Proof</v-btn>
          </div>
        </v-flex>
        <v-layout row wrap>
          <div id="body">
              <!-- <chartjs-line 
              :fill="myboolean"
              :pointborderwidth="mywidth"
              :pointbordercolor="mypointbordercolor"
              :pointhoverborderwidth="hoverwidth"
              :pointhoverbackgroundcolor="hoverbackgroundcolor"
              :pointhoverbordercolor="hoverbordercolor"
              :labels="mylabels"
              >
              </chartjs-line> -->
              <!-- <chartjs-horizontal-bar :datalabel="mylabel" :labels="mylabels" :data="mydata"></chartjs-horizontal-bar> -->
              <!-- <div id="chart-wrapper">
                <canvas id="chart"></canvas>
              </div> -->
              <!-- <v-btn @click="chartData=!chartData">Analyse Data</v-btn> -->
              <iframe width="600" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ3LSgl_4a2sXkmKOEUIhqhl142N2D-8o2Dy4r5nefrxEIqL5EyD899_DxOI3IUYCsUMXkLjwYS96nE/pubchart?oid=1955120008&amp;format=interactive"></iframe>
              <!-- <v-flex>
              <v-card>
                <iframe width="600" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ3LSgl_4a2sXkmKOEUIhqhl142N2D-8o2Dy4r5nefrxEIqL5EyD899_DxOI3IUYCsUMXkLjwYS96nE/pubchart?oid=1575361273&amp;format=interactive"></iframe>
              </v-card>
              </v-flex>
              <v-card>

              </v-card> -->
              <!-- <iframe height="100%" width="100%" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ3LSgl_4a2sXkmKOEUIhqhl142N2D-8o2Dy4r5nefrxEIqL5EyD899_DxOI3IUYCsUMXkLjwYS96nE/pubhtml?widget=true&amp;headers=false"></iframe> -->
          </div>
        </v-layout>
        <div id="footer">

        </div>
      </v-flex>
    </v-layout>
  </v-container-fluid>
</template>

<script>
import * as d3 from 'd3'

export default {
  name: 'home',
  data() {
    return{
      chartData: false,
      myboolean: true,
      mywidth: 4,
      mypointbordercolor : '#f35009',
      hoverwidth : 3,
      hoverbackgroundcolor : '#636b6f',
      hoverbordercolor : '#ffd663',
      mylabels: ["Batting Score", "February", "March", "April", "May", "June", "July"],
      mydatasets:[{
        label: "Sachin",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40],
        spanGaps: false,
      },],
      mylabel : 'TestDataLabel',
      mylabels : ['batting score', 'wickets', 'catches', 'runs conceded', 'stumps', ],
      mydata : [
        100, 40, 60, 70,10
      ]
    }
  },
mounted() {
var ctx = document.getElementById('chart').getContext('2d');
Chart.defaults.global.defaultFontFamily = 'Roboto';
Chart.defaults.global.defaultFontColor = '#333';

function makeChart(sachin) {
  console.log(hello)
  var playerLabels = sachin.map(function(d) {return d.opposition});
  var weeksData = sachin.map(function(d) {return +d.batting_score});
  var playerColors = sachin.map(function(d) {return d.Gender === 'Female' ? '#F15F36' : '#19A0AA';});

  var chart = new Chart(ctx, {
    type: 'horizontalBar',
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: 'Sachin',
              fontSize: 16
            }
          }
        ]
      }
    },
    data: {
      labels: playerLabels,
      datasets: [
        {
          data: weeksData,
          backgroundColor: playerColors
        }
      ]
    }
  })
}

d3.csv('./sachin.csv')
  .then(makeChart);
}
}
</script>

<style>
#header{
  height: 100vh;
  background-image: url("../assets/header-image.jpeg");
  background-size: cover;
  color: yellow;
  position: relative;
  text-align: center;
}
.typing{
    font-size: 80px;
    width: 100%;
}
#knowMore{
  transform: translate(-50%, -50%);
  position: absolute;
}
@media (max-width: 400px) {
  #header{
    background-image: url("../assets/header-image-mobile.jpg");
  }
  .typing{
    font-size: 50px;
    padding: 20px;
  }
}
@media (max-width: 300px) {
  #header{
    background-image: url("../assets/header-image-mobile.jpg");
  }
  .typing{
    font-size: 40px;
    padding: 20px;
  }
}
@media (max-width: 500px) {
  #header{
    background-image: url("../assets/header-image-mobile.jpg");
  }
  .typing{
    font-size: 50px;
    padding: 20px;
  }
}
#centered{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#bottom-left {
  position: absolute;
  bottom: 8px;
  left: 16px;
}
#footer{
  height: 20vh;
  background-color: #212121 ;
}
#body{
  height: 100vh;
}
#yellow{
  color: yellow;
}
#chart-wrapper {
  height: 100%;
}

</style>