let number = document.querySelector(".TheNumber");

document.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    let q = number.value;
    let z = Object.keys(q).length;
    if (z === 16) {
      let a = q.substring(0, 4);
      console.log(a);
      let b = q.substring(4, 8);
      console.log(b);
      let c = q.substring(8, 12);
      console.log(c);
      let d = q.substring(12, 16);
      console.log(d);
      let space = " ";
      console.log(a + space + b + space + c + space + d);
      document.querySelector(
        ".answer"
      ).textContent = `We have withdrawn all the money from your card number: ${
        a + space + b + space + c + space + d
      }`;
    } else if (z === 12) {
      let e = q.substring(0, 3);
      let f = q.substring(3, 5);
      let g = q.substring(5, 8);
      let h = q.substring(8, 10);
      let i = q.substring(10, 12);
      let space = " ";
      let space2 = "-";
      let space3 = "+";
      let jet = space3
        .concat(e)
        .concat(space)
        .concat(f)
        .concat(space)
        .concat(g)
        .concat(space2)
        .concat(h)
        .concat(space2)
        .concat(i);
      console.log(jet);

      document.querySelector(
        ".answer"
      ).textContent = `We stole all the data associated with the number ${jet}`;
    } else if (z < 12) {
      alert("Your number must be longer than 12");
    } else if (z > 16) {
      alert("Your number must be shorter than 16");
    }
  }
  if (e.key == "Escape") {
    window.location.reload();
  }
});
