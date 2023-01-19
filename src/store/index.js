import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: {
      shirts: [
        {
          title: 'Adidas',
          type: 'Shirt',
          price: 65,
          id: 1,
          quantity: 5,
          img: require("@/assets/1.png")
        },
        {
          title: 'Fila',
          type: 'Shirt',
          price: 45,
          id: 2,
          quantity: 5,
          img: require("@/assets/2.png")
        },
        {
          title: 'Puma',
          type: 'Shirt',
          price: 56,
          id: 3,
          quantity: 5,
          img: require("@/assets/3.png")
        },
        {
          title: 'Under Armour',
          type: 'Shirt',
          price: 76,
          id: 4,
          quantity: 5,
          img: require("@/assets/2.png")
        },
        {
          title: 'Reebok',
          type: 'Shirt',
          price: 36,
          id: 5,
          quantity: 5,
          img: require("@/assets/1.png")
        },
      ],
      trousers: [
        {
          title: 'Adidas',
          type: 'Trousers',
          price: 34,
          id: 11,
          quantity: 5,
          img: require("@/assets/t1.png")
        },
        {
          title: 'Fila',
          type: 'Trousers',
          price: 42,
          id: 12,
          quantity: 5,
          img: require("@/assets/t3.png")
        },
        {
          title: 'Puma',
          type: 'Trousers',
          price: 29,
          id: 13,
          quantity: 5,
          img: require("@/assets/t2.png")
        },
        {
          title: 'Under Armour',
          type: 'Trousers',
          price: 48,
          id: 14,
          quantity: 5,
          img: require("@/assets/t1.png")
        },
        {
          title: 'Reebok',
          type: 'Trousers',
          price: 37,
          id: 15,
          quantity: 5,
          img: require("@/assets/t2.png")
        },
      ],
      shoes: [
        {
          title: 'Adidas',
          type: 'Sport Shoes',
          price: 64,
          id: 6,
          quantity: 5,
          img: require("@/assets/s1.png")
        },
        {
          title: 'Fila',
          type: 'Sport Shoes',
          price: 57,
          id: 7,
          quantity: 5,
          img: require("@/assets/s2.png")
        },
        {
          title: 'Puma',
          type: 'Sport Shoes',
          price: 49,
          id: 8,
          quantity: 5,
          img: require("@/assets/s3.png")
        },
        {
          title: 'Under Armour',
          type: 'Sport Shoes',
          price: 75,
          id: 9,
          quantity: 5,
          img: require("@/assets/s1.png")
        },
        {
          title: 'Reebok',
          type: 'Sport Shoes',
          price: 40,
          id: 10,
          quantity: 5,
          img: require("@/assets/s2.png")
        },
      ],
      caps: [
        {
          title: 'Adidas',
          type: 'Caps',
          price: 18,
          id: 16,
          quantity: 5,
          img: require("@/assets/c1.png")
        },
        {
          title: 'Fila',
          type: 'Caps',
          price: 16,
          id: 17,
          quantity: 5,
          img: require("@/assets/c2.png")
        },
        {
          title: 'Puma',
          type: 'Caps',
          price: 22,
          id: 18,
          quantity: 5,
          img: require("@/assets/c3.png")
        },
        {
          title: 'Under Armour',
          type: 'Caps',
          price: 30,
          id: 19,
          quantity: 5,
          img: require("@/assets/c2.png")
        },
        {
          title: 'Reebok',
          type: 'Caps',
          price: 24,
          id: 20,
          quantity: 5,
          img: require("@/assets/c1.png")
        },
      ],

    }
    ,
    cart: [],
  },
  getters: {
    cart(state) {
      return state.cart
    },
    cartTotalAmount: (state) => {
      return state.cart.reduce((total, product) => {
        return total + (product.price * product.quantity);
      }, 0);
    },
    },
    mutations: {
      setUpProducts: (state, productsPayload) => {
        state.products = productsPayload;
      },
      ADD_TO_CART: (state, productId) => {
        let shirts = state.products.shirts.find((product) => product.id === productId);
        let shoes = state.products.shoes.find((product) => product.id === productId);
        let caps = state.products.caps.find((product) => product.id === productId);
        let trousers = state.products.trousers.find((product) => product.id === productId);

        let cartProduct = state.cart.find((product) => product.id === productId);

        if (cartProduct) {
          cartProduct.quantity++;
        } else {
          state.cart.push({
            ...shoes,
            ...shirts,
            ...caps,
            ...trousers,
            quantity: 1,
          });
        }
      },
      DELETE_FROM_CART: (state, productId) => {

        let cartProductIndex = state.cart.findIndex((product) => product.id === productId);

        state.cart.splice(cartProductIndex, 1);
      },
      DELETE_ALL: (state) => {
        state.cart = []
      }
    },
    actions: {
      addToCart ({commit}, productId) {
        commit('ADD_TO_CART', productId)},


      deleteFromCart ({commit}, productId) {
          commit('DELETE_FROM_CART', productId)},


      deleteAll: ({commit}) => {
        commit("DELETE_ALL")
      }
    },
    modules: {
    }
  })

