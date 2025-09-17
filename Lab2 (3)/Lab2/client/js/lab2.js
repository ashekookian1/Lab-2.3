
const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", function(event) {
    // the below uses pure JavaScript to get the value in the input button
    const firstTextBox = document.getElementById("input1");
    const secondTextBox = document.getElementById("input2");

    var first = firstTextBox.value;
    var second = secondTextBox.value;

    //the below uses jQuery uses pure JavaScript to get the value in the input button
    var third = $('#input3').val();

    console.log("First; ", first);
    console.log("Second; ", second);
    console.log("Third; ", third);

    alert(first + "\n" + second + "\n" + third);

    //stop from firing
    event.preventDefault();
});

$('clear').click(function() {
    $("input1").val("");
    $("input2").val("");
    $("input3").val("");

    return false;
});