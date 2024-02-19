function bonusScoringSystem (input){
let studentsNum = input.shift();
let lecturesNum = input.shift();
let addBonus = input.shift();
let newArr = input.sort((a,b)=>a-b);
let largest = newArr.pop();
let maxBonus = (largest/lecturesNum)*(5+Number(addBonus))


console.log(`Max Bonus: ${Math.ceil(maxBonus)}.\nThe student has attended ${largest} lectures.`);
}
bonusScoringSystem([
    '5',  '25', '30',
    '12', '19', '24',
    '16', '20'
  ]
  );
// bonusScoringSystem([
//     '10', '30', '14', '8',
//     '23', '27', '28', '15',
//     '17', '25', '26', '5',
//     '18'
//   ]
//   );