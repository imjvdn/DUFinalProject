import axios from "axios";
// const BASEURL = "http://app.ticketmaster.com/discovery/v1/events.json?keyword="
const APIKEY = process.env.REACT_APP_TMKEY;
export default {
    search: function(query) {
        // return axios.get(BASEURL + query + "?apikey=" + APIKEY);
        return axios.get("https://app.ticketmaster.com/discovery/v2/events.json?keyword=" + query + "&apikey=" + APIKEY)
    },
    getPlans: function() {
        return axios.get("/api/plans");
    },
    deletePlans: function(id) {
        return axios.delete("/api/plans" + id);
    },
    savePlans: function(savePlan) {
        return axios.post("/api/plans", savePlan);
    }
};