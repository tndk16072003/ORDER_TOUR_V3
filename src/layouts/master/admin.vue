<template>
  <div class="wrapper">
    <!--start header wrapper-->
    <div class="header-wrapper">
      <!--start header -->
      <headerVue></headerVue>
      <menuVue></menuVue>
    </div>
    <div class="page-wrapper">
      <div class="page-content">
        <router-view></router-view>
      </div>
    </div>
    <footerVue></footerVue>
  </div>
</template>
<script>
import "../../assets/assets_admin/js/bootstrap.bundle.min.js"
import "../../assets/assets_admin/js/jquery.min.js"
import "../../assets/assets_admin/plugins/simplebar/js/simplebar.min.js"
import "../../assets/assets_admin/plugins/metismenu/js/metisMenu.min.js"
import "../../assets/assets_admin/plugins/vectormap/jquery-jvectormap-2.0.2.min.js"
import "../../assets/assets_admin/plugins/vectormap/jquery-jvectormap-world-mill-en.js"
import "../../assets/assets_admin/plugins/chartjs/js/Chart.min.js"
import "../../assets/assets_admin/plugins/chartjs/js/Chart.extension.js"
import "../../assets/assets_admin/js/index.js"
import "../../assets/assets_admin/js/app.js"
import headerVue from "../components/admin/header.vue"
import menuVue from "../components/admin/menu.vue"
import footerVue from "../components/admin/footer.vue"

export default {
  name: 'app',
  components: {
    headerVue,
    menuVue,
    footerVue,
  }
};
</script>
<style>
@import "../../assets/assets_admin/plugins/vectormap/jquery-jvectormap-2.0.2.css";
@import "../../assets/assets_admin/plugins/simplebar/css/simplebar.css";
@import "../../assets/assets_admin/plugins/perfect-scrollbar/css/perfect-scrollbar.css";
@import "../../assets/assets_admin/plugins/metismenu/css/metisMenu.min.css";
@import "../../assets/assets_admin/css/bootstrap.min.css";
@import "../../assets/assets_admin/css/bootstrap-extended.css";
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");
@import "../../assets/assets_admin/css/app.css";
@import "../../assets/assets_admin/css/icons.css";
@import "../../assets/assets_admin/css/dark-theme.css";
@import "../../assets/assets_admin/css/semi-dark.css";
@import "../../assets/assets_admin/css/header-colors.css";
</style>