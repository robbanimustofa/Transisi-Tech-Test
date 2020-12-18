$(".inputsNext").keyup(function () {
    if (this.value.length == this.maxLength) {
        $(this).next('.inputsNext').focus();
    }
});