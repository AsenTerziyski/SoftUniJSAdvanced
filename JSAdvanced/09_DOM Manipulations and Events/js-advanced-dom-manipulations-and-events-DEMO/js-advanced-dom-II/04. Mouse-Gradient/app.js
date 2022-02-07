function attachGradientEvents() {
    // let gradientElement = document.getElementById('gradient');
    // let resultElement = document.getElementById('result');

    // const gradientMouseoverHandler = (e) => {
    //     let percent = Math.floor((e.offsetX / e.target.offsetWidth) * 100);

    //     resultElement.textContent = `${percent}%`;
    // };

    // gradientElement.addEventListener('mousemove', gradientMouseoverHandler);

    // my solution:
    console.log('....Start!')
    let gradientElement = document.getElementById('gradient');
    let resultElement = document.getElementById('result');
    // const gradientMousemoverHandler = (e) => {
    //     let percent = Math.floor(100 * (e.offsetX / e.target.offsetWidth));
    //     resultElement.textContent = `${percent}%`;
    // };
    const gradientMousemoverHandler = gmmh;

    function gmmh(e) {
        let percent = Math.floor(100 * (e.offsetX / e.target.offsetWidth));
        resultElement.textContent = `${percent}%`;
    };
    
    gradientElement.addEventListener('mousemove', gradientMousemoverHandler);

    console.log('End.......!')
}