<template lang="">
    <div class="vh-100">
        <!-- HEADER -->
        <div class="header-top bg-white">
            <div class="header-top--inner w-limit d-flex justify-content-between align-items-center">
                <div class="header-top--left">
                    <div class="header-item">
                        <img src="../../assets/icons/back-blue.svg" alt="a">
                    </div>
                </div>
                <div class="header-top--middle f-cont f-16 f-bold">List User</div>
                <div class="header-top--right">
                    <div class="header-item"></div>
                </div>
            </div>
        </div>

        <!-- CONTENT -->
        <div class="content-wrapper main-page">
            <div class="separator"></div>
            <h6 class='add-padding-default remove-margin'>Total {{lenght_data}}</h6>
            <div class="kasbon-wrapper p-d-20 p-x-20 w-limit">
                <div class="m-t-16 m-d-20 kasbon-contents f-ln-150">
                    <div class="item-kasbon" v-for="ListUser in listfetch"
                         :key="ListUser.id" @click="detail(ListUser.id)">
                        <div class="item-kasbon--left d-flex">
                            <div class='m-r-10'>
                                <img class="imgFit img-circle" v-bind:src="ListUser.avatar" alt="">
                            </div>
                            <div>
                                <div class="f-16">{{ListUser.id}}</div>
                                <div class="f-16">{{ListUser.first_name}} {{ListUser.last_name}}</div>
                                <div class="f-13 f-c-midgrey">{{ListUser.email}}</div>
                            </div>
                        </div>
                        <div class="item-kasbon--right">
                            <!-- <img src="../../../assets/icons/chevron_right_4.svg" alt=""> -->
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="pointer">
            <span><img src="../../assets/icons/plus-1.svg" alt="" @click="add"></span>
        </div>
        
    </div>
</template>
<script>

import $ from "jquery";
export default {
  name: "ListUser",
  data() {
    return {
      listfetch: [],
      logourlList: "",
      lenght_data: 0,
      iduser: "",
    };
  },
  mounted() {
    this.fetchList();
  },

  methods: {
    add() {
      this.$router.push("/createuser");
    },
    detail(iduser) {
      this.$router.push({ name: "DetailUser", params: { iduser: iduser } });
    },
    async fetchList() {
      var page = 2;
      $('#loader').show();
      try {
        const response = await this.$axios.get(
          this.$baseurl + "api/users?page=" + page
        );
        if (response.status === 200) {
          $('#loader').hide();
          var data = response.data.data;
          // var lenghtdata = response.data.lenght_data;
          this.lenght_data = data.length;
          console.log(this.lenght_data);
          for (var i = 0; i < data.length; i++) {
            this.listfetch.push({
              first_name: data[i].first_name,
              last_name: data[i].last_name,
              id: data[i].id,
              email: data[i].email,
              avatar: data[i].avatar,
            });
          }
        } else {
          alert("200 false");
          $('#loader').hide();
        }
      } catch (e) {
        if (!e.code) {
          alert("error");
          $('#loader').hide();
          if (e.response.status === 400) {
            alert("err 500");
            $('#loader').hide();
          } else if (e.response.status === 404) {
            alert("err 404");
            $('#loader').hide();
          }
        }
      }
    },
  },
};
</script>
<style scoped>
.item-kasbon,
.item-potongan {
  border: 1px solid #c8d0dd;
  padding: 8px 18px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.item-potongan--left,
.item-kasbon--left {
  overflow: hidden;
}

.item-potongan--left .f-16,
.item-kasbon--left .f-16 {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.item-kasbon:last-child,
.item-potongan:last-child {
  margin-bottom: 0px;
}
</style>