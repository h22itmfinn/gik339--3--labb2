url = "http://localhost:3000/users";
const responsePromise = fetch(url);
responsePromise
  .then((response) => {
    return response.json();
  })
  .then((users) => console.log(users));

const request = new Request(url);
fetch(request)
  .then((response) => response.json())
  .then((users) => {
    let html = `<ul class ="text-center list-group">`;
    users.forEach((user) => {
      html += `
      <li class="col-12 border border-3 shadow p-1 mb-2 rounded list-group-item ms-5"  style="background-color:${user.color};" >
                      <h4>${user.id}.  ${user.firstName} ${user.lastName}</h4>
                      <p>${user.username}</p></li>`;
    });
    html += "</ul>";
    document.getElementById("ost").insertAdjacentHTML("beforeend", html);
  });
