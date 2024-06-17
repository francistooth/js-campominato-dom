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

   let bombs = arrayGenerator(1, (r*c), 16);

   console.log(bombs);

   let score = 0;

   for (let i = 0; i < r; i++) {
      let row = document.createElement("div");
      row.classList.add('row');

      
      for (let j = 0; j < c; j++) {
         let square = document.createElement("div");
         square.classList.add('square', 'd-flex', 'justify-content-center', 'align-items-center');
         square.innerHTML = `<a href="#" class="nodeco">${counter + 1}</a>`;
         square.addEventListener("click", function(){
            this.classList.add("clicked");

            if (bombs.includes(counter)) {
               this.classList.add("bomb");

               console.log(`bomba presa! punteggio ${score}`)
            } else {
               this.classList.add("safe");
               score++;

               console.log(`sei al sicuro per ora, punteggio provvisorio ${score}`)
            }
         });
         counter++;
         row.appendChild(square);
      }

      box.appendChild(row);
   }
}

function arrayGenerator(min, max, l) {
   let array = [];

   for (let i = 0; array.length < l; i++) {
      let random = randomNumber(min, max);

      if (!array.includes(random)) {
         array.push(random);
      }
   }

   return array;
}

function randomNumber(min, max) {
   return random = Math.floor(Math.random() * max) + min;
}