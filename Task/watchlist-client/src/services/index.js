import axios from 'axios';

export const fetchSpaceXApi = axios.create({
    baseURL: 'https://api.spacexdata.com/v4',
    timeout: 2000,
});

export const fetchWatchlistApi = axios.create({
    baseURL: 'https://localhost:7156',
    timeout: 2000,
});
