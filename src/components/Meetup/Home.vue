<template>
  <v-container>
    <v-layout row wrap class="mb-3">
      <v-flex xs12 sm6 class="text-xs-right">
        <v-btn large router to="/meetups" depressed color="error">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-left">
        <v-btn large router to="/meetups/new" depressed color="error">Organize Meetups</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <v-carousel>
          <v-carousel-item v-for="item in meetups" :key="item.id" :src="item.imageUrl">
            <!-- <div class="title">{{item.title}}</div> -->
            <v-card-text class="title">{{item.title}}</v-card-text>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
      <v-layout row wrap class="mb-2">
          <v-flex xs12   class="text-xs-center">
          <h1>"RED"</h1>
          </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      meetups: [
        {
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg",
          id: "A",
          title: "Meetup in Bangkok"
        },
        {
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg",
          id: "B",
          title: "Meetup in Pattaya"
        },
        {
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg",
          id: "C",
          title: "Meetup in Chiangmai"
        }
      ]
    };
  }
};
</script>

<style scorped>
.title {
  position: absolute;
  bottom: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 2em;
}
</style>
