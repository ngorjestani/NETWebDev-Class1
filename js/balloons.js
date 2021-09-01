$(document).ready(function(){
    let animation = getRandomAnimation();
    $('#birthdayHeader').removeClass().addClass('animate__animated').addClass(animation);
    
    $('#birthday').pickadate({ format: 'mmmm, d' });

    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });

    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
            $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
            $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
    });

    $('#submit').on('click', function(e) {
        e.preventDefault();
        if (!$('#blue').is(':checked') && !$('red').is(':checked') && !$('#green').is(':checked')) {
            $('#toast').toast({ autohide: false }).toast('show');
        }
    });

    $(document).on('keydown', (e) => {
        if (e.key == 'Escape') {
            $('#toast').toast('hide');
        }
    });

    $('#all').on('click', function() {
        if ($('#all').is(':checked')) {
            $('#blue').prop('checked', true);
            $('#red').prop('checked', true);
            $('#green').prop('checked', true);
        } else {
            $('#blue').prop('checked', false);
            $('#red').prop('checked', false);
            $('#green').prop('checked', false);
        }
    });

    $('.form-check-label').hover(function() {
        $('#birthdayHeader').css('color', $(this).data('color'));
    }, function() {
        $('#birthdayHeader').css('color', '');
    });
});

function getRandomAnimation() {
    const animationClasses = [
        "animate__bounce",
        "animate__flash",
        "animate__pulse",
        "animate__rubberBand",
        "animate__shakeX",
        "animate__shakeY",
        "animate__headShake",
        "animate__swing",
        "animate__tada",
        "animate__wobble",
        "animate__jello",
        "animate__heartBeat"
    ];

    let randomIndex = Math.floor(Math.random() * animationClasses.length);

    return animationClasses[randomIndex];
};