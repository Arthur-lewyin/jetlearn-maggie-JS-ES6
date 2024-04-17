let show =()=>{
let name=document.getElementById('name').value;
document.getElementById("display").innerHTML="wish you a very happy spiderman :)" +name;
document.getElementById('img').src="./Images/Spiderman.gif";
document.getElementById("content").innerHTML="New spiderman, new hopes and newer beginnings- all of us ardently wait for the clock to strike 12 and usher in the new spiderman. It's such a celebratory, positive time which keeps everyone in good spirits!";
document.getElementById('dis').style.color="#ffffff";
}

document.getElementById("btn").addEventListener("click",show)