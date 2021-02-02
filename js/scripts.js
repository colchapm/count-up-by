$(document).ready(function() {
  $("#numberForm").submit(function(event) {
    const countTo = parseInt($("input#countTo").val());
    const countMultiple = parseInt($("input#countMultiple").val());

    if (countTo < countMultiple) {
      alert("Your number to count to is too low. Please pick a higher number.")
    } else if (countTo === countMultiple) {
      alert("Pick some different numbers that's too easy.")
    } 

    let newNumbers = [];
    for (let i=countMultiple; i <= countTo; i += countMultiple) {
      newNumbers.push(i)
    };

    $("#output").text(newNumbers.join(", "));
    event.preventDefault();

  })
})

