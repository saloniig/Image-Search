import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID Ownjig7p-kaY1uCbklz_FzZjAoKH7F1cdYmRmBrtnjI'
    }

});