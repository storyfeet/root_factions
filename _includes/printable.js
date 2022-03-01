let ar = document.getElementsByClassName("printnplay");

for (a in ar) {
    console.log("pnp found",a);
    ar[a].onclick = (item)=>{
        console.log("CLicked = ",item);
        item.target.classList.toggle("fullscreen");
    }
}

