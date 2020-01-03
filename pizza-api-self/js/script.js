function getallmenu(){
    $.getJSON('data/pizza.json', function(data){
        //menghilangkan key pada file json
        let menu = data.menu;
        
        //dijquery ada method untuk perulangan 2 parameter index dan datanya
        $.each(menu, function(i, data){
            $('#daftar-menu').append('<div class="col-md-4"><div class="card mb-3"> <img class="card-img-top" src="img/menu/'+ data.gambar +'" alt="Card image cap"><div class="card-block"><h4 class="card-title">'+ data.nama +'</h4><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title">'+ data.harga +'</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>');
        });
    });
}

getallmenu();

//pada saat tombol nav-link diklik maka akan berubah
$('.nav-link').on('click', function(){
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    let simpankategori = $(this).html();
    $('h1').html(simpankategori);

    if(simpankategori == 'All Menu'){
        getallmenu();
        return;
    }

    $.getJSON('data/pizza.json', function(data){
        let menu = data.menu;
        let content = '';

        $.each(menu, function(i, data){
            if (data.kategori == simpankategori.toLowerCase()){
                content += '<div class="col-md-4"><div class="card mb-3"> <img class="card-img-top" src="img/menu/'+ data.gambar +'" alt="Card image cap"><div class="card-block"><h4 class="card-title">'+ data.nama +'</h4><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title">'+ data.harga +'</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>';
            }
        });

        $('#daftar-menu').html(content);
    });
});