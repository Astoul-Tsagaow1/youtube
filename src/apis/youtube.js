import axios from 'axios'

const KEY = 'AIzaSyCIfph2a6-F2MUWkmWE9i4YRkPc9bgdlas'

export default axios.create({
    baseURL:' https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        // type: 'video',
        maxResults:5,
        key: KEY

    }
})