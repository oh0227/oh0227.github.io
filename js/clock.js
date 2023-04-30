const clock = document.querySelector("#clock");



function getClock(){
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth()+1).padStart(2,"0");
    const date = String(today.getDate()).padStart(2,"0");
    const hour = String(today.getHours()).padStart(2,"0");
    const minute = String(today.getMinutes()).padStart(2,"0");
    const second = String(today.getSeconds()).padStart(2,"0");

    clock.innerText = (`${year}-${month}-${date}\n${hour}:${minute}:${second}`);

}

getClock();
setInterval(getClock, 1000);