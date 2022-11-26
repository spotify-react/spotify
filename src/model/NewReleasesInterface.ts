export interface NewRealesesInterface {
    id: string,
    artists: [{
        href: string,
        id: string,
        name: string
    }],
    images: [{
        height: number,
        width: number,
        url: string
    }],
    name: string,
    release_date: string,
    total_tracks: number
}

export interface MainData {
    data: {
        albums: {
            items: NewRealesesInterface[]
        }
    }
}