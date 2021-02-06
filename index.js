//global variable
const find = document.getElementById("input");
const listItem = document.getElementById("list-item");
const searchInput = document.getElementById("search");
const arr = JSON.parse(localStorage.getItem("listArray"))   ;

// for search bar
function filter(){
    const search = document.getElementById("search");
    let searchValue = search.value;    
    
    // if(arr.includes(searchValue)){
    //     document.getElementById("demo").innerHTML = searchValue +"<br>"+ " Yes, it is in the above list " 
    // }else{
    //     document.getElementById("demo").innerHTML = "not found in the above list" ;
    // }

    const filteredArr = arr.filter(item => {
        return item.includes(searchValue);
    });

    
    create(filteredArr);
}



//function for button
function Add() {
    const find = document.getElementById("input");
    let inputValue = find.value;
    if (inputValue === ""){
      alert("Input cann't be blank")
      return
     }
    arr.push(inputValue);
    
    localStorage.setItem("listArray", JSON.stringify(arr));
    create(arr);
    find.value = "";
}

//writing function for show li in ol
function create(arr) {
    listItem.innerHTML = "";
    arr.forEach((item, idx) => {
        const list = document.createElement("li");
        const span = document.createElement("span");

        list.innerText = item;
        span.innerText = "X";
        //css for span
        span.style.background="red";
        span.style.cursor= "pointer";

        
        span.id = idx;
        list.className = "style-li";
        span.className = "Remove";
        span.onclick = function() {
            arr.splice(idx, 1);
            localStorage.setItem("listArray", JSON.stringify(arr));
            create(arr);
        }
        
        
        listItem.appendChild(list);
        list.appendChild(span);

    })
};

create(arr);

 //even listner
document.getElementById("btn").addEventListener("click", Add );

// Event listener on search input
searchInput.addEventListener("keyup", filter)