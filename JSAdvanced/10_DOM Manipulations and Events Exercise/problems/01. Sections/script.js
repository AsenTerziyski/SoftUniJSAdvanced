// function create(words) {
//    console.log('TODO:...');
// }

function create(input) {
   // console.log('Started function!');
   // let parentElement = document.getElementById('content');
   // let elements = input;

   // for (let i = 0; i < elements.length; i++) {
   //    // console.log('start')
   //    let div = document.createElement('div');
   //    let p = document.createElement('p');
   //    let currentText = document.createTextNode(elements[i]);
   //    // console.log(currentText);
   //    p.appendChild(currentText);
   //    p.style.display = 'none';
   //    div.appendChild(p);
   //    // div.addEventListener('click', function (event) {
   //    //    // console.log(event.target.children[0]);
   //    //    event.target.children[0].style.display = 'block';
   //    // });
   //    div.addEventListener('click', showParagraphs);
   //    parentElement.appendChild(div);
   //    // console.log('End function!');
   //    function showParagraphs(event) {
   //       event.target.children[0].style.display = 'inline';
   //    }
   // }

   // my solution:
   console.log('Starting...');
   let parentElement = document.getElementById('content');
   // let elements = input;
   for(let i = 0; i<input.length; i++ ) {
      // debugger
      let div = document.createElement('div');
      let p = document.createElement('p');
      let currentText = input[i];
      // console.log(currentText);
      let currentTextNode = document.createTextNode(currentText);
      
      // console.log(currentTextNode.nodeValue);

      p.appendChild(currentTextNode);
      p.style.display = 'none';

      div.appendChild(p);
      
      div.addEventListener('click', showParagraphs);
      function showParagraphs(event) {
         let p = event.target.children[0];
         console.log(p)
         event.target.children[0].style.display = 'inline';
      }
      parentElement.appendChild(div);

   }
   console.log('......End!');
}
