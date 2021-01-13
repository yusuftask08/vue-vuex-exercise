<template>
  <div>
    <div class="container">
      <div class="row mt-5">
        <div class="col-md-8 offset-2">
        
         <!-- form -->
         <newProduct />
         <!-- Form -->
          <products />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import newProduct from "@/components/newProduct";
  import products from "@/components/products";
export default {
  components : {
    newProduct,
    products,
  },
}
</script>
