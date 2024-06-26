//QUESTION1
function peopleData(people){
    return people.filter(c=>c.age>18).map(c=>c.name)
};
 const people = [
    { name: 'Alice', age: 17 },
    { name: 'Eunice', age: 22 },
    { name: 'Charlie', age: 14 },
    { name: 'Max', age: 19 },
  ];
    console.log(peopleData(people));

//QUESTION2 
function sortProducts (products){
    let items=Object.groupBy(products,item=>item.category)
    console.log(items);
}
const products = [
    { name: 'Laptop', price: 1200, category: 'Electronics' },
    { name: 'Shirt', price: 25, category: 'Clothing' },
    { name: 'Headphones', price: 80, category: 'Electronics' },
    { name: 'Shoes', price: 60, category: 'Clothing' },
  ];
 sortProducts(products);

//QUESTION3
function sortStudents(students){
  // Use map to calculate the average test score for each student
  const averagesScores = students.map(student => {
    const sum = student.scores.reduce((acc, score) => acc + score);
    return { name: student.name, average: sum / student.scores.length };
  });
  const topAverages = averagesScores.filter(student => student.average >= 85);
  console.log(topAverages);

}


   const students = [
    { name: 'John', scores: [90, 80, 85] },
    { name: 'Jane', scores: [95, 92, 88] },
    { name: 'Jim', scores: [70, 80, 75] },
    { name: 'Jill', scores: [85, 90, 84] },
  ];
  sortStudents(students);

  //QUESTION4
  function cars(car){
    currentYear=new Date().getFullYear()
  car["age"] = (`${currentYear-car.year}`)
  console.log(car);
}
  const car = {
  make: 'Ford',
  model: 'Ranger',
  year: 2023,
  displayInfo: function() {
    console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);

  },
};
cars(car)
