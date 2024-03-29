import userData from "./data.js";

/* Totally Private Data Farm 

Good news, renown advertising firm Evil Corp. wants to purchase our 
private user data! 

We'd never do this in real life of course, but just for practice 
let's pretend we're unethical web hackers and transform the data 
in the way Evil Corp. has requested. They're quite particular and
just want an array of users with a fullname and human readable
birthday.   

Write a function that maps through the current data and returns
a new an array of objects with only two properties: 
fullName and birthday. Each result in your 
array should look like this when you're done: 

{
    fullName: "Levent Busser", 
    birthday: "Fri Aug 20 1971"
}

Read about toDateString() for info on formatting a readable date. 

*/
function transformData(data){
    let userArr = []
    
    for (let i = 0; i < userData.length; i++) {
        let fullName = `${userData[i].name.title} ${userData[i].name.first} ${userData[i].name.last}`
        let readDate = new Date(userData[i].dob.date)
        readDate = readDate.toDateString()
        let person = {
            fullName: fullName, 
            birthday: readDate
        }
        userArr.push(person)
    }
    return userArr
}

console.log(transformData(userData));