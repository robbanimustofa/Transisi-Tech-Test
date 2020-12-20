<template>
    <div>
        <div v-on:click="closealert" role="alert" id="alert"  class="fix-alert z-index">
            <!-- <img class="" style="float: right;width: 16px;height: 16px;color: #155724" src="../assets/icons/close-red.svg" alt=""> -->
            <p class="remove-margin" id="contentAlert"></p>
        </div>
        <div v-on:click="closealertS" role="alert" id="alertS"  class="fix-alert z-index">
            <!-- <i class="fa fa-times" id="closeS" aria-hidden="true" style="float: right"></i> -->
            <p class="remove-margin" id="contentAlertS"></p>
        </div>
    </div>
</template>
<script>
import $ from 'jquery'
export default {
    name:'Alert',
    mounted() {
        $('#alert').hide();
        $('#alertS').hide();

    },
    methods: {
        closealert() {
                $('#alert').removeClass("alert alert-danger animated fadeInDown show-display");
                $('#alert').addClass("alert alert-danger animated fadeOutUp");
                setTimeout(() =>{
                    $('#alert').addClass("display-none")
                }, 2000)

            },

            closealertS() {
                // $('#alertS').removeClass("alert alert-success animated fadeInDown show-display");
                // $('#alertS').addClass("alert alert-success animated fadeOutUp");
                // setTimeout(() =>{
                //     $('#alertS').addClass("display-none")
                // }, 2000)
            },
    },
}
</script>
<style scoped>

</style>