<template>
        <div class="vh-100 f-monstarat">
        <main class="p-r-15 p-l-15">
            <div class="flex-100 w-limit">
                <div class="flex-1">
                    <div class="f-30 lh-37 fw-bold c-29291E p-t-50">Login</div>
                    <form action="" class="m-b-50">
                        <div class="m-t-10">
                            <label for="inputEmail" class="f-12">Email</label>
                            <input type="email" class="form-control" id="inputEmail"
                                   placeholder="EX:Gigih12@gmail.com" v-model="email">
                        </div>
                        <div class="m-t-10">
                            <label for="inputPass" class="f-12">Password</label>
                            <input type="password" class="form-control" id="inputPass"
                                   placeholder="Password" v-model="password">
                        </div>
                    </form>
                </div>
                <button type="button" class="btn btn-primary-my btn-lg btn-block m-b-20" @click="CreateLogin">Daftar</button>
                <small @click="routeToRegister" class="m-b-20">Belum punya akun? <span class="c-FF5151"><b>Daftar Sekarang</b></span></small>
            </div>
        </main>
    </div>
</template>
<script>
export default {
    name:'Login',
    data(){
            return{
                email:'',
                password:'',
            }
        },
        methods:{
            routeToRegister(){
                this.$router.push('/register')
            },

            async CreateLogin(){
                try{
                    const dataLogin = new FormData();
                    dataLogin.append('email', this.email);
                    dataLogin.append('password', this.password);
                    const response = await this.$axios.post(this.$baseurl +
                        'api/register', dataLogin)
                        if (response.status === 200) {
                            alert('suksess')
                            this.$router.push('/listuser')
                        }else{
                            alert('200 false')
                        }
                }catch(e){
                    if (!e.code) {
                        alert('error')
                        if (e.response.status === 400) {
                            alert('err 500')
                        }else if (e.response.status === 404) {
                            alert('err 404')
                        }
                    }
                }
            }
        }

}
</script>
<style scoped>

</style>