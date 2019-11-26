//GLOBAL VARAIBLES
const other = $('#other-title');
const title = $('#title')
const jobTitle = $('#title option');
const input = $('#other-title');


// set the focus on the first text field
$(window).on('load', () => {
    $('#name').focus();
})

//initially hide text field for input
input.hide();

// reveal a text field when other option is selected in job role field
title.on('change', function (){
    if(this.value === 'other') {
        input.delay(100)
        .slideDown()
        // .show();
    }
})



