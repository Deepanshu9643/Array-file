/* @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];



function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((employee) =>{
    if (employee.profession ==="developer") {
      console.log(employee)
    }
  })
}

// PrintDeveloperbyMap();



function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((employee) =>{
    if (employee.profession=== "developer") {
      console.log(employee)
    }
  })
}

// PrintDeveloperbyForEach();



function addData() {
  //Write your code here, just console.log
  const newEmployee = { id:4, name:"neeraj", age:"24", profession:"intern" };
  arr.push(newEmployee)
  console.log(arr)
}

// addData();



function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter((employee) =>employee.profession !=="admin")
  console.log(arr)
}

// removeAdmin();



function concatenateArray() {
  //Write your code here, just console.log
  const newArr = [
    { id:5, name:"nikhil", age:"24", profession:"developer"},
    { id:6, name:"himanshu", age:"24", profession:"developer"},
    { id:7, name:"ali", age:"24", profession:"developer" },
  ];

  const concatenatedArray = arr.concat(newArr)
  console.log(concatenatedArray)
}

// concatenateArray();
