$(() => {
  let inpName = $("#name");
  let inpAge = $("#age");
  let inpCity = $("#city");
  let btnSubmit = $("#btnSubmit");
  let tblPersons = $("#persons");

  function refreshPersonTable(persons) {
    tblPersons.empty();

    tblPersons.append(
      `<tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
        </tr>`
    );
    for (var person of persons) {
      tblPersons.append(
        `<tr>
          <td>${person.name}</td>
          <td>${person.age}</td>
          <td>${person.city}</td>
        </tr>`
      );
    }
  }

  $.get("/api/persons/", (data) => {
    refreshPersonTable(data);
  });

  btnSubmit.click(() => {
    $.post(
      "/api/persons",
      {
        name: inpName.val(),
        age: inpAge.val(),
        city: inpCity.val(),
      },
      (data) => {
        refreshPersonTable(data);
      }
    );
  });
});
