function Nyom(){


let pont=0;
if(document.getElementById("2").checked==true){
    pont++;
}

if(document.getElementById("Steak").checked==true){
    pont++;
}
if(document.getElementById("Rantott").checked==true){
    pont++;
}
if(document.getElementById("varos").value=="Igaz"){
    pont++;
}
if(document.getElementById("egyes").value=="2022"){
    pont++;
}
if(document.getElementById("kettes").value=="65"){
    pont++;
}
document.getElementById("valaszok").innerHTML=pont+" pontod lett az 5 kérdésből";

}