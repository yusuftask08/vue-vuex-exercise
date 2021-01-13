<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-8 offset-2">
          <h4>{{ $store.getters.userPrice }}</h4>
          <div class="form-group">
            <input v-model="newPrice" type="text" class="form-control mt-3" />
          </div>
          <button @click="setNewPrice" class="btn btn-primary 
          btn-sm mt-3 me-3">
            Send Price
          </button>
          <!-- <button class="btn btn-danger btn-sm">-</button> -->

          <childA />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import childA from "./components/childA.vue";
export default {
  components: { childA },
  name: "App",
  data(){
    return {
      newPrice : 0,
    }
  },
  methods : {
    setNewPrice(){
      // this.$store.state.incoming_price = this.newPrice;
    this.$store.commit("setIncomingPrice", this.newPrice)
    this.$store.commit("addToList", "yusuftask");
}
  },
};
</script>
