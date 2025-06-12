const webDesigner = {
    name: 'YOUR NAME',
    yearsAlive: [1992, 2022],
    imgSrc: 'user.jpg',
    skills: ['Photoshop', 'HTML', 'CSS', 'JS'],
    diet: {
        food: 'Indomi',
        drinks: ['Coffee', 'Nescafe', 'tea', 'water']
    }
}

//write your name instead of the YOUR NAME placeholder
webDesigner.name = "Mohab Wafaie";

/*write a getAge function that takes the years alive array and returns your age,
 save the value you return in a const of name age*/
var getAge = (yearsAlive) => yearsAlive[1] - yearsAlive[0];
const age = getAge(webDesigner.yearsAlive);
console.log(age);

/*Divide the Webdesign skills into designSkills and developmentskills using ES6*/
const [designSkills, ...developmentSkills] = webDesigner.skills;
console.log(designSkills);
console.log(developmentSkills);

/*add Those extra skills to the developmentskills array ['ES6', 'ES2015'] and add all of them into a new updatedDevSkills const*/
developmentSkills.push('ES6', 'ES2015');
const updatedDevSkills = [...developmentSkills];
console.log(updatedDevSkills);

/*destructure the diet object and using new ES6 write a function that returns drinks that contain the letter t*/
const { food, drinks } = webDesigner.diet;
const getDrinksWithT = (drinks) => drinks.filter(drink => drink.includes('t'));
const drinksWithT = getDrinksWithT(drinks);



function buildID () {
  const userID = `
  <div class="inner-container">
    <img src="img" alt="">
    <div class="info">
      <h1>
        ${webDesigner.name}
      </h1>
      <p><span class="text-grey">Age:</span> ${age}</p>
      <p><span class="text-grey">Design Skills:</span> ${designSkills}</p>
      <p><span class="text-grey">Dev Skills:</span> ${developmentSkills}</p>
      <p><span class="text-grey">Food:</span> ${food}</p>
      <p><span class="text-grey">Drinks:</span>${drinksWithT}</p>
    </div>
  </div>
  `;
  return userID
}
document.getElementsByClassName('card')[0].innerHTML = buildID();