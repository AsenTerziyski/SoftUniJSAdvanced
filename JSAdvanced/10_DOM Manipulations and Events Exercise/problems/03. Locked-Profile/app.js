function lockedProfile() {

    // let buttonElements = document.querySelectorAll('.profile button');
    // Array.from(buttonElements).forEach(button => button.addEventListener('click', onClickFunction));

    // function onClickFunction(event) {
    //     let profile = event.target.parentElement;
    //     console.log(profile);
    //     let isActive = profile.querySelector("input[type='radio'][value='unlock']").checked;
    //     console.log(isActive);
    //     if (isActive) {
    //         let profileInfo = Array.from(profile.querySelectorAll('div')).find(d=>d.id.includes('HiddenFields'));
    //         console.log(profileInfo);

    //         if (event.target.textContent === 'Show more') {
    //             event.target.textContent = 'Hide it';
    //             profileInfo.style.display = 'block';
    //         } else {
    //             event.target.textContent = 'Show more';
    //             profileInfo.style.display = 'none';
    //         }

    //     }

    // }

    //my solution:
    console.log('Start..........')
    // най напред закачам евентс:
    let buttonElements = document.querySelectorAll('.profile button');
    Array.from(buttonElements).forEach(b => b.addEventListener('click', onClickFunction));

    // правя онклик функцията:
    function onClickFunction(event) {
        let profile = event.target.parentElement;

        // връща булиън:
        let profileIsActive = profile.querySelector("input[type='radio'][value='unlock']").checked;

        if (profileIsActive) {
            let profileInfo = Array.from(profile.querySelectorAll('div')).find(d => d.id.includes('HiddenFields'));

            if (event.target.textContent === 'Show more') {
                event.target.textContent = 'Hide it';
                profileInfo.style.display = 'block';
            } else {
                event.target.textContent = 'Show it';
                profileInfo.style.display = 'none';
            }
            
        }
    }
    console.log('.........End!');
}