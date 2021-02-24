



 let Student={
     age:21,
     name: 'Ivan',
     last_name:'Ivanov',
     course:3,
     average_score: 9,
     scholarship: true

 }



 delete Student.average_score

 Student.course = 4

 console.log(Student)



 console.log("name" in Student)
 console.log("average_csore" in Student)

 for (let key in Student){
     console.log(key);// покажет ключи
    //  console.log(Student[key])// покажет значение ключей
 }
 
