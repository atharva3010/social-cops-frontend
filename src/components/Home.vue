<template>
  <v-container-fluid>
    <v-layout>
      <v-flex>
        <section>
          <div id="header">

          </div>
        </section>
        <section>
          <div id="body">
          </div>
        </section>
        <section>
          <div id="footer">

          </div>
        </section>
      </v-flex>
    </v-layout>
  </v-container-fluid>
</template>

<script>
export default {
  name: 'home',
  methods: {
    typing(){
      var options = {
        strings: ["<i>First</i> sentence.", "&amp; a second sentence."],
        typeSpeed: 40
      }

      var typed = new Typed(".element", options);
    }
  }
}
</script>

<style>
#header{
  height: 100vh;
  background-image: url("../assets/header-image.jpeg");
  background-size: 100%;
  filter: brightness(15%);
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
