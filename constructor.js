//syntactic sugar
class Instructor {
    name;
    designation = 'web team instructor'
    team = 'web team'
    location;
    constructor (name,location){
this.name = name;
this.location = location;
    }
    startSupportSession(time){
        console.log(`start the suppport at ${time}`) 
}
createQuiz(module)
{
    console.log(`please create Quiz for ${module}`)
}   
}
const amir = new Instructor('amir','india');
console.log(amir);
amir.startSupportSession('9:00pm');
amir.createQuiz(60);