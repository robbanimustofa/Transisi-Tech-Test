<template>
    <div class="vh-100 f-monstarat">
        <main class="p-r-15 p-l-15">
            <div class="flex-100 w-limit">
                <div class="flex-1">
                    <div class="f-30 lh-37 fw-bold c-29291E p-t-50">Daftar</div>
                    <form action="" class="m-b-50">
                        <div class="m-t-30">
                            <label for="input_fullName" class="f-12">Nama Lengkap</label>
                            <input type="text" class="form-control" id="input_fullName"
                                   aria-describedby="emailHelp" placeholder="Gigih Pribadi">
                        </div>
                        <div class="m-t-10">
                            <label for="inputNickName" class="f-12">Nama Panggilan</label>
                            <input type="text" class="form-control" id="inputNickName"
                                   placeholder="Gigih">
                        </div>
                        <div class="m-t-10">
                            <label for="inputEmail" class="f-12">Email</label>
                            <input type="email" class="form-control" id="inputEmail"
                                   placeholder="EX:Gigih12@gmail.com">
                        </div>
                        <div class="m-t-10">
                            <label for="inputPass" class="f-12">Password</label>
                            <input type="password" class="form-control" id="inputPass"
                                   placeholder="Password">
                        </div>
                    </form>
                </div>
                <button type="button" class="btn btn-primary-my btn-lg btn-block m-b-20" @click="pushRegister">Daftar</button>
                <small @click="routeToLogin" class="m-b-20">Sudah punya akun? <span class="c-FF5151"><b>Masuk Sekarang</b></span></small>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        name: "Register",
        data(){
            return{
                fullname:'',
                nickname:'',
                email:'',
                password:'',
            }
        },
        methods:{
            routeToLogin(){
                // this.$router.push('/login')
            },

            pushRegister(){
                // this.$router.push('/dashboard')
            }
        }
    }
</script>

<style scoped>

</style>
