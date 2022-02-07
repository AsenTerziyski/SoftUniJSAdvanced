function attachEventsListeners() {

    // let days = document.getElementById('days');
    // let hours = document.getElementById('hours');
    // let minutes = document.getElementById('minutes');
    // let seconds = document.getElementById('seconds');

    // let rations = {
    //     days: 1,
    //     hours: 24,
    //     minutes: 1440,
    //     seconds: 86400
    // };

    // document.getElementById('daysBtn').addEventListener('click', onCnvert);
    // document.getElementById('hoursBtn').addEventListener('click', onCnvert);
    // document.getElementById('minutesBtn').addEventListener('click', onCnvert);
    // document.getElementById('secondsBtn').addEventListener('click', onCnvert);


    // function convert(value, unit) {

    //     // console.log(`${value} : ${unit}`);
    //     // console.log(rations[unit]);

    //     let days = value / rations[unit];

    //     return {
    //         days: days,
    //         hours: days * rations.hours,
    //         minutes: days * rations.minutes,
    //         seconds: days * rations.seconds
    //     }

    // }
    // function onCnvert(event) {

    //     let input = event.target.parentElement.querySelector('input[type="text"]');
    //     let time = convert(Number(input.value), input.id);
    //     // console.log(input);
    //     days.value = time.days;
    //     hours.value = time.hours;
    //     minutes.value = time.minutes;
    //     seconds.value = time.seconds;

    // };

    // my solution:
    console.log('Start......');
    debugger
    // 0
    let days = document.querySelector('#days');
    let hours = document.querySelector('#hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    // 1
    let rations = {
        days: 1,
        hours: 24,
        minutes: 24 * 60,
        seconds: 24 * 60 * 60
    }
    // 2
    document.getElementById('daysBtn').addEventListener('click', onConvert);
    document.getElementById('hoursBtn').addEventListener('click', onConvert);
    document.getElementById('minutesBtn').addEventListener('click', onConvert);
    document.getElementById('secondsBtn').addEventListener('click', onConvert);
    //3
    function convertFunction(value, unit) {
        let days = value / rations[unit];
        return {
            days: days,
            hours: days * rations.hours,
            minutes: days * rations.minutes,
            seconds: days * rations.seconds
        }

    }
    //4
    function onConvert(event) {
        let input = event.target.parentElement.querySelector('input[type="text"]');
        let time = convertFunction(Number(input.value), input.id);
        days.value = time.days;
        hours.value = time.hours;
        minutes.value = time.minutes;
        seconds.value = time.seconds;
    }
    console.log('.......End!');
}