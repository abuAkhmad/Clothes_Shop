<template>
<v-navigation-drawer v-model="drawer" app dark color="#081635" mini-variant mini-variant-width="90">
  <v-avatar class="d-block text-center mx-auto mt-4" size="50">
    <img src="../assets/logo.png">
  </v-avatar>
  <v-list flat class="mt-5">
    <v-list-item-group v-model="selectItem">
      <v-list-item v-for="(item, i) in items" :key="i" active-class="border" v-slot="{active}" :ripple="false">
        <v-list-item-icon>
          <div :class="active ? 'a' : ''"></div>
          <v-icon v-text="item.icon" :color="active ? '#F34F64' : '#778290'"></v-icon>
        </v-list-item-icon>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</v-navigation-drawer>
</template>

<script>
export default {
  name: "sideBar",
  data: () => ({
    selectItem: 3,
    drawer: null,
    items: [
      {icon: 'mdi-laptop'},
      {icon: 'mdi-tag-outline'},
      {icon: 'mdi-shopping-outline'},
      {icon: 'mdi-wallet-travel'},
      {icon: 'mdi-apps'},
      {icon: 'mdi-tex-box-multiple-outline'},
    ]
  })
}
</script>

<style>
.a {
  position: absolute;
  top: 50%;
  left: 2%;
  transform: translate(-50%, -50%);
  height: 18px;
  width: 12px;
  border-radius: 0 150px 150px 0;
  background-color: #f34f64;
}
.border_img {
  border: 1px solid #778290;
}
.border {
  text-decoration: none;
}
.v-list-item-group .v-list-item--active {
  color: white !important;
}
.theme--light.v-list-item--active .v-list-item__subtitle, .theme--light.v-list-item
.v-list-item__action-text {
  color: white !important;
}

</style>
