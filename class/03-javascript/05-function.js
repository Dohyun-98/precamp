const lotto = ()=>{
    let number = String(Math.floor(Math.random()*1000000)).padStart(0,6);
    document.getElementById("number").innerText=number;
    document.getElementById("number").style.color="#"+number;
}