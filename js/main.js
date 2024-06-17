// comincio analizzando il click del submit della select della difficoltà

const form = document.forms[0];

// console.log(form.id);

const select = form.elements[0];
const btnSend = form.elements[1];


let msg = "error message! no option selected";

addEventListener("submit", function(){
   spawnGrid(select.value);
   this.event.preventDefault();
});