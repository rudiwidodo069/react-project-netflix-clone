export const GetHomePageVideo = () => {
    return new Promise((resolve, reject) => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=a8b2c2c23d167eaef90511d8bd6825a6&language=en-US&page=1')
            .then(response => response.json())
            .then(res => resolve(res))
            .catch(err => reject(err));
    });
}

export const GetDetailHomePageVideo = idMovie => {
    return new Promise((resolve, reject) => {
        fetch(`https://api.themoviedb.org/3/movie/${idMovie}?api_key=a8b2c2c23d167eaef90511d8bd6825a6&language=en-US`)
            .then(response => response.json())
            .then(res => resolve(res))
            .catch(err => reject(err));
    });
}

export const GetDetailHomePageWatchVideo = idMovie => {
    return new Promise((resolve, reject) => {
        fetch(`https://api.themoviedb.org/3/movie/${idMovie}/watch/providers?api_key=a8b2c2c23d167eaef90511d8bd6825a6`)
            .then(response => response.json())
            .then(res => resolve(res.results))
            .catch(err => reject(err));
    });
}