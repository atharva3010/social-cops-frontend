<template>
  <v-container-fluid grid-list-md text-xs-center fill-height>
    <v-layout row wrap align-center>
      <v-flex xs12>
        <v-flex>
          <div id="header">
            <vue-typed-js :loop="true" :startDelay="1000" :strings="['Sachin Tendulkar', 'A former Indian cricketer', 'The God of Cricket', 'Master Blaster', 'Widely regarded as,', 'The greatest cricketer', 'Of all time.']">
              <h1 id="centered" class="typing" style="font-size:130px; width:100%;"></h1>
            </vue-typed-js>
          </div>
        </v-flex>
        <div id="body">
        </div>
        <div id="footer">

        </div>
      </v-flex>
    </v-layout>
  </v-container-fluid>
</template>

<script>
export default {
  name: 'home',
  methods: {
  }
}
</script>

<style>
#header{
  height: 100vh;
  background-image: url("../assets/header-image.jpeg");
  background-size: 100%;
  color: yellow;
  position: relative;
  text-align: center;
}
@media screen {
  
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

</style>