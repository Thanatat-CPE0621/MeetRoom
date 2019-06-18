import Vue from 'vue'
import Router from 'vue-router'


import CreateMeetup from './components/Meetup/CreateMeetup'
import Meetups from './components/Meetup/Meetups'
import Profile from './components/User/Profiles'
import Signup from './components/User/Signup'
import Signin from './components/User/Signin'
import Home from './components/Meetup/Home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/meetups',
      name: 'Meetups',
      component: Meetups
    },
    {
      path: '/meetup/new',
      name: 'CreateMeetup',
      component: CreateMeetup
    },
    {
      path: '/meetups/:id',
      name: 'Meetup',
      component: Meetups
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    }
  ],
  mode: 'history'
})