//array.forEach -> execute provided callback function for each array element

let student = ["eli", "abu","minah"];
function capitalize(string, index, array){
  array[index] = string[0].toUpperCase() + string.substring(1)
}
function print(element){
  console.log(element)
}
student.forEach(capitalize);
student.forEach(print)