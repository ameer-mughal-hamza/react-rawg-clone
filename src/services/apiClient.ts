import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '27f5cbfe81164617852c2b651605231b',
  }
});