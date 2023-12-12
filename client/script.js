// const request = new Request("http://localhost:3000/users", {
//   method: "GET",
// });

//fetch(request).then((response) => handleRespone);
// async function fetchData() {
//   const response = await fetch(request);
//   console.log(response);
// }
// function getUserWithPromise(error) {
//   return new Promise((reslove, reject) => {
//     setTimeout(() => {
//       if (error) reject(printTimeStamp() + " Något blev fel");
//       else reslove({ firstName: "Mikaela" });
//     }, 3000);
//   });
// }

url = "http://localhost:3000/users";
const responsePromise = fetch(url);
responsePromise
  .then((response) => {
    //console.log(response);
    return response.json();
  })
  .then((users) => console.log(users));
const request = new Request(url);
fetch(request)
  .then((response) => response.json())
  .then((users) => {
    let html = `<ul class ="text-center list-group ">`;
    users.forEach((user) => {
      html += `
      <li class="col-12 border border-3 shadow p-1 mb-2 rounded list-group-item ms-5"  style="background-color:${user.color};" >
                      <h4>${user.id}.  ${user.firstName} ${user.lastName}</h4>
                      <p>${user.username}</p></li>`;
    });
    html += "</ul>";
    document.getElementById("ost").insertAdjacentHTML("beforeend", html);
    // document.body.insertAdjacentHTML("beforeend", html);
    // return "hej";
  })
  .then((data) => console.log(data));
