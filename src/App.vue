<template>
  <v-app>
    <v-container-fluid>
      <v-layout wrap>
        <v-flex>
          <authentication></authentication>
          <v-toolbar flat app dark inverted-scroll dense color="#212121">
            <v-avatar size="40px"><img src="./assets/25.jpg"></v-avatar>
            <v-toolbar-title class="font-weight-regular" id="yellow">Sachin Tendulkar</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer" style="color:yellow;"></v-toolbar-side-icon>
            <v-toolbar-items class="hidden-sm-and-down">
              <v-btn flat id="yellow" href="#">Home</v-btn>
              <v-btn flat id="yellow" href="#body">Analysis</v-btn>
              <v-btn flat id="yellow" href="#about">About</v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-toolbar flat app dark scroll-off-screen dense color="transparent">
            <v-avatar size="40px"><img src="./assets/25.jpg"></v-avatar>
            <v-toolbar-title class="font-weight-regular" id="yellow">Sachin Tendulkar</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-items class="hidden-sm-and-down">
              <v-btn flat id="yellow" href="#">Home</v-btn>
              <v-btn flat id="yellow" href="#body">Analysis</v-btn>
              <v-btn flat id="yellow" href="#about">About</v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <home></home>
        </v-flex>
      </v-layout>
      <v-navigation-drawer class="hidden-md-and-up" absolute temporary v-model="drawer" dark style="position:fixed;">
        <v-list>
          <v-list-tile>
            <v-btn flat id="yellow" href="#header" block style="padding:20px; top:50%">Home</v-btn>
          </v-list-tile>
          <v-list-tile>
            <v-btn flat id="yellow" href="#body" block style="padding:20px; top:50%">Analysis</v-btn>
          </v-list-tile>
          <v-list-tile>
            <v-btn flat id="yellow" href="#about" block style="padding:20px; top:50%">About</v-btn>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
    </v-container-fluid>
  </v-app>
</template>

<script>
import authentication from './components/Authentication'
import home from './components/Home'
export default {
  name: 'app',
  components: {
    authentication,
    home
  },
  data() {
    return {
      drawer: null
    }
  }
}
</script>

<style>
#yellow{
  color: yellow;
}
html {
  scroll-behavior: smooth;
}
</style>
