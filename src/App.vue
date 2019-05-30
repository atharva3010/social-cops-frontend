<template>
  <v-app>
    <v-container-fluid>
      <v-layout>
        <v-flex>
          <authentication></authentication>
          <v-toolbar flat app dark inverted-scroll dense color="#212121">
            <v-avatar size="40px"><img src="./assets/25.jpg"></v-avatar>
            <v-toolbar-title class="font-weight-light" id="yellow">Sachin Tendulkar</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
              <v-btn flat id="yellow">Home</v-btn>
              <v-btn flat id="yellow">Problem</v-btn>
              <v-btn flat id="yellow">Analysis</v-btn>
              <v-btn flat id="yellow">About</v-btn>
              <v-btn flat id="yellow">Contact</v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <home></home>
        </v-flex>
      </v-layout>
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
  }
}
</script>

<style>
#yellow{
  color: yellow;
}
</style>
