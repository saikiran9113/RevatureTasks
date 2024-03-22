/*2.  Create 4 divs with size 100x100px with bg-color:red;
    - When I click on 1st div change the bg-color.
    - When the mouse comes in the second div area change the bg-color.
    - When user clicks on 3rd div add an image in the backgroud.
    - When the user clicks on 4th div change the size of div.*/

var div1 = document.getElementById("mainDiv1")
var div2 = document.getElementById("mainDiv2")
var div3 = document.getElementById("mainDiv3")
var div4 = document.getElementById("mainDiv4")

function changebg(){
    div1.style.backgroundColor = "blue"
}

function changebg2(){
    div2.style.backgroundColor = "blue"
}

function changebg3(){
    div3.style.backgroundImage = "url('https://tse1.mm.bing.net/th?id=OIP.4K7bK-hTXXHsoJuJxNtzigHaCU&pid=Api&P=0&h=180')"
}

function changebg4(){
    div4.style.width= "200px"
    div4.style.height= "200px"

}

div1.addEventListener("click",changebg)
div2.addEventListener("mouseenter",changebg2)
div3.addEventListener("click",changebg3)
div4.addEventListener("click",changebg4)