// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘

function createUser(Willie, Williams) {
  user = {
      firstName: Willie,
      lastName: Williams
  }
  return user;
}

function setAge(user, age){
      user.age = 32;
      return user;
  }

function incrementAge(user){
      user.age += 1
      return user
  }

function fixCar(car) {
      car.needsMaitenance = false;
      return car;
  }


function addGrades(student, newGrades) {
      student.grades = student.grades.concat(newGrades);
      return student;
  }

function getDataType(a, b){
      const result = typeof a[b]
      return result
  }

function addTodo(todos, newTodo){
      todos.push(newTodo);
      return todos;
  }

function addSong (playlist, song) {
      playlist.songs.push(song);
      playlist.duration += songs.duration;
      
      return playlist
  }


  function updateReportCard(reportCard, newGrade) {
      reportCard.grades.push(newGrade);
      
      if (newGrade < reportCard.lowestGrade){
          reportCard.lowestGrade = newGrade;
      }

      if (newGrade > reportCard.highestGrade) {
          reportCard.highestGrade = newGrade;
      }
      let gradeSum = 0;
      for (const grade of reportCard.grades) {
          gradeSum += grade;
      }
      const gradeAverage = gradeSum / reportCard.grades.length;
      reportCard.average = gradeAverage;
      return reportCard;
  }
// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
