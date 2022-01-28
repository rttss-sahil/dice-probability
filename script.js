
const main = () => {
  function rollDice(min, max) {
    return min + Math.floor(Math.random() * (max-min + 1))
  }
  const rollDice50Times = () => {
    let data = [];
    for (let i = 0; i < 50; i++) {
      let diceResult = rollDice(1, 6);
      data.push(diceResult);
    }
    return data;
  }
  const assignToGroups = () => {
    let data = [];
    for (let i = 0; i < 10; i++) {
      let diceData = rollDice50Times();
      data.push(diceData)
    }
    return data;
  }
  return assignToGroups();
}
let mainData = main();
let romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];

let list = document.querySelector('.list');
let htmlData = mainData.map((item, index) => (`<ul key='${index
+1}'><h2>${romanNumerals[index]}</h2>${item.map((data, i) => (`<li key='${i+1}'>${data}</li>`))}</ul>`))
let newData = [];
let regex = /,/g;
htmlData.forEach((item) => {
  newData.push(item.replaceAll(regex, ''));
})
const string1 = newData.join('');
list.innerHTML = string1;







let point2 = document.querySelector('.point2');
let probabilityOf1Data = [];
let probabilityOf1 = mainData.forEach(item => {
  probabilityOf1Data.push(item.filter(element => element == '1').length)
});
const probabilityOf1Html = probabilityOf1Data.map((item, index) => (`<ul key="${index+1}"><h5>a<sub>${index+1}</sub></h5><li>${item}</li></ul>`))
const string2 = probabilityOf1Html.join('');
point2.innerHTML = string2;







let point3 = document.querySelector('.point3');
let probabilityOf1by50Data = [];
let probabilityOf1by50 = probabilityOf1Data.map(item => {
  let i;
  i = item/50;
  return i;
})
let probabilityOf1by50Html = probabilityOf1by50.map((item, index) => (`<ul key='${index+1}'><h5>a<sub>${index+1}</sub>/50</h5><li>${item}</li></ul>`));
const string3 = probabilityOf1by50Html.join('');
point3.innerHTML = string3;






let point4 = document.querySelector('.point4');
let probabilityOf1byGroupsData = [];
for (let i = 0; i < probabilityOf1Data.length; i++) {
  let j = 0;
  let sum = 0;
  while (j <= i) {
    sum += probabilityOf1Data[j];
    j++;
  }
  let division = sum / (50 * (i+1))
  probabilityOf1byGroupsData.push(division.toFixed(2));
}
let probabilityOf1byGroupsHtml = probabilityOf1byGroupsData.map((item, index) => (`<ul key="${index+1}"><h5>Upto ${index+1}</h5><li>${item}</li></ul>`));
const string4 = probabilityOf1byGroupsHtml.join('');
point4.innerHTML = string4;







let point5 = document.querySelector('.point5');
let probabilityOf2Data = [];
let probabilityOf2 = mainData.forEach(item => {
  probabilityOf2Data.push(item.filter(element => element == '2').length)
});
let probabilityOf2by50Data = [];
let probabilityOf2by50 = probabilityOf2Data.map(item => {
  let i;
  i = item/50;
  return i;
})
let probabilityOf2byGroupsData = [];
for (let i = 0; i < probabilityOf2Data.length; i++) {
  let j = 0;
  let sum = 0;
  while (j <= i) {
    sum += probabilityOf2Data[j];
    j++;
  }
  let division = sum / (50 * (i+1))
  probabilityOf2byGroupsData.push(division.toFixed(2));
}
let probabilityOf2byGroupsHtml = probabilityOf2byGroupsData.map((item, index) => (`<ul key="${index+1}"><h5>Upto ${index+1}</h5><li>${item}</li></ul>`));
const string5 = probabilityOf2byGroupsHtml.join('');
point5.innerHTML = string5;








