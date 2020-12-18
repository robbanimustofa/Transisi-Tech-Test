// inputCalc() {
//   $('.number-counter').each(function (i, obj) {

//     var inputx = $(this).children('input');
//     var increment = $(this).children('.inc');
//     var decrement = $(this).children('.dec');
//     var suffix = $(this).children('.input-suffix');
//     var suffixWidth = suffix.width();

//     // suffix positioning
//     suffix.css('left', "calc(50% - (" + suffixWidth + "px / 3) + 3px)");
//     suffix.prev().css('padding-right', 'calc(50% + (' + suffixWidth + 'px / 3))');

//     // select all if click
//     inputx.click(function () {
//       $(this).select()
//     });

//     // input limit
//     inputx.on('input', function () {
//       var value = $(this).val();
//       if ((value !== '') && (value.indexOf('.') === -1)) {
//         $(this).val(Math.max(Math.min(value, $(this).attr('max')), $(this).attr('min')));
//       }
//       if (value == '') {
//         $(this).val($(this).attr('min'));
//       }
//     });

//     // increment button
//     increment.click(function () {
//       var inputz = $(this).siblings('input');
//       if (inputz.val() < parseInt(inputz.attr('max'))) {
//         inputz.val(parseInt(inputz.val()) + 1)
//       }
//     });

//     // decrement button
//     decrement.click(function () {
//       var inputz = $(this).siblings('input');
//       if (inputz.val() > parseInt(inputz.attr('min'))) {
//         inputz.val(parseInt(inputz.val()) - 1)
//       }
//     });
//   });
// };