const s1 = document.querySelector(".s1");
const s2 = document.querySelector(".s2");
const s3 = document.querySelector(".s3");
const s4 = document.querySelector(".s4");
const s5 = document.querySelector(".s5");

const s = document.querySelectorAll(".s");

s.forEach((elem, i, arr)=>{
    arr[i].addEventListener("click", (e)=>{
        rating(e.target.classList[2])
    })
});

function rating(star){
    removeAllStar();

    switch(star){
        case "s1":
            s1.classList.add("checked")
            break;
        case "s2":
            s1.classList.add("checked")
            s2.classList.add("checked")
            break;
        case "s3":
            s1.classList.add("checked")
            s2.classList.add("checked")
            s3.classList.add("checked")
            break;
        case "s4":
            s1.classList.add("checked")
            s2.classList.add("checked")
            s3.classList.add("checked")
            s4.classList.add("checked")
            break;
        case "s5":
            s1.classList.add("checked")
            s2.classList.add("checked")
            s3.classList.add("checked")
            s4.classList.add("checked")
            s5.classList.add("checked")
            break;

        default:
            console.log("nothing...");
            break;
    }
}

function removeAllStar(){
    s.forEach((elem, i, arr)=>{
        arr[i].classList.remove("checked");
    })
}