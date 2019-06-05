<template>
  <v-container-fluid grid-list-md text-xs-center fill-height>
    <v-layout row wrap align-center>
      <v-flex xs12>
        <v-flex>
          <div id="header">
            <v-flex wrap>
              <v-text class="display-2 font-weight-medium hidden-sm-and-down" id="top">Frontend task</v-text>
            </v-flex>
            <vue-typed-js :loop="false" :startDelay="1000" :strings="['Sachin Tendulkar', 'A former Indian cricketer', 'The God of Cricket', 'Master Blaster', 'Widely regarded as,', 'The greatest cricketer of all time.']">
              <h1 id="centered" class="typing"></h1>
            </vue-typed-js>
            <v-flex wrap>
              <v-text class="font-weight-medium font-italic font-weight-light headline hidden-sm-and-down" id="bottom">Wikipedia says, “Sachin Tendulkar is a former Indian cricketer, widely regarded to be the greatest cricketer of all time.”</v-text>
            </v-flex>
            <v-btn id="proveThis" round large outline color="yellow" bottom href="#body">Prove This</v-btn>
          </div>
        </v-flex>
        <v-layout column wrap id="body">
            <chart></chart>
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
        </v-layout>
        <div id="about" style="padding:20px;">
          <div>
            <div id="linkedin" class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="horizontal" data-theme="dark" data-vanity="atharva-sharma-802181162"><a class="LI-simple-link" href='https://in.linkedin.com/in/atharva-sharma-802181162?trk=profile-badge'></a></div>
            <h1 class="display-3">
              About Me: 
            </h1>
            <div>
              <p>
                I am <b>Atharva Sharma</b>, a Software developer having experience with Product Management and Marketing.
                <br>
                I am also an ACM ICPC'18 Regionalist, a member of the Open Source Initiative (OSI), Royal Statistical Society (RSS) and also a Microsoft Innovative Educator.
              </p>
              <p>
                In my previous roles I have conceptualised, researched, designed, developed, tested and shipped  software that has made routine work easier for educators and has made a solid impact in their day to day work. I also possess experience hiring developers.
                <br>My technical skills: Vue.js, Vuetify, Vuex, Vue-router, ES6, HTML5, CSS3, Firebase, Netlify, Docker, REST apis, C++, Python.
              </p>
              <p>If you are looking for someone who can design and develop software, guide and manage your team, please drop me a message.</p>
            </div>
          </div>
          <a href="mailto:mailatharvasharma@gmail.com"><v-icon color="yellow" class="pa-2">fa-envelope</v-icon></a>
          <a href="tel:+8989458478"><v-icon color="yellow" class="pa-2">fa-phone </v-icon></a>
          <a href="https://github.com/atharva3010"><v-icon color="yellow" class="pa-2">fab fa-github</v-icon></a>
          <a href="https://www.linkedin.com/in/atharva-sharma-802181162/"><v-icon color="yellow" class="pa-2">fab fa-linkedin</v-icon></a>
        </div>
        <v-footer light class="pa-2" color="yellow" height="100%">
          <v-avatar size="20px"><img src="../assets/25.jpg"></v-avatar>
          <div style="color:#212121; padding-left:5px; font-size:15px;"><b>Sachin</b></div>
          <v-spacer></v-spacer>
          <div style="color:#212121;">Made with<i class="material-icons" style="font-size:20px; color:red;">favorite</i> by<b> Atharva</b> with <b>Vue.js <v-icon>fab fa-vuejs</v-icon></b></div>
        </v-footer>
      </v-flex>
    </v-layout>
  </v-container-fluid>
</template>

<script>
import * as d3 from 'd3'
import chart from './chart'

export default {
  name: 'home',
  components: {
    chart
  },
  data() {
    return{
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
#proveThis{
  transform: translate(-50%, -50%);
  position: absolute;
}
@media (max-width: 400px) {
  #header{
    background-image: url("../assets/header-image-mobile.jpg");
  }
  .typing{
    font-size: 60px;
    padding: 20px;
  }
    #linkedin{
    margin: 0;
    width: 100%;
  }
}
@media (max-width: 300px) {
  #header{
    background-image: url("../assets/header-image-mobile.jpg");
  }
  .typing{
    font-size: 50px;
    padding: 20px;
  }
    #linkedin{
    margin: 0;
    width: 100%;
  }
}
@media (max-width: 500px) {
  #header{
    background-image: url("../assets/header-image-mobile.jpg");
  }
  .typing{
    font-size: 60px;
    padding: 20px;
  }
  #linkedin{
    margin: 0;
    width: 100%;
  }
}
#about{
  background-color: #212121;
  color: yellow;
  height: 100%;
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
#linkedin{
  float:right; 
  clear:none;
}
#top{
  position: absolute;
  top: 20%;
  left: -50%;
  right: -50%;
}
#bottom{
  position: absolute;
  bottom:20%;
  left: -50%;
  right: -50%;
}

#body{
  height: 100%;
}
#yellow{
  color: yellow;
}
#chart-wrapper {
  height: 100%;
}

</style>