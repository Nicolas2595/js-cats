// milestone 1:
// definire un array di oggetti; ogni oggetto
// rappresenta un gatto, che è caratterizzato da:
// nome, età, colore e sesso.
// Tramite la funzione forEach, stampare in pagina
// tutti i gattini, ciascuno con il proprio colore e il
// proprio nome.

const cats = [
    {
       name: "Garfield",
       age: 3,
       color: "#F59E36",
       gender: "male"
    },
    {
        name: "Pilou",
        age: 2,
        color: "#E5B69A",
        gender: "female" 
     },
     {
        name: "Silvestro",
        age: 18,
        color: "#000000",
        gender: "male" 
     },
     {
        name: "Milady",
        age: 17,
        color: "#A1499F",
        gender: "female" 
     },
     {
        name: "Tom",
        age: 5,
        color: "#5C6B7E",
        gender: "male" 
     }
];

const container = document.getElementById("container");
const maleContainer = document.getElementById("male");
const femaleContainer = document.getElementById("female");

cats.forEach(
    (element) => {
        // console.log(element);
        container.innerHTML += 
        `
            <div>
                <i class="fas fa-cat" style="color: ${element.color}"></i>
                <h2 style="color: ${element.color}">${element.name}</h2>
            </div>

        `;
    }
);

// milestone 2:
// dividere i gatti in due contenitori distinti in base
// al sesso e aggiungere a fianco di ogni gattino un
// fiocco colorato di rosa se femmina o di blu se
// maschio.
// Il colore del fiocco deve essere più tenue se il
// gatto è più giovane, più scuro se il gatto è più
// vecchio.

const pink = "pink";
const blue = "blue";

const newCats = cats.map(
    (element) => {
        
        let ribbonColor = "";

        if(element.gender == "male") {
            ribbonColor = blue;
        } else {
            ribbonColor = pink;
        }

        // Forma con l'operatore ternario
        // let ribbonColor = (element.gender == "male") ? blue : pink;

        return {
            ...element,
            ribbon: {
                color: ribbonColor,
                opacity: element.age * 5 / 100
            }
        }
    }
);
// console.log(newCats);

const maleCats = newCats.filter(
    (element) => {
        return element.gender == "male";
    }
);
// console.log(maleCats);
maleCats.forEach(
    (element) => {
        // console.log(element);
        maleContainer.innerHTML += 
        `
            <div>
                <i class="fas fa-cat" style="color: ${element.color}"></i>
                <i class="fas fa-ribbon" style="color: ${element.ribbon.color}; opacity: ${element.ribbon.opacity}"></i>
                <h2 style="color: ${element.color}">${element.name}</h2>
            </div>

        `;
    }
);

const femaleCats = newCats.filter(
    (element) => {
        return element.gender == "female";
    }
);
// console.log(femaleCats);
femaleCats.forEach(
    (element) => {
        // console.log(element);
        femaleContainer.innerHTML += 
        `
            <div>
                <i class="fas fa-cat" style="color: ${element.color}"></i>
                <i class="fas fa-ribbon" style="color: ${element.ribbon.color}; opacity: ${element.ribbon.opacity}"></i>
                <h2 style="color: ${element.color}">${element.name}</h2>
            </div>

        `;
    }
);

// milestone 3:
// creare un nuovo array con prima tutti i gattini
// femmina e poi tutti i gattini maschio, inserendo
// solamente nome e colore e colore e opacità del
// fiocco per ogni gatto.


// Soluzione ES5

// const orderedCats = [];

// for (var i = 0; i < femaleCats.length; i++) {
//     orderedCats.push(femaleCats[i]);
// }
// for (var i = 0; i < maleCats.length; i++) {
//     orderedCats.push(maleCats[i]);
// }
// console.log(orderedCats);

// Soluzione ES6

const orderedCats = [...femaleCats, ...maleCats];
// console.log(orderedCats);

const finalCats = orderedCats.map (
    (element) => {
        // console.log(element);
        
        // Soluzione ES5
        
        // const newElement = {
        //     name: element.name,
        //     color: element.color,
        //     ribbon:element.ribbon
        // };

        // Soluzione ES6 Destrutturazione

        // const { name, color, ribbon } = element;
        // const newElement = {
        //     name,
        //     color,
        //     ribbon
        // };

        //Soluzione ES6 Destrutturazione con lo Spread

        const { age, gender, ...newElement } = element;
        // console.log(age);
        // console.log(gender);
        // console.log(newElement);
    
        return newElement;
    }
);
console.log(finalCats);

const containerNew = document.getElementById("container-new");

finalCats.forEach(
    (element) => {
        containerNew.innerHTML += 
        `
            <div>
                <i class="fas fa-cat" style="color: ${element.color}"></i>
                <i class="fas fa-ribbon" style="color: ${element.ribbon.color}; opacity: ${element.ribbon.opacity}"></i>
                <h2 style="color: ${element.color}">${element.name}</h2>
            </div>

        `;
    }
);



