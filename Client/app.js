(function($){
    function processForm( e ){
        var dict = {
        	Title : this["title"].value,
        	Director: this["director"].value,
          Genre: this["genre"].value
        };

        $.ajax({
            url: 'https://localhost:44325/api/movie',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function( data ){
              $("#my-form input[type='text']").val('');
              alert("Added movie!");
              $('#movies').html(getMovies);
            },
            error: function( errorThrown ){
                console.log( errorThrown );
            }
        });

        e.preventDefault();
    }

    $('#my-form').submit( processForm );

})(jQuery);

$('#movies').html(getMovies);
function getMovies(){

  $.ajax({
    url: 'https://localhost:44325/api/movie',
    dataType: 'json',
    type: 'get',
    contentType: 'application/json',

    success: function (data){
      $("#movies").empty();
      $.each(data, function(i,item){
        var movie = "<tr>" +
        "<td>" + item['title'] + "</td>" +
        "<td>" + item['director'] + "</td>" +
        "<td>" + item['genre'] + "</td>" +
        "</tr>";
        $("#movies").append(movie);
      });
    }

  });

}
