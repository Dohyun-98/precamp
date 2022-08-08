const menuhome = () =>{
    document.getElementById("contentFrame").setAttribute("src","./home.html")
    document.getElementById("manuhome").style = "color: black; background-color : white;"   
    document.getElementById("manujukbox").style = "color: white; background-color : #2982b5;" 
    document.getElementById("manugame").style = "color: white; background-color : #2982b5;"    
}

const menujukbox = () =>{
    document.getElementById("contentFrame").setAttribute("src","./jukbox.html")    
    document.getElementById("manujukbox").style = "color: black; background-color : white;"
    document.getElementById("manuhome").style = "color: white; background-color : #2982b5;" 
    document.getElementById("manugame").style = "color: white; background-color : #2982b5;"        
}

const menugame = () =>{
    document.getElementById("contentFrame").setAttribute("src","./game.html")  
    document.getElementById("manugame").style = "color: black; background-color : white;"  
    document.getElementById("manujukbox").style = "color: white; background-color : #2982b5;" 
    document.getElementById("manuhome").style = "color: white; background-color : #2982b5;"        
}
