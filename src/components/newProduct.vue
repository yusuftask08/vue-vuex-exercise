<template>
  <div>
    <div class="row g3">
      <div class="col-auto">
        <input type="text" v-model="productName" class="form-control" />
      </div>
      <div class="col-auto">
        <button @click="addProduct" type="submit" class="btn btn-primary mb-3">
          ekle
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {

  data() {
    return {
      productName: null,
    };
  },
  methods: {
    addProduct() {
      this.$store.commit("addProduct", {
        id: new Date().getTime(),
        title: this.productName,
      });
    },
  
  },
};
</script>
