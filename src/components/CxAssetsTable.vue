<template>
  <table class="m-auto">
    <thead>
      <tr class="bg-gray-100 border-b-2 border-gray-400">
        <th></th>
        <th :class="{ up: this.sortOrder === 1, down: this.sortOrder === -1 }">
          <span class="underline cursor-pointer" @click="changeSortOrder"
            >Ranking</span
          >
        </th>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Cap. de Mercado</th>
        <th>Variación 24hs</th>
        <td class="hidden sm:block">
          <input
            class="bg-gray-100 focus:outline-none border-b border-gray-400 py-2 px-4 block"
            id="filter"
            placeholder="Buscar..."
            type="text"
            v-model="filter"
          />
        </td>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="a in filteredAssets"
        :key="a.id"
        class="border-b border-gray-200 hover:bg-gray-100 hover:bg-orange-100"
      >
        <td>
          <img
            :src="
              `https://static.coincap.io/assets/icons/${a.symbol.toLowerCase()}@2x.png`
            "
            :alt="a.name"
          />
        </td>
        <td>
          <b>#{{ a.rank }}</b>
        </td>
        <td class="text-green-400 font-bold">
          <router-link
            class="hover:cursor-pointer hover:underline"
            v-bind:to="{ name: 'coin-detail', params: { id: a.id } }"
          >
            {{ a.name }}
          </router-link>
          <span class="text-gray-500 font-semibold"> {{ a.symbol }}</span>
        </td>
        <td>
          {{ a.priceUsd | dollar }}
        </td>
        <td>{{ a.marketCapUsd | dollar }}</td>
        <td
          v-bind:class="{
            red: a.changePercent24Hr < 0,
            green: a.changePercent24Hr > 0,
          }"
        >
          {{ a.changePercent24Hr | percent }}
        </td>
        <td class="hidden sm:block">
          <cx-button @click="goToCoin(a.id)">
            <span>Detalle</span>
          </cx-button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import CxButton from "@/components/CxButton";
export default {
  name: "PxAssetsTable",
  components: { CxButton },

  data() {
    return {
      filter: "",
      sortOrder: 1,
    };
  },

  computed: {
    filteredAssets() {
   
      const altOrder = this.sortOrder === 1 ? -1 : 1;
      return this.assets
        .filter(
          (a) =>
            a.symbol.toLowerCase().includes(this.filter.toLowerCase()) ||
            a.name.toLowerCase().includes(this.filter.toLowerCase())
        )
        .sort((a, b) => {
          if (parseInt(a.rank) > parseInt(b.rank)) {
            return this.sortOrder;
          }
          return altOrder;
        });
    },
  },

  props: {
    assets: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    goToCoin(id) {
      this.$router.push({ name: "coin-detail", params: { id } });
    },
    changeSortOrder() {
      this.sortOrder = this.sortOrder === 1 ? -1 : 1;
    },
  },
};
</script>

<style scoped>
table {
  max-width: 1000px;
}
.red {
  color: red;
}
.green {
  color: green;
}

img {
  width: 30px;
}

.up::before {
  content: "👆";
}

.down::before {
  content: "👇";
}

td {
  padding: 0px 0px;
  font-size: 0.6rem;
  text-align: center;
}

th {
  padding: 5px;
  font-size: 0.6rem;
}

@media (min-width: 640px) {
  td,
  th {
    padding: 20px;
    font-size: 1rem;
  }

  th {
    padding: 12px;
  }
}
</style>