let point6 = document.querySelector('.point6');
let probabilityOf3Data = [];
let probabilityOf3 = mainData.forEach(item => {
  probabilityOf3Data.push(item.filter(element => element == '3').length)
});
let probabilityOf3by50Data = [];
let probabilityOf3by50 = probabilityOf3Data.map(item => {
  let i;
  i = item/50;
  return i;
})
let probabilityOf3byGroupsData = [];
for (let i = 0; i < probabilityOf3Data.length; i++) {
  let j = 0;
  let sum = 0;
  while (j <= i) {
    sum += probabilityOf3Data[j];
    j++;
  }
  let division = sum / (50 * (i+1))
  probabilityOf3byGroupsData.push(division.toFixed(2));
}
let probabilityOf3byGroupsHtml = probabilityOf3byGroupsData.map((item, index) => (`<ul key="${index+1}"><h5>Upto ${index+1}</h5><li>${item}</li></ul>`));
const string6 = probabilityOf3byGroupsHtml.join('');
point6.innerHTML = string6;













let point7 = document.querySelector('.point7');
let probabilityOf4Data = [];
let probabilityOf4 = mainData.forEach(item => {
  probabilityOf4Data.push(item.filter(element => element == '4').length)
});
let probabilityOf4by50Data = [];
let probabilityOf4by50 = probabilityOf4Data.map(item => {
  let i;
  i = item/50;
  return i;
})
let probabilityOf4byGroupsData = [];
for (let i = 0; i < probabilityOf4Data.length; i++) {
  let j = 0;
  let sum = 0;
  while (j <= i) {
    sum += probabilityOf4Data[j];
    j++;
  }
  let division = sum / (50 * (i+1))
  probabilityOf4byGroupsData.push(division.toFixed(2));
}
let probabilityOf4byGroupsHtml = probabilityOf4byGroupsData.map((item, index) => (`<ul key="${index+1}"><h5>Upto ${index+1}</h5><li>${item}</li></ul>`));
const string7 = probabilityOf4byGroupsHtml.join('');
point7.innerHTML = string7;















let point8 = document.querySelector('.point8');
let probabilityOf5Data = [];
let probabilityOf5 = mainData.forEach(item => {
  probabilityOf5Data.push(item.filter(element => element == '5').length)
});
let probabilityOf5by50Data = [];
let probabilityOf5by50 = probabilityOf5Data.map(item => {
  let i;
  i = item/50;
  return i;
})
let probabilityOf5byGroupsData = [];
for (let i = 0; i < probabilityOf5Data.length; i++) {
  let j = 0;
  let sum = 0;
  while (j <= i) {
    sum += probabilityOf5Data[j];
    j++;
  }
  let division = sum / (50 * (i+1))
  probabilityOf5byGroupsData.push(division.toFixed(2));
}
let probabilityOf5byGroupsHtml = probabilityOf5byGroupsData.map((item, index) => (`<ul key="${index+1}"><h5>Upto ${index+1}</h5><li>${item}</li></ul>`));
const string8 = probabilityOf5byGroupsHtml.join('');
point8.innerHTML = string8;















let point9 = document.querySelector('.point9');
let probabilityOf6Data = [];
let probabilityOf6 = mainData.forEach(item => {
  probabilityOf6Data.push(item.filter(element => element == '6').length)
});
let probabilityOf6by50Data = [];
let probabilityOf6by50 = probabilityOf6Data.map(item => {
  let i;
  i = item/50;
  return i;
})
let probabilityOf6byGroupsData = [];
for (let i = 0; i < probabilityOf6Data.length; i++) {
  let j = 0;
  let sum = 0;
  while (j <= i) {
    sum += probabilityOf6Data[j];
    j++;
  }
  let division = sum / (50 * (i+1))
  probabilityOf6byGroupsData.push(division.toFixed(2));
}
let probabilityOf6byGroupsHtml = probabilityOf6byGroupsData.map((item, index) => (`<ul key="${index+1}"><h5>Upto ${index+1}</h5><li>${item}</li></ul>`));
const string9 = probabilityOf6byGroupsHtml.join('');
point9.innerHTML = string9;







let point10 = document.querySelector('.point10');
let mainProbability = [
  romanNumerals,
  probabilityOf1Data,
  probabilityOf2Data,
  probabilityOf3Data,
  probabilityOf4Data,
  probabilityOf5Data,
  probabilityOf6Data,
]
let alphas = ['Sr No', 'A', 'B', 'C', 'D', 'E', 'F'];
let mainProbabilityHtml = mainProbability.map((element, index) => (`<ul key="${index+1}"><h5>${alphas[index]}</h5>${element.map((data, index) => (`<li key="${index+1}">${data}</li>`))}</ul>`))
const string10 = mainProbabilityHtml.join('');
const abc = string10.replaceAll(',', '');
point10.innerHTML = abc;



