function validate() {
    
    document.getElementById('email').addEventListener('change', onChangeFunction);

    function onChangeFunction (event){
        // console.log(event)
        // console.log(event.target);
        // console.log(event.target.value);
        const regex = /[a-z]+@[a-z]+[.][a-z]+/gm;
        if (regex.test(event.target.value)) {
            event.target.classList.remove('error')
        } else {
            event.target.classList.add('error')
        }
    }
}