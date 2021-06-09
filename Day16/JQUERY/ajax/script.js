$(() => {
  let list = $("#people");
  let page = 1;

  $("#fetch").click(() => {
    //asynchronous get request
    $.get(`https://reqres.in/api/users?page=${page}`, (data) => {
      page++;

      for (let p of data.data) {
        list.append(
          $(`<li>
                <img src="${p.avatar}">
                ${p.first_name} ${p.last_name}
            </li>`)
        );
      }
    });
  });
});
