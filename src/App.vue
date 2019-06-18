<template>
  <v-app>
    <v-navigation-drawer temporary fixed v-model="sideNav">
      <!-- <v-list>
        <v-list-title v-for="item in items" :key="item.title"
        router:to="item.link">
          <v-list-title-action>
      
            <v-icon>{{item.icon}}</v-icon>
         
          </v-list-title-action>
          <v-list-tile-content>
            <v-list-title>   {{item.title}}</v-list-title>
         
            </v-list-tile-content>
        </v-list-title>
      </v-list>-->
      <v-list>
        <v-list-tile v-for="item in items" :key="item.title" router:to="item.link">
          >
          <v-icon>{{item.icon}}</v-icon>

          <!-- <v-list-tile-action>
              <v-icon v-if="item.icon" color="pink">star</v-icon>
          </v-list-tile-action>-->

          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
<!-- 
          <v-list-tile-avatar>
            <img :src="item.avatar">
          </v-list-tile-avatar> -->
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar dark class="red lighten-3 #EF9A9A">
      <v-toolbar-side-icon @click="sideNav = !sideNav"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor:pointer">DevMeetUp</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in items" :key="item.title" router :to="item.link">
          <v-icon left>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
import Home from "./components/Meetup/Home";
export default {
  name: "App",
  components: { Home },
  data() {
    return {
      sideNav: false,
      items: [
        { icon: "pets", title: "Meetup", link: "/meetups" },
        { icon: "account_balance", title: "Profile", link: "/profile" },
        { icon: "code", title: "Signup", link: "/signup" },
        { icon: "donut_small", title: "Signin", link: "/signin" }
      ]
    };
  }
};
</script>
