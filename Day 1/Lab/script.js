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