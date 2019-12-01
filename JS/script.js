//GLOBAL VARAIBLES
const other = $("#other-title");
const title = $("#title");
const jobTitle = $("#title option");
const input = $("#other-title");
const selectDesign = $("#design");
const design = $("#design option");
const tshirtColor = $("#color");
const tshirtOptions = $("#color option");

/**
 * ------------------Input Feild Section--------------------------
 * set the focus on the first text field
 **/
$(window).on("load", () => {
  $("#name").focus();
});
/**
 * ------------------Job Role Section--------------------------
 * set the focus on the first text field
 **/
//initially hide text field for input
input.hide();

// reveal a text field when other option is selected in job role field
title.on("change", function() {
  //why this does not work with arrow function
  if (this.value === "other") {
    input.delay(100).slideDown();
    // .show();
  } else {
    input.slideUp(150);
  }
});
/**
 * ----------- T-Shirt Infor Section--------------------------
 * set the focus on the first text field
 **/
design.eq(0).hide();

// Add
const tshirtTheme = tshirtColor.prepend(
  "<option>Please select a T-shirt theme</option>"
);

// tshirtOptions.eq(0).remove("selected", "");
// tshirtOptions.eq(0).attr("selected", "selected");
console.log(tshirtOptions);

// Hide the color in the dropdown color field
tshirtColor.each(function() {
  tshirtOptions.hide();
  // .attr("disabled", true)
  // .attr("hidden", true)
  // .removeAttr("selected", "");
});

tshirtTheme.attr("selected", "selected");

selectDesign.on("change", function(event) {
  console.log($(event.target).val()); //can't call nodeName() - Why?
  tshirtOptions.each(function(i, element) {
    if ($(element).val() === "js puns") {
      //   console.log($(element).val());
      tshirtOptions
        .eq(0)
        .removeAttr("disabled")
        .show();
      tshirtOptions.eq(1).show();
      tshirtOptions.eq(2).show();
    }
  });
});
