let search = document.querySelector(".search"); 
search.onclick = function(){
    document.querySelector(".container").classList.toggle('active');
}

let close = document.querySelector(".close");
close.onclick = function(){
    document.querySelector(".container").classList.remove('active');
}