import axios from 'axios';

const api = axios.create({
baseURL:'https://api.bscscan.com/api'

})

export default api; 