const pages=document.getElementsByClassName("img-container")
const indexPoints=document.getElementsByClassName("index-point")
const changePage=(pageNum) => {
 [...pages].forEach(element => {
  element.classList.remove("focus-1")
  element.classList.remove("focus-2")
  element.classList.remove("focus-3")
 });
 [...indexPoints].forEach(element => {
  element.classList.remove("index-point-focused")
 });
 indexPoints[pageNum-1].classList.add("index-point-focused")
 switch(pageNum) {
  case 1:
   pages[0].classList.add("focus-1")
   pages[1].classList.add("focus-2")
   pages[2].classList.add("focus-3")
   break;
  case 2:
   pages[1].classList.add("focus-1")
   pages[0].classList.add("focus-2")
   pages[2].classList.add("focus-2")
   break;
  case 3:
   pages[2].classList.add("focus-1")
   pages[1].classList.add("focus-2")
   pages[0].classList.add("focus-3") 
   break;
 }
}