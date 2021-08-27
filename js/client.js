$(function(){
    // preload audio
    var toast = new Audio('media/toast.wav');

    $('.code').on('click', function(e) {
        e.preventDefault();
        // first pause the audio (in case it is still playing)
        toast.pause();
        // reset the audio
        toast.currentTime = 0;
        //play audio
        toast.play();

        let product = $(this).data('product');
        let discountCode = $(this).data('code');

        $('#product').html(product);
        $('#code').html(discountCode);

        $('#toast').toast({ autohide: false }).toast('show');
    });
});

$(document).on('keydown', (e) => {
    if (e.key == 'Escape') {
        $('#toast').toast('hide');
    }
});