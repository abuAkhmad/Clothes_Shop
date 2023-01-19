<template>
  <v-card flat class=" pa-2 mt-2" color="#101e3e" elevation="2" >
    <v-list subheader two-line color="transparent">
      <v-list-item>
        <v-list-item-avatar size="50px">
          <v-icon class="blue-grey darken-2" color="#737e97" dark>mdi-account-outline</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="white--text">Unkown Customer</v-list-item-title>
          <v-list-item-subtitle class="grey--text mt-2">Tap here to add customer</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <div class="d-flex justify-space-around">
      <v-btn class="withoutupercase mb-2" color="#f34f64" rounded text>Current order</v-btn>
      <v-btn class="withoutupercase mb-2" color="#f34f64" rounded text>Order on hold</v-btn>
    </div>
    <v-divider color="3f495e" class="divider_tab"></v-divider>

    <v-list subheader two-line color="#101e3e">
      <div v-for="product in cart" :key="product.id" >
        <v-list-item >
          <v-list-item-content >
            <v-list-item-title class="white--text subtitle-2">{{ product.title }}</v-list-item-title>
            <v-list-item-subtitle class="grey--text mt-2">{{ product.type }}</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-content>
            <v-list-item-subtitle class="grey--text ml-10">{{ product.quantity }}</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-list-item-title class="white--text subtitle-2">$ {{ product.price }}</v-list-item-title>
          </v-list-item-action>
          <v-btn @click="deleteFromCart(product.id)" class="ml-2" dark small text color="pink">
            <v-icon dark>
              mdi-delete
            </v-icon>
          </v-btn>
        </v-list-item>
        <v-divider color="3f495e" class="divider_tab"></v-divider>
      </div>



      <v-list-item >
        <v-list-item-content>
          <v-list-item-title class="white--text subtitle-2 mt-2">Total:</v-list-item-title>
        </v-list-item-content>

        <v-list-item-action>

          <v-list-item-title class="green--text subtitle-2 mt-2">$ {{ cartTotalAmount }}</v-list-item-title>
        </v-list-item-action>
      </v-list-item>
      <v-divider color="3f495e" class="divider_tab"></v-divider>
      <div class="text-center mt-6 mb-2 mr-5 d-flex justify-end">
        <v-btn @click="deleteAll()"  color="#f34f64" text dark rounded class="withoutupercase mr-1">Delete All</v-btn>
        <div>
          <OrderComplete />
        </div>
      </div>
    </v-list>

  </v-card>
</template>

<script>
import {mapState, mapGetters} from "vuex"
import OrderComplete from "@/components/OrderComplete";
export default {
  name: "PaymentBtn",
  data () {
    return {
      tabs: null
    }
  },
  components: {
    OrderComplete
  },
  computed: {
    ...mapState([
      "cart"
    ]),
    ...mapGetters(['cartTotalAmount'])
  },
  methods: {
    deleteFromCart(id) {
      this.$store.dispatch("deleteFromCart", id);
    },
    deleteAll() {
      this.$store.dispatch("deleteAll")
    }
  }
}
</script>

<style scoped>
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
  width: 50% !important;
}
.v-tabs.order {
  width: 100% !important;
}
.theme--light.v-card.card_item {
  background-color: #101e3e !important;
  color: #BABEC9 !important;
}
.v-sheet.v-card.card_item {
  border-radius: 0 !important;
}
.divider.divider_tab {
  height: 2px !important;
  max-height: 2px !important;
}
.v-btn.withoutupercase {
  text-transform: none !important;
}
</style>


<!--<v-list-item-title class="white&#45;&#45;text subtitle-2">Brown Casual Shoes</v-list-item-title>-->
<!--<v-list-item-subtitle class="grey&#45;&#45;text mt-2">Shoes</v-list-item-subtitle>-->
<!--</v-list-item-content>-->
<!--<v-list-item-content>-->
<!--<v-list-item-subtitle class="grey&#45;&#45;text ml-10">1-->

<!--</v-list-item-subtitle>-->
