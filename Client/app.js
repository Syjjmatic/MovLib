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
              alert("Movie added!");
              $('#movies').html(getMovies);
            },
            error: function(errorThrown){
                console.log(errorThrown);
            }
        });

        e.preventDefault();
    }

    $('#movies').html(getMovies);
    $('#my-form').submit(processForm);
    $('#deleteMovie').click(deleteMovie)

})(jQuery);

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
        "<td>" + "<button onclick=editMovie("+item['movieId']+") id='editMovie'>Edit</button>" + "</td>"+
        "<td>" + "<button onclick=deleteMovie("+item['movieId']+") id='deleteMovie'>Delete</button>" + "</td>"+
        "</tr>";
        $("#movies").append(movie);
      });
    },
    error: function(errorThrown){
      console.log(errorThrown);
    }
  });
};

function deleteMovie(id){
  $.ajax({
    url: 'https://localhost:44325/api/movie',
    dataType: 'json',
    type: 'delete',
    contectType: 'application/json',
    success: function(data){
      alert("Movie deleted!")
      $('#movies').html(getMovies);
    },
    error: function(errorThrown){
      console.log(errorThrown);
    }
  })
}

function editMovie(id){
  $.ajax({
    url: 'https://localhost:44325/api/movie',
    dataType: 'json',
    type: 'delete',
    contectType: 'application/json',
    success: function(data){
      alert("Movie deleted!")
      $('#movies').html(getMovies);
    },
    error: function(errorThrown){
      console.log(errorThrown);
    }
  })
}
