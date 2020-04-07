<template>
  <div>
    <bounce-loader class="m-auto" :loading="isLoading" :color="'#68d391'" :size="100" />
    <!-- Importamos Componentes -->
    <cx-assets-table class="center" v-if="!isLoading" v-bind:assets="assets" />
  </div>
</template>

<script>
import api from "../api";
import CxAssetsTable from "@/components/CxAssetsTable";

export default {
  name: "Home",
  components: { CxAssetsTable },

  data() {
    return {
      isLoading: false,
      assets: [],
    };
  },
  created() {
    this.isLoading = true;
    api
      .getAssets()
      .then((assets) => (this.assets = assets))
      .finally(() => (this.isLoading = false));
  },
};
</script>

<style></style>
