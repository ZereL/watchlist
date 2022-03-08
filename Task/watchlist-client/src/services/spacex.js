import { fetchSpaceXApi } from './index';

export const fetchRocketList = async () => {
    const rst = await fetchSpaceXApi.get('/rockets').catch(function (error) {
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
