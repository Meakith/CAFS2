// Testuosime šį masyvą
let numbers = [5, 1, 7, 2, -9, 8, 2, 7, 9, 4, -5, 2, -6, -4, 6];
// 1. Parašykite funkciją arrDoubled, kuri sukuria ir grąžina naują masyvą, kurio elementai padauginti iš 2;
function arrDoubled(numbers){
    double = [];
    for (i = 0; i < numbers.length; i++) {
        double.push(numbers[i] * 2);
    }
    return double;
}

console.log(arrDoubled(numbers));

// 2. Parašykite funkciją arrMultiplied, kuri sukuria ir grąžina naują masyvą, kurio elementai padauginti iš argumentu nurodyto skaičiaus

function arrMultiplied(numbers,arrMultipliedBy){
    return numbers.map(x => x * arrMultipliedBy)
}

console.log(arrMultiplied(numbers,5));

// 3. Parašykite funkciją arrCountTwos, kuri suskaičiuoja dvejetus masyve

function arrCountTwos(numbers){
    let whichNumber = 2;
    let counter = 0;

    for (number of numbers) {
        if (number == whichNumber) {
              counter++;
          }
      };

    return counter;
}

console.log(arrCountTwos(numbers));

// 4. Parašykite funkciją arrIndexOfFirst, kuri grąžintu pirmo surasto, argumentu nurodyto skaičiaus, indeksą masyve. Jei skaičius nerastas funkcija turi grąžinti -1.

function arrIndexOfFirst(numbers){
    let index = numbers.indexOf(5);

    return index
}

console.log(arrIndexOfFirst(numbers));

// 5. Parašykite funkciją arrIndexOfLast, kuri grąžintu paskutinio surasto, argumentu nurodyto skaičiaus, indeksą masyve. Jei skaičius nerastas funkcija turi grąžinti -1.

function arrIndexOfLast(numbers){
    let index = numbers.indexOf(6);

    return index
}

console.log(arrIndexOfLast(numbers));

// 6. Parašykite funkciją reverseNumbers, kuri pakeis skaičius vietomis taip, kad pirmas skaičius taps paskutiniu, antras piešpaskutiniu, o buvęs paskutinis taps pirmu, priešpaskutinis bus antru.
// Pvz.: Turime skaičius 32243;
// Iškvietus funkciją rezultata bus: 34223

function reverseNumbers(numbers){
    let reverse = numbers.reverse(numbers);

    return reverse
}

console.log(reverseNumbers(numbers));

// 7. Parašykite  funkciją, kuri kaip argumentą priims skaičių masyvą ir suras atitinkamai mažiausią ir didžiausią skaičių bei juos grąžins.
// Pvz.: Turime masyvą: [8,5,4,2,7,1,9]
// Iškvietus funkciją rezultata bus: "Mažiausas: 1, Didžiausas: 9"

function lowestHighest(numbers){
    let max = Math.max.apply(null, numbers)
    
    let min = Math.min.apply(null, numbers);

    return [max,min]
}

console.log(lowestHighest(numbers));

// 8. Parašykite  funkciją checkForLetters, kuri priims du argumentus: Pirmas argumentas bus sakinys (arba žodžiai (-is)) ir antras argumentas bus raidė (kaip string). Funkcija turės suskaičiuoti kiek pirmu agrumentu nurodytame sakinyje/žodžiuose(-yje) yra antru argumentu nurodytų raidžių ir gražinti tų raidžių sumą su sakiniu pvz.: “Raidė “v” sakinyje rasta 4 kartus”.



// 9. Parašykite funckiją, kuri ras visus skaičius esančius msyve ir gražins juos kaip atsikrą masyvą. Naujame masyve visi skaičiai bus surikiuoti nuo mažiausio iki didžiausio.

let arr2 = [8, 'Hello', 'click', 'u', 7, 4, 'a', 'a', 3, 6, "chair", ,10, 1];

// Iškvietus funkciją rezultata bus: [1,3,4,6,7,8,10];

function getNumbers(arr2){
    let numbers = arr2.filter(element => typeof element === 'number')

    let sort = numbers.sort((a,b) => a-b)

    return sort
}

console.log(getNumbers(arr2));

// 10. Sukurkite funkciję checkIfAllSmaller(arr, max), BE MASYVO METODŲ, kuri patikrintų ar visi skaičiai masyve yra didesni negu perduota reikšmė max;
// Pvz.: Turime masyvą: let arr1 = [2, 7, 6, 9, 5];
// Iškvietus funkciją checkIfAllSmaller(arr1, 5) rezultata bus: False

function checkIfAllSmaller(numbers, max){

    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] >= max){
           return true;
        }else if(numbers[i] < max){
            return false;
        }
     }
}

console.log(checkIfAllSmaller(numbers,10));
// 11. Parašykite funkciją filteredByLetter, kuri turi du parametrus: 1. masyvas; 2. raidė. Funkcija sukuria ir grąžina naują masyvą, kuriame yra visi masyvo, nurodyto kaip pirmas parametras elemntai, kuriuose galima rasti antru paramatetru nurodytą raidę.
// Testuosime šį masyvą
let citiesOfLithuania = [
  'Vilnius',
  'Kaunas',
  'Klaipėda',
  'Šiauliai',
  'Panevėžys',
  'Alytus',
  'Marijampolė',
  'Mažeikiai',
  'Jonava',
  'Utena',
];

function filteredByLetter(citiesOfLithuania,letter){
    


}

// 12. Parašykite penkias funkcijas:
// - calculateValue()
function calculateValue(num1,num2,action){
    if(isNaN(num1) || isNaN(num2)){
      return 'its not a number';
    }

    if(action == 'addition') {
        outcome = addition(num1,num2);
        return outcome;

      }else if(action == 'subtraction') {
        outcome = subtraction(num1,num2);
        return outcome;

      }else if(action == 'multiplication') {
        outcome = multiplication(num1,num2);
        return outcome;

      }else if(action == 'division') {
        outcome = division(num1,num2);
        return outcome;
      };
    }
console.log(calculateValue(5,5,'division'));
// - addition()

function addition(num1,num2){
    let outcome = num1 + num2;
    return outcome;
}
// - subtraction()

function subtraction(num1,num2){
    let outcome = num1 - num2;
    return outcome;
}
// - multiplication()

function multiplication(num1,num2){
    let outcome = num1 * num2;
    return outcome;
}
// - division() 

function division(num1,num2){
    let outcome = num1 / num2;
    return outcome;
}

// Pagridinė funkcija bus calculateValue(num1, num2, action), kuri priims tris argumentus: a) num1 - skaičius;b) num2 - skaičius; c) action - (matematinis veiksmas kaip string pvz. “substraction”). Būtina, kad funckija validuotų ar num1 ir num2 yra skaičiai.

// Priklausomai trečio argumento (action), su pirmais dviem (num1 ir num2) bus atliekamas matematinis veiksmas ir kviečiama viena iš keturių funkcijų, kurios priims du argumentus (num1 ir num2) ir grąžins atlikta veiksmą.

// Pastaba: šios funkcijos: addition(), subtraction(), multiplication(), division() turi būti kviečiamas calculateValue() viduje, o aprašomos išorėje.
