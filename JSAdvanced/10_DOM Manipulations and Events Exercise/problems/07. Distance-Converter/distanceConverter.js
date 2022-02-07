function attachEventsListeners() {

    let [inputField, outputField] = document.querySelectorAll('input[type="text"]');

    let fromOption = document.querySelector('#inputUnits');
    let toOption = document.querySelector('#outputUnits');

    let convertButton = document.getElementById('convert');
    convertButton.addEventListener('click', convertonFunction);

    function convertonFunction() {

        let convert = Number(inputField.value);

        let result = 0;

        switch (fromOption.value) {
            case 'km':
                convert *= 1000;
                break;
            case 'm':
                convert = convert;
                break;
            case 'cm':
                convert *= 0.01;
                break;
            case 'mm':
                convert *= 0.001;
                break;
            case 'mi':
                convert *= 1609.34
                break;
            case 'yrd':
                convert *= 0.9144;
                break;
            case 'ft':
                convert *= 0.3048;
                break;
            case 'in':
                convert *= 0.0254;
                break;
        }

        switch (toOption.value) {
            case 'km':
                result = convert / 1000;
                break;
            case 'm':
                result = convert;
                break;
            case 'cm':
                result = convert / 0.01;
                break;
            case 'mm':
                result = convert / 0.001;
                break;
            case 'mi':
                result = convert / 1609.34;
                break;
            case 'yrd':
                result = convert / 0.9144;
                break;
            case 'ft':
                result = convert / 0.3048;
                break;
            case 'in':
                result = convert / 0.0254;
                break;
        }

        outputField.value = result;
    }
}

//     console.log('Start.........');
//     debugger
//     let inputField = document.getElementById('inputDistance');
//     let outputField = document.getElementById('outputDistance');

//     let fromOpt = document.querySelector('#inputUnits');
//     let toOpt = document.querySelector('#outputUnits');

//     let convertBtn = document.getElementById('convert');
//     convertBtn.addEventListener('click', convertFunction);

//     function convertFunction() {
//         debugger
//         let valueToConvert = Number(inputField.value);
//         let result = 0;

//         let fromDistanceUnit = fromOpt.value;

//         switch (fromDistanceUnit) {
//             case 'km':
//                 valueToConvert *= 1000;
//                 break;
//             case 'm':
//                 valueToConvert *= 1;
//                 break;
//             case 'cm':
//                 valueToConvert *= 0.01;
//                 break;
//             case 'mm':
//                 valueToConvert *= 0.001;
//                 break;
//             case 'mi':
//                 convert *= 1609.34
//                 break;
//             case 'yrd':
//                 convert *= 0.9144;
//                 break;
//             case 'ft':
//                 convert *= 0.3048;
//                 break;
//             case 'in':
//                 convert *= 0.0254;
//                 break;
//         }

//         let toDistanceUnit = toOpt.value;
//         switch (toDistanceUnit) {
//             case 'km':
//                 result = valueToConvert / 1000;
//                 break;
//             case 'm':
//                 result = valueToConvert;
//                 break;
//             case 'cm':
//                 result = valueToConvert / 0.01;
//                 break;
//             case 'mm':
//                 result = valueToConvert / 0.001;
//                 break;
//             case 'mi':
//                 result = valueToConvert / 1609.34;
//                 break;
//             case 'yrd':
//                 result = valueToConvert / 0.9144;
//                 break;
//             case 'ft':
//                 result = valueToConvert / 0.3048;
//                 break;
//             case 'in':
//                 result = valueToConvert / 0.0254;
//                 break;
//         }
//         outputField.value = result;
//     }
//     console.log('..........End!');
// }
