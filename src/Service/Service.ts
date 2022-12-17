import axios from "axios";
import { MainData, NewRealesesInterface } from "../model/NewReleasesInterface";

class ApiService {
    async getRecommendedSongs() {
        const token = window.localStorage.getItem('token');
        if(token){
            let { data } = await axios.get('https://api.spotify.com/v1/recommendations', {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            })
            return data;
        }
    }

    async getNewRealeses() {
        const token = window.localStorage.getItem('token');
        if(token){
            let data:MainData = await axios.get('https://api.spotify.com/v1/browse/new-releases',{
                headers: {
                    Authorization: `Bearer ${token}`
                },
            })
            return data.data.albums.items;
        }
    }
}

export const apiService = new ApiService;