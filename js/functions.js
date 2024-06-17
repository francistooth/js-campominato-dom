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

   // creo le bombe 

   const bombs = arrayGenerator(1, (r*c), 16);

   console.log(bombs);

   // inizializzo il punteggio

   let score = 0;

   // creo la griglia di numeri

   for (let i = 0; i < r; i++) {
      const row = document.createElement("div");
      row.classList.add('row');

      for (let j = 0; j < c; j++) {
         const square = document.createElement("div");
         square.classList.add('square', 'd-flex', 'justify-content-center', 'align-items-center');
         square.innerHTML = `<a href="#" class="nodeco">${counter + 1}</a>`;

         // gestisco i click sulle singole celle

         square.addEventListener("click", function(){
            this.classList.add("clicked");

            console.log(this.firstChild.innerHTML);

            if (bombs.includes(parseInt(this.firstChild.innerHTML))) {
               this.classList.add("bomb");

               console.log(`bomba presa! punteggio ${score}`)
            } else {
               this.classList.add("safe");
               score++;

               console.log(`sei al sicuro per ora, punteggio provvisorio ${score}`)
            }

            event.preventDefault();
         });

         counter++;
         row.appendChild(square);
      }

      box.appendChild(row);
   }
}

function arrayGenerator(min, max, l) {
   const array = [];

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