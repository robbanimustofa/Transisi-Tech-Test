<template>
  <div class="vh-100" id="detail user">
    <!-- HEADER -->
    <div class="header-top bg-white">
      <div
        class="header-top--inner w-limit d-flex justify-content-between align-items-center"
      >
        <div class="header-top--left" @click="gotolist">
          <div class="header-item">
            <img src="../../assets/icons/back-blue.svg" alt="a" />
          </div>
        </div>
        <div class="header-top--middle f-cont f-16 f-bold">
          Detail User {{ detailuser.first_name }} {{ detailuser.last_name }}
        </div>
        <div class="header-top--right">
          <div class="header-item"></div>
        </div>
      </div>
    </div>

    <main class="">
      <div class="upload-file text-alignC pad-top-50" id="section-1">
        <div class="upload-file-wrapper mar-top-20 mar-bottom-20">
          <div class="">
            <img
              class="imgFit img-circle-big"
              v-bind:src="detailuser.avatar"
              alt=""
            />
          </div>
        </div>
      </div>

      <div class="mar-top-12" id="section-2">
        <div class="row remove-margin add-padding-default text-detailO">
          <div class="flex-1">
            <div class="font-14 color-6f7 line-height-20 letter-space-002">
              ID
            </div>
            <div class="font-16 color-0000 line-height-25 letter-space-002">
              {{ detailuser.id }}
            </div>
          </div>
        </div>

        <div
          class="row remove-margin add-padding-default text-detailO"
          data-toggle="modal"
          data-target="#modalname"
        >
          <div class="flex-1">
            <div class="font-14 color-6f7 line-height-20 letter-space-002">
              Nama
            </div>
            <div class="font-16 color-0000 line-height-25 letter-space-002">
              {{ detailuser.first_name }} {{ detailuser.last_name }}
            </div>
          </div>
          <div class="hash">
            <div class="color-white badge badge-primary">Edit</div>
          </div>
        </div>
        <div
          class="row remove-margin add-padding-default text-detailO"
          data-toggle="modal"
          data-target="#modalusahapemilik"
        >
          <div class="flex-1">
            <div class="font-14 color-6f7 line-height-20 letter-space-002">
              Email
            </div>
            <div class="font-16 color-0000 line-height-25 letter-space-002">
              {{ detailuser.email }}
            </div>
          </div>
          <div class="hash">
            <div class="color-white badge badge-primary">Edit</div>
          </div>
        </div>
      </div>
      <div class="pembatas-new"></div>

      <div class="mar-top-16" id="section-3">
        <div @click="deleteUser">
          <div
            class="add-padding-default font-14 color-0000 line-height-20 letter-space-002"
          >
          </div>
          <div class="row remove-margin add-padding-default text-detailO">
            <div class="flex-1">
              <div class="font-16 line-height-25 letter-space-002 color-0000">
                Hapus User {{ detailuser.first_name }} {{ detailuser.last_name }}
              </div>
            </div>
            <div class="hash">
              <span
                ><img class="" src="../../assets/icons/Hapsu_owner.svg" alt=""
              /></span>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="modalname" role="dialog">
        <div class="modal-dialog modal-lg bani-modal">
          <div class="modal-content">
            <div class="modal-header">
              <div class="nav-btn kiri"></div>
              <h5 class="navbar-title text-center">Ubah Nama</h5>
              <div class="nav-btn kanan tutup">
                <img
                  src="../../assets/icons/x2.svg"
                  data-dismiss="modal"
                  alt=""
                />
              </div>
            </div>
            <div class="modal-body">
              <div class="row remove-margin">
                <label class="remove-margin mar-top-12 color-6f7 require"
                  >Nama</label
                >
                <input
                  type="text"
                  class="form-control inputs"
                  placeholder="Bongkeng alias Pedut"
                />
              </div>
            </div>
            <div class="modal-footer remove-mar-lr">
              <div style="margin-right: 0px">
                <button
                  type="button"
                  class="btn btn-primary btn-long"
                  data-dismiss="modal"
                  id="btneditnama"
                >
                  Simpan Perubahan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="modalusahapemilik" role="dialog">
        <div class="modal-dialog modal-lg bani-modal">
          <div class="modal-content">
            <div class="modal-header">
              <div class="nav-btn kiri"></div>
              <h5 class="navbar-title text-center">Ubah Email</h5>
              <div class="nav-btn kanan tutup">
                <img
                  src="../../assets/icons/x2.svg"
                  data-dismiss="modal"
                  alt=""
                />
              </div>
            </div>
            <div class="modal-body">
              <div class="row remove-margin">
                <label class="remove-margin mar-top-12 color-6f7 require"
                  >Email</label
                >
                <input
                  type="text"
                  class="form-control inputs"
                  placeholder="skdlafrr@gmsadh.com"
                />
              </div>
            </div>
            <div class="modal-footer remove-mar-lr">
              <div style="margin-right: 0px">
                <button
                  type="button"
                  class="btn btn-primary btn-long"
                  data-dismiss="modal"
                  id="btneditemail"
                >
                  Simpan Perubahan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>

import $ from "jquery";
export default {
  name: "DetailUser",
  data() {
    return {
      id: "",
      detailuser: {},
    };
  },
  mounted() {
    this.id = this.$route.params.iduser;
    console.log(this.id);
    this.fetchdetailuser();
  },
  methods: {
    gotolist() {
      this.$router.push("/listuser");
    },

    async deleteUser(){
      $('#loader').show();
      try {
        const response = await this.$axios.delete(
          this.$baseurl + "api/users/" + this.id
        );
        if (response.status === 204) {
          $('#loader').hide();
          this.$router.push('/listuser')
        }
      } catch (e) {
        $('#loader').hide();
        alert("err");
      }
    },
    async fetchdetailuser() {
      $('#loader').show();
      try {
        const response = await this.$axios.get(
          this.$baseurl + "api/users/" + this.id
        );
        if (response.status === 200) {
          $('#loader').hide();
          this.detailuser = response.data.data;
          console.log(this.detailuser);
          // alert('sukses')
        }
      } catch (e) {
        $('#loader').hide();
        alert("err");
      }
    },
  },
};
</script>
<style scoped>
</style>