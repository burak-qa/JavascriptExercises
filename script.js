// New worker easy way
function Worker(firstName, lastName, number){
    this.firstName = firstName;
    this.lastName = lastName;
    this.number = number;
    this.showInformation = function(){
        return 'First Name: ' + this.firstName + '\nLast Name: ' + this.lastName + '\nNumber: ' + this.number;
    }
}
const worker1 = new Worker('Ali', 'Sahin', 123456);
const worker2 = new Worker('Mehmet', 'Sari', 134567);
console.log(worker1.showInformation());
console.log(worker2.showInformation());
// -------------------------------------------------------------------

function send(element){
    element.innerHTML = "Message sent!"
    element.style.color = "red";
}

function mouseover(){
    const fare = document.getElementById("par1");
    fare.innerHTML = "Are you sure? Is it your final decision?"
}

function mouseout(){
    const fare = document.getElementById("par1");
    fare.innerHTML = "Exercise"
}

// --------------------------------------------------------------------

