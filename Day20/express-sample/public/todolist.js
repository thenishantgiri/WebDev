$(() => {
  let inpTask = $("#inpTask");
  let btnAdd = $("#btnAdd");
  let ulTask = $("#ulTask");

  btnAdd.click(() => {
    let newTask = inpTask.val();

    // use of post : sends data from the client to server and receives some respose from the server (without refreshing the page)
    $.post(
      //first param : url
      // url/location (relative to our server): to where the data is supposed to go (in server), this data was received from the client (browser)
      "/todos/",

      //second param : Body
      // sends data like a Javascript object, a js object turns into a JSON file and the JSON file goes into the body
      {
        task: newTask,
        //this 'task' will be converted into 'req.body.task' when it goes inside express (aka our server)
      },

      //third param : a callback function
      // this function runs when a response comes back from the server : and this is the data to be send back to the client (browser) - object type data
      (data) => {
        ulTask.empty(); //this empty function will delete all the data inside the ulList

        for (var todo of data) {
          ulTask.append(`<li>${todo.task}</li>`);
        }
      }
    );
  });
});
