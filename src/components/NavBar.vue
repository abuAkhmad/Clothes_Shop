<template>
 <v-app-bar app dark color="#081635" flat>
   <v-col sm="3">
     <v-text-field label="Search" prepend-inner-icon="mdi-magnify" dense class="mt-3"></v-text-field>
   </v-col>
   <v-divider vertical inset class="mr-4"></v-divider>
   <v-btn text small class="withoutupercase grey--text">
     Customer
     <v-icon small>mdi-chevron-down</v-icon>
   </v-btn>
 </v-app-bar>
</template>

<script>
export default {
  name: "NavBar",
  data: () => ({
    links: [
        'Dashboard',
        'Messages',
        'Profiles',
        'Updates',
    ],
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
.v-tabs-slider {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 15px !important;
  width: 20px !important;
  border-radius: 150px 150px 0 0;
  background-color: #f34f64;
}
.v-tab.withoutupercase{
  text-transform: none !important;
}
.v-tabs {
  width: 30% !important;
}
.v-btn:not(.v-btn--round).v-size--small {
  min-width: 10px !important;
  padding: 0 5px !important;
}
.theme--dark.v-text-field > .v-input__control > .v-input__slot:before {
  border-color: #323850 !important;
}
</style>
