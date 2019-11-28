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

 tshirt.prepend("<option>Please select a T-shirt theme</option>");

 tshirtColor.each(function (index, element){
    // console.log($(element))
    console.log(element.filter(function(){
        
    }))
    // tshirtColor.eq(index).hide();
    // if(element)
 });



