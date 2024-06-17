function spawnGrid(diff) {
   const box = document.getElementById('box');
   box.classList.remove('h-80');
   switch (parseInt(diff)) {
      case 1: 
         cycleGrid(box, 10, 10);
         break;
      case 2: 
         cycleGrid(box, 9, 9);
         break;
      case 3:
         cycleGrid(box, 7, 7); 
         break;
      default:
         console.log(msg);
   }
}

function cycleGrid(box, r, c) {
   let counter = 0;

   for (let i = 0; i < r; i++) {
      let row = document.createElement("div");
      row.classList.add('row');

      
      for (let j = 0; j < c; j++) {
         let square = document.createElement("div");
         square.classList.add('square', 'd-flex', 'justify-content-center', 'align-items-center');
         square.innerHTML = `<a href="#" class="nodeco">${counter + 1}</a>`;
         counter++;
         row.appendChild(square);
      }

      box.appendChild(row);
   }
}