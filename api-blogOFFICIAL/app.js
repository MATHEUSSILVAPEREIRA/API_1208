// const btnCat = document.querySelector("#btn-cat");
// const containerCat = document.querySelector("#container-cat");

// btnCat.addEventListener("click", getCat);

// function getCat() {
//   fetch("https://aws.random.cat/meow")
//     .then((respuesta) => respuesta.json())
//     .then((datos) => {
//       containerCat.innerHTML = `<img src="${datos.file}">`;
//     });
// }
const title = [];
const body = [];

fetch("http://localhost:3000/posts")
  .then((response) => response.json())
  .then((posts) => {
    for (let i = 0; i < 5; i++) {
      //Loop all TITLES
      const titles = document.getElementsByClassName("list-title");
      titles[i].innerHTML = `${posts[i].title}`;

      //Looping single modal title
      let modalTitle1 = document.querySelector(".modal-post-title-1");
      modalTitle1.innerHTML = `MT: ${posts[0].title}`;

      let modalTitle2 = document.querySelector(".modal-post-title-2");
      modalTitle2.innerHTML = `MT: ${posts[1].title}`;

      let modalTitle3 = document.querySelector(".modal-post-title-3");
      modalTitle3.innerHTML = `MT: ${posts[2].title}`;

      let modalTitle4 = document.querySelector(".modal-post-title-4");
      modalTitle4.innerHTML = `MT: ${posts[3].title}`;

      let modalTitle5 = document.querySelector(".modal-post-title-5");
      modalTitle5.innerHTML = `MT: ${posts[4].title}`;

      //BODY MESSAGE
      const bodies = document.getElementsByClassName("bodies-msn");
      bodies[i].innerHTML = "-- Click to see the whole post --";

      let modalBody1 = document.querySelector(".modal-body1");
      modalBody1.innerHTML = `Body: ${posts[0].body}`;

      let modalBody2 = document.querySelector(".modal-body2");
      modalBody2.innerHTML = `Body: ${posts[1].body}`;

      let modalBody3 = document.querySelector(".modal-body3");
      modalBody3.innerHTML = `Body: ${posts[2].body}`;

      let modalBody4 = document.querySelector(".modal-body4");
      modalBody4.innerHTML = `Body: ${posts[3].body}`;

      let modalBody5 = document.querySelector(".modal-body5");
      modalBody5.innerHTML = `Body: ${posts[4].body}`;
    }
  });

fetch("http://localhost:3000/users")
  .then((response) => response.json())
  .then((users) => {
    for (let i = 0; i < 5; i++) {
      // User NAMES
      const modalUser1 = document.querySelector(".modal-user1");
      modalUser1.innerHTML = `Name: ${users[0].name}`;

      const modalUser2 = document.querySelector(".modal-user2");
      modalUser2.innerHTML = `Name: ${users[1].name}`;

      const modalUser3 = document.querySelector(".modal-user3");
      modalUser3.innerHTML = `Name: ${users[2].name}`;

      const modalUser4 = document.querySelector(".modal-user4");
      modalUser4.innerHTML = `Name: ${users[3].name}`;

      const modalUser5 = document.querySelector(".modal-user5");
      modalUser5.innerHTML = `Name: ${users[4].name}`;

      //Users EMAILS
      const modalemail1 = document.querySelector(".modal-email1");
      modalemail1.innerHTML = `Email: ${users[0].email}`;

      const modalemail2 = document.querySelector(".modal-email2");
      modalemail2.innerHTML = `Email: ${users[1].email}`;

      const modalemail3 = document.querySelector(".modal-email3");
      modalemail3.innerHTML = `Email: ${users[2].email}`;

      const modalemail4 = document.querySelector(".modal-email4");
      modalemail4.innerHTML = `Email: ${users[3].email}`;

      const modalemail5 = document.querySelector(".modal-email5");
      modalemail5.innerHTML = `Email: ${users[4].email}`;
    }
  });

fetch("http://localhost:3000/comments")
  .then((response) => response.json())
  .then((comments) => {
    for (let i = 0; i < 5; i++) {
      // User NAMES
      const modalUser1 = document.querySelector(".modal-user1");
      modalUser1.innerHTML = `Name: ${comments[0].name}`;

      const modalUser2 = document.querySelector(".modal-user2");
      modalUser2.innerHTML = `Name: ${comments[1].name}`;

      const modalUser3 = document.querySelector(".modal-user3");
      modalUser3.innerHTML = `Name: ${comments[2].name}`;

      const modalUser4 = document.querySelector(".modal-user4");
      modalUser4.innerHTML = `Name: ${comments[3].name}`;

      const modalUser5 = document.querySelector(".modal-user5");
      modalUser5.innerHTML = `Name: ${comments[4].name}`;


      //Users EMAILS
      const modalemail1 = document.querySelector(".modal-email1");
      modalemail1.innerHTML = `Email: ${comments[0].email}`;

      const modalemail2 = document.querySelector(".modal-email2");
      modalemail2.innerHTML = `Email: ${comments[1].email}`;

      const modalemail3 = document.querySelector(".modal-email3");
      modalemail3.innerHTML = `Email: ${comments[2].email}`;

      const modalemail4 = document.querySelector(".modal-email4");
      modalemail4.innerHTML = `Email: ${comments[3].email}`;

      const modalemail5 = document.querySelector(".modal-email5");
      modalemail5.innerHTML = `Email: ${comments[4].email}`;
    }
  });
