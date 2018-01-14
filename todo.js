$(document).ready(function(){
  console.log('....loading')

  var listItems = [];

  $('form').on('submit', addItems);
  
  function addItems(event) {
    event.preventDefault();
    var item_value = $('#list_item_input').val();
    $('#list_item_input').val('');
    addListItem(item_value);
  }

/////////////////////////////////////////////////////////////

function addListItem(item) {
  listItems.push(item)
}

function removeListItem(index) {
  listItems.splice(index, 1);
  renderArray();
}

function renderArray() {
  $('tbody').remove();
  $('table').append('<tbody></tbody>')
  listItems.map(function(listItem, index){
    return (
      `<tr id="row_${index}">
        <td>${index}</td>
        <td>${listItem}</td>
        <td>
          <button id="btn_complete_${index}" class="btn btn-success">Completed</button>
        <button id="btn_shift_up_${index}" type="button" class="btn btn-primary">
            Shift <span class="glyphicon glyphicon-menu-up"></span>
          </button>
          <button id="btn_shift_down_${index}" type="button" class="btn btn-primary">
            Shift <span class="glyphicon glyphicon-menu-up"></span>
          </button>
          <button id="btn_delete_${index}" class="btn btn-danger">Delete</button></td>
        </td>
      </tr>`
      )
    }).forEach(function(item, index){
        $('tbody').append(item);
        $(`#btn_delete_${index}`).on('click', deleteRow);
          function deleteRow(e) {
          console.log('delete')
          removeListItem(index);
      }
      })
}


/////////////////////////////////////////////////////////////

})