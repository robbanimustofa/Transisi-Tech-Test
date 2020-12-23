<template>
  <div class="background-splash">
    <main class="vh-100 w-limit">
      <div
        class="f-36 w-limit popition-text-splash text-center lh-48px lt-003 c-ffffff animated fadeInDown"
      >
        Transisi Tech
      </div>
    </main>
  </div>
</template>
<script>
export default {
  name: "StartScreen",
  mounted() {
      setTimeout(() => {
                this.$router.push('/loginuser');
            },5000);
  },
};
</script>
<style scoped>
</style>