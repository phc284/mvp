import $ from 'jquery';

const STAT_URL = 'https://api.mysportsfeeds.com/v1.1/pull/nfl/2016-2017-regular/overall_team_standings.json?teamstats=W,L,T,PF,PA';
const username = "phc284";
const password = "gotrunks8";

export const getTeams = function(callback) {
  console.log(btoa({username} + ":" + {password}));
  $.ajax({
    type: "GET",
    url: STAT_URL,
    dataType: "json",
    async: false,
    headers: {
      "Authorization": "Basic cGhjMjg0OmdvdHJ1bmtzOA=="
    },
    success: teams => {
      console.log('*******', teams)
      callback(teams)
    },
    error: err => {
      console.log(err)
    }
  });
};
