// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let wallet = JSON.parse(localStorage.getItem("amount"));

let wallet_value = document.getElementById("wallet");

wallet_value.innerHTML = wallet


// api = https://www.omdbapi.com/?apikey=2357e210&s=query

let movies_box = document.getElementById("movies");

 async function showdata(){
     let query = document.getElementById("search").value;
      try{

        let res = await fetch(`https://www.omdbapi.com/?apikey=2357e210&s=${query}`);

        let data = await res.json();

        // console.log(data)
       return data.Search
        // appenddata(data.Search)

      }
      catch(error){
          console.log(error)
      }
}

function appenddata(data){
    movies_box.innerHTML = null;
     data.forEach((el)=>{
       let box = document.createElement("div");

       let img = document.createElement("img");
       img.src = el.Poster;

       let title = document.createElement("h1");
       title.innerHTML= el.Title;

       let button = document.createElement("button");
       button.textContent = "Book now"
       button.addEventListener("click",function(){
           selected(el)
       })
       button.setAttribute("class","book_now")

       box.append(img,title,button);

       movies_box.append(box)
     })
}

 async function main(){
   let data =  await showdata();
//    console.log(data)

   if (data==undefined){
       return false;
   }
   appenddata(data)
}
let id;
function debounce(func,delay){
    if(id){
        clearTimeout(id)
    }

    id = setTimeout(()=>{
      func()
    },delay)

}
function selected(el){
    localStorage.setItem("movies",JSON.stringify(el))
    window.location.href="checkout.html"
}


