import { fetchWatchlistApi } from './index';

export const saveToWatchList = async (data) => {
    const rst = await fetchWatchlistApi.post('/Home/LaunchList', data).catch(function (error) {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('Error', error.message);
        }
        console.log(error.config);
    });
    return rst;
};

export const fetchWatchList = async () => {
    const rst = await fetchWatchlistApi.get('/Home/WatchList').catch(function (error) {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('Error', error.message);
        }
        console.log(error.config);
    });
    return rst;
};
