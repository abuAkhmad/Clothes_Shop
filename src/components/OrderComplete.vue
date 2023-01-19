<template>
  <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog
          transition="dialog-bottom-transition"
          max-width="600"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn  color="#388E3C" dark rounded class="withoutupercase" v-bind="attrs"
                  v-on="on" @click="deleteAll">Checkout</v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card height="450px">
            <v-card-text class="text-center pa-15">
              <v-icon class="check mb-10" color="#E91E63">mdi-check-circle-outline</v-icon>
              <div class="text-h3 mb-1 pink--text">Thank You!</div>
              <div class="text-h5">Order Successfully Placed</div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                  text
                  @click="dialog.value = false"
                  color="green"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
export default {
  methods: {
    deleteAll() {
      this.$store.dispatch("deleteAll")
    }
  }
}
</script>

<style scoped>
.check {
  font-size: 150px;
}
</style>
