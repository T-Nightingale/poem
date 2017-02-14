$('#you').click(toggleBackground);
$('#me').click(toggleBackground);

function toggleBackground() {
  $('body').toggleClass('background-move');
}
