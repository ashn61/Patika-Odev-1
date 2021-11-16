
 let Name = prompt("Lütfen İsminizi Giriniz : ");


const update=(t)=>{
    if (t < 10) {
        return "0" + t;
      }
      else {
        return t;
      }
}
const clock=()=>{
    var date= new Date()
    var hour=date.getHours()
    var min=date.getMinutes()
    var sec=date.getSeconds()


    hour=update(hour)
    min=update(min)
    sec=update(sec)
    let today = new Date()
    let dizi=new Array(7);
    dizi[0]="Pazar"
    dizi[1]="Pazartesi"
    dizi[2]="Salı"
    dizi[3]="Çarşamba"
    dizi[4]="Perşembe"
    dizi[5]="Cuma"
    dizi[6]="Cumartesi"
     document.querySelector("#clock").innerHTML= hour + ' : ' + min + ' : ' + sec +' '+ (dizi[today.getDay()]) +'  tarihinde Kodluyoruz front end development patikasını  1. ödevini yapıyoruz...'

}
let myName= document.querySelector("#name")
myName.innerHTML = `Merhaba, ${Name} Hoş Geldin! `

setInterval(clock, 1000); 

