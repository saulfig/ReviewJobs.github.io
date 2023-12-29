const reviews = [
    {
    id: 0 , 
    name: "Saul Figuereo",
    job: "Software Engenieer",
    img: "./img-authors/DSC_1687 copy.jpg",
    text: "joven de 18 años dedicado al desarrollo de software,uno de mis fuertes son el diseño,manipular adobe ilustrator. también cuento con una especialización sobre base de datos y en proceso de mi aprendizaje como data science."
},
{
    id: 1 , 
    name: "Gianmarco Diaz",
    job: "Aerospace Engenieer",
    img: "./img-authors/gian.jpg",
    text: "joven de 17 años dedicado al ingenieria aerospacial, uno de mis fuertes son el juegos mentales, tengo habilidades como un gran coeficiente intelectual y quisiera poder aprender mas."
},

{       id: 2 , 
        name: "Briana Sosa",
        job: "Clinical Psychologist",
        img: "./img-authors/briana.JPG",
        text: "Falta abundar mas del area"
},
{
        id: 3 , 
        name: "Gamaliel ",
        job: " Systems Engenieer",
        img: "./img-authors/cine.jpg",
        text: "Falta abundar mas del area"
},

{
    
        id: 4 , 
        name: "Juan Monagas",
        job: "Software Engenieer",
        img: "./img-authors/juanedu.jpg",
        text: "Falta abundar mas del area"
},
{
        id: 5 , 
        name: "Karla Polanco",
        job: "Athele and Model",
        img: "./img-authors/kalla.jpg",
        text: "Falta abundar mas del area"
},
{
        id: 6 , 
        name: "Sol De Plata",
        job: "Interviewer",
        img: "./img-authors/sol.jpg",
        text: "Falta abundar mas del area"
},
{
    id: 6 , 
    name: "Julianny",
    job: "Psychologist",
    img: "./img-authors/miedosita.jpg",
    text: "Falta abundar mas del area"
},
{
    id: 6 , 
    name: "Isaias G",
    job: "Doctor",
    img: "./img-authors/isaias.jpg",
    text: "Falta abundar mas del area"
},
{
    id: 6 , 
    name: "Brayan",
    job: "Delivery",
    img: "./img-authors/lambe.jpg",
    text: "Falta abundar mas del area"
}


]

//select items 

const img = document.getElementById("Specialist");
const description = document.getElementById("Description");
const employee = document.getElementById("Employee");
const info = document.getElementById("info");

const prevt = document.querySelector(".prevt-image");
const next = document.querySelector(".next-image");
const Randombtn = document.querySelector(".random-button");

//set strarting item

let currentItem = 0
window.addEventListener("DOMContentLoaded" ,function () {
    showPerson(currentItem);

})

//show person based on item

function showPerson(person) {
    const items = reviews[person];
    img.src = items.img;
    description.textContent = items.name;
    employee.textContent = items.job;
    info.textContent = items.text;
}

//show person based on item



next.addEventListener("click", function () {
   currentItem++;
   if (currentItem > reviews.length -1) {
    currentItem = 0
   }
   showPerson(currentItem)
});

prevt.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
     currentItem = reviews.length -1;
    }
    showPerson(currentItem)
 });



 Randombtn.addEventListener("click", function () {
    currentItem = Math.floor(Math.random() * reviews.length);
    console.log(currentItem);
    showPerson(currentItem)
 });