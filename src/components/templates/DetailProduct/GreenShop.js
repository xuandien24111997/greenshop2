import axios from 'axios'

export default axios.create(
    {
        baseURL:'https://greenshop-10e19-default-rtdb.firebaseio.com/'
    }
)

