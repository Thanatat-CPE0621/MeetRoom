import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        loadedMeetups:[
            {
                imageUrl:
                  "https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg",
                id: 1,
                title: "Meetup in Bangkok",
                data: '2017-07-17'
              },
              {
                imageUrl:
                  "https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg",
                id: 2,
                title: "Meetup in Pattaya",
                data: '2017-07-18'
              },
              {
                imageUrl:
                  "https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg",
                id: 3,
                title: "Meetup in Chiangmai",
                data: '2017-07-19'
              }
        ],
        user: {
            id:1,
            registeredMeetups:['B|tch']
        }
    },
    mutations:{},
    actions:{},
    getters:{
        loadedMeetups(state){
            return state.loadedMeetups.sort((meetupA,meetupB) => {
                return meetupA.date > meetupB.date
            })
        },
        featuredMeetups (state, getters) {
          return getters.loadedMeetups
        },
        loadedMeetup(state){
            return (meetupId) => {
                return state.loadedMeetups.find((meetup) => {
                    return meetup.id  === meetupId
                })
            }
        },
        me(){
         
        }
    }
})