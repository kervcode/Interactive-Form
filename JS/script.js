$(function() {
  //GLOBAL VARAIBLES
  // const $other = $("#other-title");
  const $title = $("#title");
  // const $jobTitle = $("#title option");
  const $input = $("#other-title");
  const $selectDesign = $("#design");
  const $design = $("#design option");
  const $tshirtColor = $("#color");
  const $tshirtOptions = $("#color option");

  /**
   * ------------------Input Feild Section--------------------------
   * set the focus on the first text field
   **/
  $(window).on("load", () => {
    $("#name").focus();
    manageTheme();
  });
  /**
   * ------------------Job Role Section--------------------------
   * set the focus on the first text field
   **/
  //initially hide text field for input
  $input.hide();

  // reveal a text field when other option is selected in job role field
  $title.on("change", function() {
    //why this does not work with arrow function
    if (this.value === "other") {
      $input.delay(100).slideDown();
      // .show();
    } else {
      $input.slideUp(150);
    }
  });
  /**
   * ----------- T-Shirt Infor Section--------------------------
   * set the focus on the first text field
   **/
  $design.eq(0).hide();

  // Hide all color themes
  function manageTheme() {
    $tshirtOptions.each(function(i, element) {
      // console.log(tshirtOptions.eq(i).val());
      if (
        $(element)
          .eq(i)
          .val() !== "cornflowerblue"
      ) {
        $(this)
          // .eq(i) //returned undefined when left uncommented
          .attr("disabled", true)
          .attr("hidden", true);
      } else {
        $(this)
          .before("<option>Please select a T-shirt theme</option>")
          .attr("selected", "selected");
        $("#color option:selected")
          .removeAttr("selected")
          .attr("hidden", true);
      }
    });
  }

  // show appropriate color for selected theme
  $selectDesign.on("change", function(event) {
    console.log($(event.target).val()); //can't call nodeName() - Why?
    // console.log($(event.target));
    $tshirtOptions.each(function(i, element) {
      // console.log($(this).val());
      if ($(event.target).val() === "js puns") {
        $tshirtOptions
          .slice(0, 3)
          .removeAttr("hidden")
          .removeAttr("disabled");
        $tshirtOptions
          .slice(3, 6)
          .attr("hidden", true)
          .attr("disabled", true);
      } else if ($(event.target).val() === "heart js") {
        $tshirtOptions
          .slice(3, 6)
          .removeAttr("hidden")
          .removeAttr("disabled");
        $tshirtOptions
          .slice(0, 3)
          .attr("disabled", true)
          .attr("hidden", true);
      } else {
        // manageTheme();
      }
    });
  });
});
