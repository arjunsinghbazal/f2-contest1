/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map(function(el){
    if(el.marks>50){
      console.log(el)
    }
  })
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(function(el){
    if(el.marks>50){
      console.log(el)
    }
  })
}

function addData() {
  //Write your code here, just console.log
  arr.push({id:4,name:"susan",age:"20",marks:45})
  console.log(arr);
}

function removeFailedStudent() {
  arr = arr.filter(el => el.marks >= 50);
  console.log(arr);
  //Write your code here, just console.log
}

function concatenateArray() {
  let nArr = [
    {id: 5, name: "Ajju", age: "22", marks: 60},
    {id: 6, name: "Munna", age: "23", marks: 40},
    {id: 7, name: "raja", age: "24", marks: 70}
  ];
  let concatenat = arr.concat(nArr);
  console.log(concatenat);
  //Write your code here, just console.log
}
