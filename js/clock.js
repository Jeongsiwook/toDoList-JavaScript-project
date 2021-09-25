const clockH2 = document.querySelector("h2#clock");

function handleClock() {
    // Date object: 당시의 현재 시간을 알려줌
    const date = new Date();
    // padStart(): 앞에 int 길이만큼 자리의 빈자리를 뒤에 string으로 채움
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clockH2.innerText = `${hours}:${minutes}:${seconds}`;    
}

handleClock();
setInterval(handleClock, 1000); // 1000ms마다 handleClock함수를 실행