function attachGradientEvents() {
    
    let gradientElement = document.getElementById('gradient');
    let resultElement = document.getElementById('result');

    

       

    const gradientMosemoveHandler = (e) => {
        let percent =Math.floor((e.offsetX / e.target.offsetWith));
        resultElement.textContent = percent;
    }

    

    gradientElement.addEventListener('mousemove', gradientMosemoveHandler)
}