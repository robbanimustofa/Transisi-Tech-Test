<template>
  <div class="vh-100 f-monstarat">
    <main class="p-r-15 p-l-15">
      <div class="flex-100 w-limit">
        <div class="flex-1">
          <div class="f-30 lh-37 fw-bold c-29291E p-t-50">Daftar</div>
          <form action="" class="m-b-50">
            <!-- <div class="m-t-30">
                            <label for="input_fullName" class="f-12">Nama Lengkap</label>
                            <input type="text" class="form-control" id="input_fullName"
                                   aria-describedby="emailHelp" placeholder="Gigih Pribadi">
                        </div>
                        <div class="m-t-10">
                            <label for="inputNickName" class="f-12">Nama Panggilan</label>
                            <input type="text" class="form-control" id="inputNickName"
                                   placeholder="Gigih">
                        </div> -->
            <div class="m-t-10">
              <label for="inputEmail" class="f-12">Email</label>
              <input
                type="email"
                class="form-control"
                id="inputEmail"
                placeholder="EX:Gigih12@gmail.com"
                v-model="email"
              />
            </div>
            <div class="m-t-10">
              <label for="inputPass" class="f-12">Password</label>
              <input
                type="password"
                class="form-control"
                id="inputPass"
                placeholder="Password"
                v-model="password"
              />
            </div>
          </form>
        </div>
        <button
          type="button"
          class="btn btn-primary-my btn-lg btn-block m-b-20"
          @click="CreateRegister"
        >
          Daftar
        </button>
        <small @click="routeToLogin" class="m-b-20"
          >Sudah punya akun?
          <span class="c-FF5151"><b>Masuk Sekarang</b></span></small
        >
      </div>
    </main>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    routeToLogin() {
      this.$router.push("/loginuser");
    },

    async CreateRegister() {
      $('#loader').show();
      try {
        const dataRegister = {
          email: this.email,
          password: this.password,
        };
        const response = await this.$axios.post(
          this.$baseurl + "api/register",
          dataRegister
        );
        if (response.status === 200) {
          $('#loader').hide();
          $("#alertS").show();
          $("#contentAlertS").html("Berhasil Login!");
          $("#alertS").removeClass(
            "alert alert-success animated fadeOutUp display-none"
          );
          $("#alertS").addClass(
            "alert alert-success animated fadeInDown show-display"
          );
          $("#closeS").show();
          setTimeout(() => {
            $("#alertS").removeClass(
              "alert alert-success animated fadeInDown show-display"
            );
            $("#alertS").addClass("alert alert-success animated fadeOutUp");
            setTimeout(() => {
              $("#alertS").addClass("display-none");
            }, 2000);
          }, 4000);
          setTimeout(() => {
            this.$router.push("/listuser");
          }, 5000);
        } else {
          $('#loader').hide();
          // alert('200 false')
        }
      } catch (e) {
        $('#loader').hide();
        if (!e.code) {
          // alert('error')
          if (e.response.status === 400) {
            $("#alert").show();
            $("#contentAlert").html(e.response.data.error);
            $("#alert").removeClass(
              "alert alert-danger animated fadeOutUp display-none"
            );
            $("#alert").addClass(
              "alert alert-danger animated fadeInDown show-display"
            );
            $("#close").show();
            setTimeout(() => {
              $("#alert").removeClass(
                "alert alert-danger animated fadeInDown show-display"
              );
              $("#alert").addClass("alert alert-danger animated fadeOutUp");
              setTimeout(() => {
                $("#alert").addClass("display-none");
              }, 2000);
            }, 30000);
          } else if (e.response.status === 404) {
            $("#alert").show();
            $("#contentAlert").html(e.response.data.error);
            $("#alert").removeClass(
              "alert alert-success animated fadeOutUp display-none"
            );
            $("#alert").addClass(
              "alert alert-success animated fadeInDown show-display"
            );
            $("#close").show();
            setTimeout(() => {
              $("#alert").removeClass(
                "alert alert-success animated fadeInDown show-display"
              );
              $("#alert").addClass("alert alert-success animated fadeOutUp");
              setTimeout(() => {
                $("#alert").addClass("display-none");
              }, 2000);
            }, 30000);
          }
        }
      }
    },
  },
};
</script>

<style scoped>
</style>
