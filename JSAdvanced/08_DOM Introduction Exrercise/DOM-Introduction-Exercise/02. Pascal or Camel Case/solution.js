function solve() {
  // console.log('Started solve functuion....');
  let inputText = document.getElementById('text').value;
  let namingConvention = document.getElementById('naming-convention').value;
  // let inputText = 'test test';
  // let namingConvention = 'Pascal Case';
  let result = '';

  switch (namingConvention) {
    case 'Camel Case':
      for (let i = 0; i < inputText.length; i++) {
        let currentElement = inputText[i];
        if (currentElement === ' ') {
          result += (inputText[i + 1].toUpperCase());
          i++;
        } else {
          result += (currentElement.toLowerCase());
        }
      }
      break;
    case 'Pascal Case':
      result += (inputText[0].toUpperCase());
      for (i = 1; i < inputText.length; i++) {
        if (inputText[i] === ' ') {
          result += (inputText[i + 1].toUpperCase());
          i++;
        } else {
          result += (inputText[i].toLowerCase());
        }
      }
      break;
    default: result = 'Error!';
  }

  let resultElement = document.getElementById('result');
  resultElement.textContent = result;
  // console.log('Finished solve functuion!')
}

// solve();