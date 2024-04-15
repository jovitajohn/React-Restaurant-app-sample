import axios from 'axios'

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization : 'Bearer ZGTwpm3jwEdWGqMiIkVb0ieHpmGPVZ0bmZR0mqtIOAitDMz2hkMeHMSAevc_YNHriiSXN_3SaE0R17sC1gN9_jb25TsVVSG-dk0QG8LRWiHHCO1XwoWrO1GP6WscZnYx'
    }
})