function timeToWalk(steps, footprint, speedKmPerHour) {
    let distance = steps * footprint;
    let speedInMetersPerSecond = speedKmPerHour * 1000 / 3600;
    let timeToRestInSeconds = Math.floor(distance / 500) * 1 * 60;
    let totalTimeInSeconds = distance / speedInMetersPerSecond + timeToRestInSeconds;

    let netHours = Math.floor(totalTimeInSeconds / 3600);
    let netMinutes = Math.floor(totalTimeInSeconds % 3600 / 60);
    let netSeconds = totalTimeInSeconds % 60;

    // let hours = Math.floor(totalTimeInSeconds / 3600).toFixed(0).padStart(2,'0');
    // let minutes = Math.floor(totalTimeInSeconds / 60).toFixed(0).padStart(2,'0');
    // let seconds = (totalTimeInSeconds % 60).toFixed(0).padStart(2,'0');
    // console.log(`${hours}:${minutes}:${seconds}`);

    // според мен има грешка в джъдж - при продължителност по-голяма от час няма да работи!
    let hours = netHours.toFixed(0).padStart(2,'0');
    let minutes = netMinutes.toFixed(0).padStart(2,'0');
    let seconds = netSeconds.toFixed(0).padStart(2, '0');
    console.log(`${hours}:${minutes}:${seconds}`);
}

// timeToWalk(4000, 0.60, 5);
// timeToWalk(2564, 0.70, 5.5);
timeToWalk(8110, 0.60, 5);
