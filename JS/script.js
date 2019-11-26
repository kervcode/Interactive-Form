//GLOBAL VARAIBLES
const other = $('#other-title');
const title = $('#title')
const jobTitle = $('#title option');
const input = $('#other-title');
const selectDesign = $('#design'); 
const design = $('#design option');
const tshirt = $('#color');
const tshirtColor = $('#color option');


// set the focus on the first text field
$(window).on('load', () => {
    $('#name').focus();
})

//initially hide text field for input
input.hide();

// reveal a text field when other option is selected in job role field
title.on('change', function (){ //why this does not work with arrow function
    if(this.value === 'other') {
        input.delay(100)
        .slideDown()
        // .show();
    } else {
        input.slideUp(150);
    }
})

//t-shirt section
 design.eq(0).hide();
//  tshirtColor.hide();

 tshirtColor.prepend("<option>Please select a T-shirt theme</option>");

 tshirt.each(function (index, element){
    tshirtColor.eq(index).hide();
 });

 
     

 selectDesign.on('change', function() {
     if (this.value === 'js puns') {
        //  tshirtColor.prepend(`<option>Please select a T-shirt theme</option>`);
         tshirtColor.eq(3).hide();
         tshirtColor.eq(4).hide();
         tshirtColor.eq(5).hide();
     } else {
         tshirtColor.eq(0).hide();
         tshirtColor.eq(1).hide();
         tshirtColor.eq(2).hide();
     }
 })


//Activity Section
$('.activities input').each(function(index, element){
    console.log()
});


