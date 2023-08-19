const Enddate = "20 sep 2023 11:59 PM"
document.getElementById("end-date").innerText = Enddate;
const input = document.querySelectorAll("input")


// const clock =()=>{

// }

function clock(){
    const end = new Date(Enddate)
    const now = new Date() // Current date
    console.log(end, now); // convert the milisec to sec
    const diff = (end - now)/1000; 
    console.log(diff)

    if (diff<0){
        return;
    }

    //Covert the sec into days, hours, min and sec
    const days = Math.floor(diff/86400)
    input[0].value = days

    const remain = diff % 86400;
    console.log(remain) 

    const hours = Math.floor(remain/3600)
    console.log(hours)
    input[1].value = hours

    const remain1 = remain % 3600; 
    console.log(remain1)

    const minutes = Math.floor(remain1/60);
    console.log(minutes)
    input[2].value = minutes

    const remain2 = remain1 % 60
    console.log(remain2)

    const sec = Math.floor(remain2);
    console.log(sec)
    input[3].value = sec
    
}
//initial call
clock()

setInterval(clock, 1000)