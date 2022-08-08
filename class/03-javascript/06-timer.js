let isStarted = false;

const lotto = () => {

    if (isStarted === false) {
        isStarted = true;
        document.getElementById("timeoutbutton").disabled = false
        let number = String(Math.floor(Math.random() * 1000000)).padStart(0, 6);
        document.getElementById("number").innerText = number;
        document.getElementById("number").style.color = "#" + number;
        let time = 3
        let timer

        timer = setInterval(() => {
            if (time >= 0) {
                let min = Math.floor(time / 60);
                let sec = String(time % 60).padStart(2, "0");
                document.getElementById("timer").innerText = min + ":" + sec;
                time = time - 1;
            } else {

                document.getElementById("timeoutbutton").disabled = true
                isStarted = false
                clearInterval("timer")
            }

        }, 1000);
    } else {


    }


}

