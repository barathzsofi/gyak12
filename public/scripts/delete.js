console.log("delete-.js betöltve");

function ajaxDelete(id) {
  const headers = {
    'csrf-token': $('[name="_csrf"]').val()
  }
  return Promise.resolve(
    $.ajax({
      url: `/ajax/recipe/${id}/delete`,
      method: 'DELETE',
      dataType: 'json',
      headers
    })
  )
  .then(function(data) {
      console.log(data)
      window.location.assign('/recipe')
  })
  .catch(function(error) {
      console.log(error)
      $('.help-block').html(error.statusText);
  })
}

$('#btnDelete').on('click', function(e) {
    e.preventDefault();
    console.log("Törölve");
    var recipeId = $('#recipeId').val();
    ajaxDelete(recipeId);
})