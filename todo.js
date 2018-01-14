$(document).ready(function(){
var two = require('./two.js')
  console.log('..loading')

  var listItems =[];

  $('form').on('submit', function(event){
    event.preventDefault();
    var item_value = $('#list_item_input').val();
    var item_obj = {item_value: item_value, completed: false}
    $('#list_item_input').val('');
    two.addListItem(item_obj, listItems);

  })

/////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////

})