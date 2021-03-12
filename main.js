$('.button').on('click', function() {
    $.ajax({
            url: 'http://localhost:8000/search/' + $('.keyword').val(),
            success: (result) => {
                console.log(result);
            }
        })
        // console.log('http://localhost:8000/search/' + $('.keyword').val());
        // alert('oke');
})