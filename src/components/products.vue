<template>
  <div>
    <h3>Ürün listesi</h3>
    <ul class="list-group">
      <productListDelete />
    </ul>
    <small class="text-primary">
      {{ $store.state.productList.length }} adet ürün vardır..</small
    >
  </div>
</template>
<script>
import productListDelete from "@/components/productListDelete";
export default {
  components: {
    productListDelete,
  },
};
</script>
