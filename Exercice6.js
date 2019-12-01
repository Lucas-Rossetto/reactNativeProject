state = {
    location: null,
    errorMessage: null,
};

export const getPosition = async() => {
    return new Promise(function(resolve,reject) {
        navigator.geolocation.getCurrentPosition(
            position => {
                resolve(position);
            },
            error => {
                reject(error)
            },
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );
    });
};

export const getVelibsAroundMe = async() => {
    const position = await getPosition();
}

    