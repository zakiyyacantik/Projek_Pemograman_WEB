/*$(".minus-btn").on("click", function (e) {
  e.preventDefault();
  var $this = $(this);
  var $input = $this.closest("div").find("input");
  var value = parseInt($input.val());

  if (value > 1) {
    value = value - 1;
  } else {
    value = 0;
  }

  $input.val(value);
});

$(".plus-btn").on("click", function (e) {
  e.preventDefault();
  var $this = $(this);
  var $input = $this.closest("div").find("input");
  var value = parseInt($input.val());

  if (value < 100) {
    value = value + 1;
  } else {
    value = 100;
  }

  $input.val(value);
});*/

$(".minus-btn").on("click", function (e) {
  e.preventDefault();
  var $this = $(this);
  var $input = $this.closest("div").find("input");
  var value = parseInt($input.val());

  if (value > 1) {
    value = value - 1;
  } else {
    value = 0;
  }

  $input.val(value);
  updateTotalPrice($input);
});

$(".plus-btn").on("click", function (e) {
  e.preventDefault();
  var $this = $(this);
  var $input = $this.closest("div").find("input");
  var value = parseInt($input.val());

  if (value < 100) {
    value = value + 1;
  } else {
    value = 100;
  }

  $input.val(value);
  updateTotalPrice($input);
});

function updateTotalPrice($input) {
  var quantity = parseInt($input.val());
  var price = parseFloat($input.closest("div").data("price"));
  var totalPrice = quantity * price;
  $input
    .closest("div")
    .find(".total-price")
    .text("$" + totalPrice.toFixed(2));
}

/*$(".minus-btn").on("click", function (e) {
  e.preventDefault();
  var $this = $(this);
  var $input = $this.closest("div").find("input");
  var value = parseInt($input.val());

  if (value > 1) {
    value = value - 1;
  } else {
    value = 0;
  }

  $input.val(value);
  updateTotalPrice($input);
});

$(".plus-btn").on("click", function (e) {
  e.preventDefault();
  var $this = $(this);
  var $input = $this.closest("div").find("input");
  var value = parseInt($input.val());

  if (value < 100) {
    value = value + 1;
  } else {
    value = 100;
  }

  $input.val(value);
  updateTotalPrice($input);
});

function updateTotalPrice($input) {
  var quantity = parseInt($input.val());
  var price = parseFloat($input.closest("div").data("price"));
  var totalPrice = quantity * price;
  $input
    .closest("div")
    .find(".total-price")
    .text("$" + totalPrice.toFixed(2));
}*/
