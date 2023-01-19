<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background}">
    <side-bar/>
    <NavBar />
    <v-container fluid>
      <v-app-bar dark color="transparent" flat>
        <v-tabs color="#f34f64" v-model="tab">
          <v-tabs-slider color="#f34f64"></v-tabs-slider>
          <v-tab class="withoutupercase">Shirts</v-tab>
          <v-tab class="withoutupercase">Trousers</v-tab>
          <v-tab class="withoutupercase">Shoes</v-tab>
          <v-tab class="withoutupercase">Caps</v-tab>
        </v-tabs>
      </v-app-bar>

      <v-card tile color="#081635" class="my-2 card_global">
          <v-row>
            <v-col cols="12" sm="8">
              <v-tabs-items v-model="tab">
                <v-tab-item>
                  <v-card flat class="card_item pa-2">
                    <v-row>
                      <v-col cols="12" sm="3" v-for="product in shirts" :key="product.id">
                        <v-hover v-slot="{hover}" close-delay="200">
                          <v-card :elevation="hover ? 16 :2" :class="{ 'on-hover' : hover}"
                          class="mx-auto" height="300" tile color="#101e3e" align="center">
                            <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn tile small :color="hover ? '#f34f64' : '#777d8b'" dark>
                               ${{ product.price }}
                              </v-btn>
                            </v-card-actions>
                            <v-img :src=product.img width="150" height="150"></v-img>
                            <v-card-text class="pb-0 white--text">
                              <h4> {{ product.title }} </h4>
                              <p class="mb-0"> {{ product.type }} </p>
                            </v-card-text>
                            <v-card-actions class="flex justify-center pt-0">
                              <v-btn depressed
                                     color="error"
                                     rounded
                                     text
                                     @click="addToCart(product.id)"
                              >Add to Cart</v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-hover>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-tab-item>

                <v-tab-item>
                  <v-card flat class="card_item pa-2">
                    <v-row>
                      <v-col cols="12" sm="3" v-for="product in trousers" :key="product.id">
                        <v-hover v-slot="{hover}" close-delay="200">
                          <v-card :elevation="hover ? 16 :2" :class="{ 'on-hover' : hover}"
                                  class="mx-auto" height="300" tile color="#101e3e" align="center">
                            <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn tile small :color="hover ? '#f34f64' : '#777d8b'" dark>
                                ${{ product.price }}
                              </v-btn>
                            </v-card-actions>
                            <v-img :src=product.img
                                   aspect-ratio="1.3"
                                   contain
                            ></v-img>
                            <v-card-text class="pb-0 white--text">
                              <h4> {{ product.title }} </h4>
                              <p class="mb-0"> {{ product.type }} </p>
                            </v-card-text>
                            <v-card-actions class="flex justify-center pt-0">
                              <v-btn depressed
                                     color="error"
                                     rounded
                                     text
                                     @click="addToCart(product.id)"
                              >Add to Cart</v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-hover>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-tab-item>

                <v-tab-item>
                  <v-card flat class="card_item pa-2">
                    <v-row>
                      <v-col cols="12" sm="3" v-for="product in shoes" :key="product.id">
                        <v-hover v-slot="{hover}" close-delay="200">
                          <v-card :elevation="hover ? 16 :2" :class="{ 'on-hover' : hover}"
                                  class="mx-auto" height="300" tile color="#101e3e" align="center">
                            <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn tile small :color="hover ? '#f34f64' : '#777d8b'" dark>
                                ${{ product.price }}
                              </v-btn>
                            </v-card-actions>
                            <v-img :src=product.img class="mr-5 ml-5 mb-10"></v-img>
                            <v-card-text class="pb-0 white--text">
                              <h4> {{ product.title }} </h4>
                              <p class="mb-0"> {{ product.type }} </p>
                            </v-card-text>
                            <v-card-actions class="flex justify-center pt-0">
                              <v-btn depressed
                                     color="error"
                                     rounded
                                     text
                                     @click="addToCart(product.id)"
                              >Add to Cart</v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-hover>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-tab-item>

                <v-tab-item>
                  <v-card flat class="card_item pa-2">
                    <v-row>
                      <v-col cols="12" sm="3" v-for="product in caps" :key="product.id">
                        <v-hover v-slot="{hover}" close-delay="200">
                          <v-card :elevation="hover ? 16 :2" :class="{ 'on-hover' : hover}"
                                  class="mx-auto" height="300" tile color="#101e3e" align="center">
                            <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn tile small :color="hover ? '#f34f64' : '#777d8b'" dark>
                                ${{ product.price }}
                              </v-btn>
                            </v-card-actions>
                            <v-img :src=product.img width="150" height="150"></v-img>
                            <v-card-text class="pb-0 white--text">
                              <h4> {{ product.title }} </h4>
                              <p class="mb-0"> {{ product.type }} </p>
                            </v-card-text>
                            <v-card-actions class="flex justify-center pt-0">
                              <v-btn depressed
                                     color="error"
                                     rounded
                                     text
                                     @click="addToCart(product.id)"
                              >Add to Cart</v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-hover>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-tab-item>
              </v-tabs-items>
            </v-col>
            <v-col cols="12" sm="4">
              <PaymentBtn/>
            </v-col>
          </v-row>
        </v-card>

    </v-container>
  </v-app>
</template>

<script>
import sideBar from "@/components/sideBar";
import NavBar from "@/components/NavBar";
import PaymentBtn from "@/components/Payment";


  export default {
    name: 'HomeView',
    data () {
      return {
        tab: null
      }
    },
    components: {sideBar, NavBar, PaymentBtn},
    computed: {
      shirts(){
        return this.$store.state.products.shirts;
      },
      shoes(){
        return this.$store.state.products.shoes;
      },
      trousers(){
        return this.$store.state.products.trousers;
      },
      caps(){
        return this.$store.state.products.caps;
      }
    },
    methods: {
      addToCart(id){
        this.$store.dispatch("addToCart", id);
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
.container {
  padding: 0 !important;
}
.v-card.card_global {
  height: 800px !important;
}
.theme--light.v-card.card_item {
  background-color: #081635 !important;
  color: #BABEC9 !important;
 }
.v-sheet.v-card.card_item {
  border-radius: 0 !important;
}
.v-btn:not(.v-btn--round).v-size--small {
  width: 50px !important;
}
.v-appliaction .red--text {
  color: #f34f64 !important;
  caret-color: #f34f64 !important;
}
</style>


// created(){
//   this.$store.dispatch("fetchProducts");
// },
