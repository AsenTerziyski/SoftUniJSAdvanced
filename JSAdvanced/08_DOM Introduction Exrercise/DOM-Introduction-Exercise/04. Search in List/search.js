function search() {
   let inputWord = document.getElementById('searchText').value;
   let townsElement = Array.from(document.querySelectorAll('#towns li'));

   let count = 0;
   for (const town of townsElement) {

      if (town.textContent.includes(inputWord) && inputWord !== '') {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         count++;
      } else {
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
      }
      
   }

   let match = document.getElementById('result');
   match.textContent = `${count} matches found`;
   
}