
//* Wishes Text -- By ABhishek Kumar --**/

let wishes=document.getElementById("wishes2");
let cuurentTime=new Date();
let hours=cuurentTime.getHours();

if(hours<12)
{
  wishes.innerText="Good Morning !";
}
else if(hours<=16 && hours>=12)
{
  wishes.innerText="Good Afternoon !";
}
else if(hours>=16 && hours<=21)
{
  wishes.innerText="Good Evening !";
}
else if(hours>21)
{
  wishes.innerText="Good Night !";
}




/* -----------------------------Taskeen Cart Section --------------------------------------*/
let butt_value;
function check(clicked) {                //* Click show  more*/
  show(clicked);
  butt_value = clicked;
}

function show(clicked) {                        
  const ts = document.getElementById(`more${clicked}`);
  ts.style.visibility = "visible";
}

function hide() {                             // *Hide More */
  const hide_val = document.getElementById(`more${butt_value}`);
  hide_val.style.visibility = "hidden";
}


/*------------------- Timer for Payment Page  By Abhishek-------------------------- */

let timer = document.getElementById("timer");
let timing = 120;
function timepayment() {
  timer.innerText = timing;
  timing--;
  if (timing < 0) {
    document.getElementById("timmer").innerText = "Timeout";
    document.getElementById("timmer").style.color = "red";
  }
}

setInterval(timepayment, 1000);



/* Cart Update--- Abhishek kumar--*/
const upcart1 = document.getElementById('cart');
const itemshow2 = document.getElementById('itemshow');
let i = 1;
var j = 0;
function upcart() {
  if (i <= 10) {
    upcart1.innerText = i;
    i++;
    j++;
  }
  sessionStorage.setItem("keyCart", j);
}

itemshow2.innerHTML = sessionStorage.getItem('keyCart');  //update cart page 

function clearsession() {   //clear Session storage
  sessionStorage.clear();
};

clearsession();





/* Read more data fecth from JSNOn */

// function readmore(indexno) {

//   sessionStorage.setItem('key', indexno);
//   fetch('data.json')
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       const salary = data[0].salary;
//       document.getElementById('ooo').innerHTML = salary;
//     }
//     )
//     .catch(function (err) {
//       console.log(err);
//     });

// }
//* --- Progress bar ----//
























