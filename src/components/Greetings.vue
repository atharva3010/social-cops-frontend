<template>
  <v-layout>
    <v-flex>
      <v-dialog v-model="dialog" max-width="290">
        <v-card 
          class="mx-auto"
          dark
        >
          <v-card-title class="headline font-weight-light" id="yellow">Welcome</v-card-title>
          <v-card-text>Hello, I am <span id="yellow"><b> Atharva Sharma </b></span> and this is the PWA app I built as an assignment for <span id="yellow"><b>Atlan's</b></span> Frontend engineering internship position.
          </v-card-text>
          <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat @click="dialog = false" color="yellow">Accept & Enter</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'authentication',
  data () {
    return {
      dialog: true,
    }
  }
}
</script>

<style>
#yellow{
  color: yellow;
}
</style>
