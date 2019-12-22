$(function() {
  //GLOBAL VARAIBLES
  const $title = $("#title"),
    $input = $("#other-title"),
    $selectDesign = $("#design"),
    $design = $("#design option"),
    $tshirtOptions = $("#color option"),
    paypal = $("#paypal"),
    bitcoin = $("#bitcoin");

  let $checkboxInputs = $(".activities"), //store all input checkboxes
    conferencePrice = 0,
    totalActivityCost = $checkboxInputs.append(
      "<p id='fltRight'>Total: $0</p>"
    ),
    total = $(".activities p");
  const $checkboxes = $checkboxInputs.children().children();
  /** Input Feild Section -- set the focus on the first text field **/
  $("#name").focus();
  // $(window).on("load", () => {
  //   // createPriceField()
  // });
  /** Job Role Section: set the focus on the first text field **/
  //initially hide text field for input

  $input.hide();
  paypal.hide();
  bitcoin.hide();

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
  /** T-Shirt Infor Section: set the focus on the first text field **/
  $design.eq(0).hide();

  // Hide all color themes
  $tshirtOptions.each(function(i, element) {
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

  // show appropriate color
  // for selected theme
  $selectDesign.on("change", function(event) {
    console.log($(event.target).val()); //can't call nodeName() - Why?
    $tshirtOptions.each(function(i, element) {
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
      }
    });
  });

  // Register for activities section

  //listening for change in activities
  $checkboxes.on("change", function(event) {
    let clicked = event.target;
    let clickedCost = $(clicked).attr("data-cost");
    let clickedTime = $(clicked).attr("data-day-and-time");
    clickedCost = clickedCost.slice(1, 4);

    // calculate the conference price
    if ($(clicked).prop("checked")) {
      conferencePrice += parseInt(clickedCost);
    } else {
      conferencePrice -= parseInt(clickedCost);
    }
    //append conference price to the page
    $(total).text("Total:  $" + conferencePrice);
    // console.log(conferencePriceDOM.last().text())
    console.log(" $" + conferencePrice);

    for (let i = 0; i < $checkboxes.length; i++) {
      let checkboxTime = $($checkboxes[i]).attr("data-day-and-time");
      if (clickedTime === checkboxTime && clicked !== $checkboxes[i]) {
        if ($(clicked).prop("checked")) {
          $($checkboxes[i]).attr("disabled", true);
        } else {
          $($checkboxes[i]).attr("disabled", false);
        }
      }
    }
  });
  // Form validation Section
  const form = $("form");
  const payment = $("#payment");
  const paymentOption = payment.children();
  const creditCardInfo = $("#credit-card");
  const nameInput = $("#name");
  const email = $("#mail");
  // const emailInput = $("#mail");
  const activityInput = $(".activities");
  const creditCardNumber = $("#cc-num");
  const zipCode = $("#zip");
  const cvv = $("#cvv");
  const submit = $("button");

  // payment.on('change', function(){
  //   if($('#payment option').eq(1).prop('selected') === true){
  //     console.log('selected')
  //   }
  // })
  paymentOption.each(function(i, option) {
    if (option.value === "select method") {
      $(option)
        .attr("disabled", true)
        .attr("hidden", true)
        .removeAttr("selected", "");
    }
    if (option.value === "Credit Card") {
      $(option).attr("selected", "selected");
    }
  });

  payment.on("change", function(e) {
    console.log(e.target.value);
    if (e.target.value === "Credit Card") {
      bitcoin.delay(100).slideUp();
      paypal.delay(100).slideUp();
      creditCardInfo.delay(150).slideDown();
    } else if (e.target.value === "PayPal") {
      creditCardInfo.delay(100).slideUp();
      bitcoin.delay(100).slideUp();
      paypal.delay(150).slideDown();
    } else if (e.target.value === "Bitcoin") {
      creditCardInfo.delay(100).slideUp();
      paypal.delay(100).slideUp();
      bitcoin.delay(150).slideDown();
    }
  });

  function isEmpty(field) {
    if ($(field).val() === "") {
      return $(field)
        .attr("placeholder", "Required")
        .addClass("rouge");
    }
  }

  // function isValidEmail(email) {
  //   return /^[^@]+@[^@]+\.[a-z]+$/i.test(email);
  // }
  // console.log(isValidEmail)

  // function formatCreditCard(creditCardNumber) {
  //   return ;
  // }

  // at least one activity is selected
  $(".activities input").addClass("rouge");
  function isSelected() {
    // let checkboxActivities = $(".activities input");
    $(".checkboxEmpty").remove();
    if ($(".activities input:checkbox:checked").length < 1) {
      $(".activities legend").after(
        "<p class='checkboxEmpty'>Please select an activity or more<p>"
      );
    } else {
      $(".checkboxEmpty").remove();
    }
  }

  function isValidName(name) {
    let nameRegex = /^([a-zA-Z0-9]+|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{1,}|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{3,}\s{1}[a-zA-Z0-9]{1,})$/;
    return nameRegex.test(name);
  }

  function isValidEmail(email) {
    let emailRegex = /^[^@]+@[^@]+\.[a-z]+$/i;
    return emailRegex.test(email);
  }

  function isValidCC(cc) {
    let creditCard = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
    return creditCard.test(cc);
  }

  function isZipCodeValid(zc) {
    const zip = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
    return zip.test(zc);
  }
  function isValidCVV(field) {
    const cardCVV = /[0-9]{3}/;
    return cardCVV.test(field);
  }

  //zip code
  zipCode.on("focus", function() {
    zipCode.attr("maxlength", 5);
    zipCode.keyup(function() {
      this.value = this.value.replace(/[^0-9\.]/g, "");
    });
  });

  creditCardNumber.keyup(function() {
    zipCode.attr("").attr("maxlength", 16);
    this.value = this.value.replace(/[^0-9\.]/g, "");
  });
  //CVV length
  cvv.on("focus", function(e) {
    cvv.attr("maxlength", 3);
    cvv.keyup(function() {
      this.value = this.value.replace(/[^0-9\.]/g, "");
    });
  });

  // function numbersOnly(field) {
  //   field.keyup(function() {
  //     this.value = this.value.replace(/[^0-9\.]/g, "");
  //   });
  // }

  console.log(isValidCC(5129925569513093));

  submit.on("click", function(e) {
    if (!isValidName($(nameInput).val())) {
      e.preventDefault();
      $(nameInput)
        .addClass("rouge")
        .attr("placeholder", "Name is required");
    } else {
      $(nameInput).removeClass("rouge");
      $(nameInput).val("");
    }

    if (!isValidEmail($(email).val())) {
      e.preventDefault();
      $(email)
        .attr("placeholder", "This email address is not valid")
        .addClass("rouge");
      // if (isValidName($(nameInput).val())) {
      //   $(email).focus();
      // }
    } else {
      $(email).removeClass("rouge");
      $(email).val("");
    }
    isSelected();

    //credit card
    if (
      $("#payment option")
        .eq(1)
        .prop("selected") === true
    ) {
      console.log("selected");

      if (!isValidCC($(creditCardNumber).val())) {
        e.preventDefault();
        $(creditCardNumber)
          .attr("placeholder", "This credit is not valid")
          .addClass("rouge");
      } else {
        $(creditCardNumber).removeClass("rouge");
      }

      if (!isZipCodeValid($(zipCode).val())) {
        e.preventDefault();
        zipCode.attr("placeholder", "Required").addClass("rouge");
      } else {
        zipCode.removeClass("rouge");
      }

      if (!isValidCVV($(cvv).val())) {
        e.preventDefault();
        cvv.attr("placeholder", "Required").addClass("rouge");
      } else {
        cvv.removeClass("rouge");
      }

      // if (
      //   isValidName($(nameInput).val()) &&
      //   isValidCVV($(cvv).val()) &&
      //   isZipCodeValid($(zipCode).val()) &&
      //   isValidCC($(creditCardNumber).val()) &&
      //   isValidEmail($(email).val())
      // ) {
      //   $(nameInput).val("");
      //   email.val("");
      //   zipCode.val("");
      //   creditCardNumber.val("");
      //   email.val("");

      //   alert("Success");
      // }
    }

    // console.log(isValidName($(nameInput).val()));
  });
});
