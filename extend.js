 class Teammember{
    name;
    location;
    constructor(name,location){
        this.name = name;
        this.location = location;
    }
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback`)
        }
    
 }
 
 
 //syntactic sugar
class Instructor extends Teammember{
    name;
    designation = 'web team instructor'
    team = 'web team'
    location;
    constructor (name,location){
        super(name,location);
    }
    startSupportSession(time){
        console.log(`start the suppport at ${time}`) 
}
createQuiz(module)
{
    console.log(`please create Quiz for ${module}`)
} 
provideFeedback(){
console.log(`${this.name} thank you for your feedback`)
}
}

 //syntactic sugar
 class Developer extends Teammember{
    name;
    designation = 'web team instructor'
    team = 'web team'
    tech;
    location;
    constructor (name,location,tech){
        super(name,location)
        this.tech = tech;
    }
    developFeature(feature){
        console.log(`start the suppport at ${feature}`) 
}
release(version)
{
    console.log(`please create Quiz for ${version}`)
} 
provideFeedback(){
console.log(`${this.name} thank you for your feedback`)
}
}

// job placement class 
class JobPlacement extends Teammember{
    name;
    designation = 'job placement developer'
    team = 'job placement team'
    tech;
    location;
    constructor (name,location){
        super(name,location)
        this.tech = tech;
    }
    developFeature(feature){
        console.log(`start the suppport at ${feature}`) 
}
release(version)
{
    console.log(`please create Quiz for ${version}`)
} 
provideFeedback(){
console.log(`${this.name} thank you for your feedback`)
}
}
const alia = new Developer('alia','dhaka','react');
console.log(alia);

const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
console.log(output);