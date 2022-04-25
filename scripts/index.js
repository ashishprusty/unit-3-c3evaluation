// Store the wallet amount to your local storage with key "amount"

let arr = JSON.parse(localStorage.getItem("amount"))||0


function addmoney(){
    let value = document.getElementById("amount").value;

    arr= arr+Number(value);
    localStorage.setItem("amount",JSON.stringify(arr))
    window.location.reload()
}

let wallet = JSON.parse(localStorage.getItem("amount"));

let wallet_value = document.getElementById("wallet");

wallet_value.innerHTML = wallet

