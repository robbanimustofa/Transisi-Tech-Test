<template>
    <div class="vh-100">
        <!-- HEADER -->
        <div class="header-top bg-white">
            <div class="header-top--inner w-limit d-flex justify-content-between align-items-center">
                <div class="header-top--left" @click="gotolist">
                    <div class="header-item">
                        <img src="../../assets/icons/back-blue.svg" alt="a">
                    </div>
                </div>
                <div class="header-top--middle f-cont f-16 f-bold">Create User</div>
                <div class="header-top--right">
                    <div class="header-item"></div>
                </div>
            </div>
        </div>

        <!-- CONTENT -->
        <main class="p-r-15 p-l-15">
            <div class="flex-100 w-limit">
                <div class="flex-1">
                    <div class="f-30 lh-37 fw-bold c-29291E p-t-50">Create User</div>
                    <small class="m-b-20">Anda dapat membuat akun baru. Dengan megisi input name dan job dibawah.</small>
                    <form action="" class="m-b-50">
                        <div class="m-t-10">
                            <label for="inputEmail" class="f-12">Name</label>
                            <input type="text" class="form-control" id="input"
                                   placeholder="John" v-model="name">
                        </div>
                        <div class="m-t-10">
                            <label for="inputPass" class="f-12">Job</label>
                            <input type="text" class="form-control" id="inputJob"
                                   placeholder="Frontend" v-model="job">
                        </div>
                    </form>
                </div>
                <button type="button" class="btn btn-primary-my btn-lg btn-block m-b-20" @click="fetchCreate">Create User</button>
            </div>
        </main>
    </div>
</template>
<script>
import $ from 'jquery'
export default {
    name:'CreateUser',
    data(){
        return{
            name:'',
            job:'',
        }
    },
    mounted() {
        
    },

    methods: {
        gotolist(){
            this.$router.push('/listuser')
        },
        async fetchCreate(){
            try{
                    const dataCreateUser = {
                        name: this.name,
                        job: this.job
                    }
                    const response = await this.$axios.post(this.$baseurl +
                        'api/users', dataCreateUser)
                        if (response.status === 201) {
                        $('#alertS').show();
                        $('#contentAlertS').html('Berhasil Login!');
                        $('#alertS').removeClass("alert alert-success animated fadeOutUp display-none");
                        $('#alertS').addClass("alert alert-success animated fadeInDown show-display");
                        $('#closeS').show();
                        setTimeout(() => {
                            $('#alertS').removeClass("alert alert-success animated fadeInDown show-display");
                            $('#alertS').addClass("alert alert-success animated fadeOutUp");
                            setTimeout(() =>{
                                $('#alertS').addClass("display-none")
                            },2000)
                        }, 4000)
                        setTimeout(()=>{
                            this.$router.push('/listuser')
                        }, 5000)
                        }else{
                            // alert('200 false')
                        }
                }catch(e){
                    if (!e.code) {
                        // alert('error')
                        if (e.response.status === 400) {
                        $('#alert').show();
                        $('#contentAlert').html(e.response.data.error);
                        $('#alert').removeClass("alert alert-danger animated fadeOutUp display-none");
                        $('#alert').addClass("alert alert-danger animated fadeInDown show-display");
                        $('#close').show();
                        setTimeout(() => {
                            $('#alert').removeClass("alert alert-danger animated fadeInDown show-display");
                            $('#alert').addClass("alert alert-danger animated fadeOutUp");
                            setTimeout(() =>{
                                $('#alert').addClass("display-none")
                            },2000)
                        }, 30000)
                        }else if (e.response.status === 404) {
                        $('#alert').show();
                        $('#contentAlert').html(e.response.data.error);
                        $('#alert').removeClass("alert alert-success animated fadeOutUp display-none");
                        $('#alert').addClass("alert alert-success animated fadeInDown show-display");
                        $('#close').show();
                        setTimeout(() => {
                            $('#alert').removeClass("alert alert-success animated fadeInDown show-display");
                            $('#alert').addClass("alert alert-success animated fadeOutUp");
                            setTimeout(() =>{
                                $('#alert').addClass("display-none")
                            },2000)
                        }, 30000)
                        }
                    }
                }
        }
    },
}
</script>
<style scoped>

</style>