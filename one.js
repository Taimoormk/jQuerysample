console.log('....loading')

  var listItems = [];

  $('form').on('submit', addItems);
  
  function addItems(event) {
    event.preventDefault();
    var item_value = $('#list_item_input').val();
    $('#list_item_input').val('');
    addListItem(item_value);
  }