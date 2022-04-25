// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let wallet = JSON.parse(localStorage.getItem("amount"));

let wallet_value = document.getElementById("wallet");

wallet_value.innerHTML = wallet;

function confirm(){
    if(wallet<=100){
        alert("Insufficient Balance !")
    }else{
       wallet = wallet-100;
       localStorage.setItem("amount",JSON.stringify(wallet))
       window.location.reload()

       alert("Booking Successful!")
    }
}

let data = JSON.parse(localStorage.getItem("movies"));

let movie = document.getElementById("movie")

function appenddata(el){

   
        let box = document.createElement("div");

        let img = document.createElement("img");
        img.src = el.Poster;

        let title = document.createElement("h1");
        title.innerHTML = el.Title;

        box.append(img,title);
        movie.append(box)

}

appenddata(data)

