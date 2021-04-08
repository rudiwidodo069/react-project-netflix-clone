export const GetAllVideos = pages => {
    return new Promise((resolve, reject) => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=a8b2c2c23d167eaef90511d8bd6825a6&language=en-US&page=${pages}`)
            .then(response => {
                return response.json();
            })
            .then(res => {
                return resolve(res);
            })
            .catch(err => {
                return reject(err)
            });
    })
}