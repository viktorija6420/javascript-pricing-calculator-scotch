const answer1 = document.querySelector("#id1");
const answer2 = document.querySelector("#id2");
const answer3 = document.querySelector("#id3");
const answer4 = document.querySelector("#id4");
const answer5 = document.querySelector("#id5");
const answer6 = document.querySelector("#id6");
const answer7 = document.querySelector("#id7");
const answer8 = document.querySelector("#id8");
const answer9 = document.querySelector("#id9");
const answer10 = document.querySelector("#id10");

function myFunction() {
  const demos = [answer1.value === "está",
  answer2.value === "eres",
  answer3.value === "está",
  answer4.value === "soy",
  answer5.value === "está",
  answer6.value === "eres",
  answer7.value === "estamos",
  answer8.value === "son",
  answer9.value === "son",
  answer10.value === "Estoy"]

  let total = 0;
  for (const prop in demos){
    if (demos[prop] === true) {
      total += 1;
      console.log(total);
    }

  const a = document.querySelector("#demo");
  a.innerHTML = "Your total is" + " " + total;
  a.style.color = "black";
  if (total <= 5){
  a.innerHTML = "Your total is" + " " + total + "." + " Don't worry. Practice makes perfect. Do it again!"
  a.style.color = "purple";
  }
  else if (total === 10) {
    a.innerHTML = "You made it!You got all questions right!Good job!"
    a.style.color = "green";
  }



    // alert("great!")

    // if (demo.value === true)
    //
    //    {
    //      console.log("Hi");
    //      alert("Great");
    //    }
    //
    //
    // else {
    //
    //   (demo1.value = "está");
    //   (demo2.value = "eres");
    //   (demo3.value = "está");
    //   (demo4.value = "soy");
    //   (demo5.value = "está");
    //   (demo6.value = "eres");
    //   (demo7.value = "estamos");
    //   (demo8.value = "son");
    //   (demo9.value = "son");
    //   (demo10.value = "eres");
      //
      // demos.forEach(function (demos) {
      //   console.log(demos[iActiveRecord::ConnectionNotEstablished: No connection pool with 'primary' found.].style);
      // })


      // (demo1.value = "está" && demo1.style.color = "red");
      // (demo2.value = "eres" && demo2.style.color = "red");
      // (demo3.value = "está" && demo3.style.color = "red");
      // (demo4.value = "soy" && demo4.style.color = "red");
      // (demo5.value = "está" && demo5.style.color = "red");
      // (demo6.value = "eres" && demo6.style.color = "red");
      // (demo7.value = "estamos" && demo7.style.color = "red");
      // (demo8.value = "son" && demo8.style.color = "red");
      // (demo9.value = "son" && demo9.style.color = "red");
      // (demo10.value = "eres" && demo10.style.color = "red");
  };
}
