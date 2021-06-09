/**
 *
 * way 1
 *
 * window.onload = () => { };
 *
 * way 2
 *
 * $(() => {
 *  **code goes here**
 * })
 */

// runs just after the script loads (before whole html loads)
// console.log($("#list"));

// runs after the script loads (after whole html loads)
$(() => {
  let item = $("#item");
  let list = $("#list");

  $("#prepend").click(() => {
    let text = item.val();

    // way 1
    list.prepend($(`<li>${text}</li>`));

    // way 2
    // $("#list").prepend($(`<li>`).text(text));

    // $("#list").prepend($(`<li>`).html(`<b>${text}</b>`)); //prepending text with bold text (html)
  });

  $("#append").click(() => {
    let text = item.val();

    list.append($(`<li>${text}</li>`));
  });
});
