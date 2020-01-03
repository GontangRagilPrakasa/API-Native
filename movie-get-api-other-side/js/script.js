//sekarang kita mau connect setelah kita mengetikan sesuatu di inputannya baru request ke restServer
function searchMovie(){
    //$.getJSON('http://omdbapi.com?apikey=370c7f28');
    //atau
    //agar setelah kita cari data bisa fresh atau data baru
    $('#movie-list').html('');
    $.ajax({
        url: 'http://omdbapi.com',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey': '370c7f28',
            //mengabmbil data dari inputan
            's': $('#search-input').val()
        },
        success: function(hasil){
            if(hasil.Response == "True"){
                //ok
                let movies = hasil.Search;
                $.each(movies, function(i, data){
                    $('#movie-list').append(`
                   
                        <div class="col-md-4">                    
                            <div class="card mb-3">
                                <img class="card-img-top" src="`+ data.Poster +`" alt="Card image cap">
                                <div class="card-block">
                                <h4 class="card-title">`+ data.Title +`</h4>
                                <h6 class="card-subtitle mb-2 text-muted">`+ data.Year +`</h6>
                                <a href="#" class="card-link see-detail" data-toggle="modal" data-target="#myModal" data-id="`+ data.imdbID +`">Detail</a>
                                </div>
                            </div>
                        </div>   
                    `)
                });

                $('#search-input').val('');
            }
            else{
                //$('#movie-list').html('<h1 class="text-center"> Movie Not Found </h1>');
                //atau bisa ngambil dari json bawaan
                $('#movie-list').html(`
                    <div class="col">
                       <h1 class="text-center">`+ hasil.Error +`</h1>
                    </div>
                `);
            }
        }
    });
}
//kalau kita klik search
$('#search-button').on('click', function(){
    searchMovie();
});
//kalau kita pakai tombol enter
$('#search-input').on('keyup', function(e){
    //enter codenya 13 atau bisa cek di keycode.info
    if(e.keyCode === 13){
        searchMovie();
    }

});

$('#movie-list').on('click','.see-detail', function(){
    //console.log($(this).data('id'));
   
        //console.log($(this).data('id'));
        $.ajax({
            url: 'http://omdbapi.com',
            type: 'get',
            dataType: 'json',
            data: {
                'apikey': '370c7f28',
                //mengabmbil data dari inputan
                'i': $(this).data('id'),
            },
            success: function(movie){
                if(movie.Response === "True"){
                    $('.modal-body').html(`
                        <div class="container-fluid">
                            <div class="row>
                            <div class="col-md-4>
                                <img src="`+ movie.Poster +`" class="img-fluid">
                            </div>
                            <div class="col-md-8>
                                <ul class="list-group">
                                    <li class="list-group-item"><h3>`+ movie.Title +`</h3></li>
                                    <li class="list-group-item">Release :`+ movie.Release +`</li>
                                    <li class="list-group-item">Genre :`+ movie.Genre +`</li>
                                    <li class="list-group-item">Director :`+ movie.Director +`</li>
                                    <li class="list-group-item">Actors :`+ movie.ACtors +`</li>
                                </ul>
                            </div>
                            </div>
                        </div>
                    `);
                }
            }
        });
});
