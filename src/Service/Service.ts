import axios from "axios";
import { MainData, NewRealesesInterface } from "../model/NewReleasesInterface";
const token = window.localStorage.getItem('token');

class ApiService {
    async getRecommendedSongs() {
        let { data } = await axios.get('https://api.spotify.com/v1/recommendations', {
            headers: {
                Authorization: `Bearer ${token}`
            },
        })
        return data;
    }

    async getNewRealeses() {
        let data:MainData = await axios.get('https://api.spotify.com/v1/browse/new-releases',{
            headers: {
                Authorization: `Bearer ${token}`
            },
        })
        return data.data.albums.items;
    }
}

export const apiService = new ApiService;