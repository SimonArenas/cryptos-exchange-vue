<template>
  <header class="shadow w-screen">
    <nav>
      <nav class="flex items-center justify-between flex-wrap fondo p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <cx-icon class="flex-1 flex justify-between items-center" />
          <routerLink to="/" class="font-semibold text-xl tracking-tight">
            SimonExchange
          </routerLink>
        </div>

        <div
          class="hidden sm:block w-full block flex-grow lg:flex lg:items-center lg:w-auto"
        >
          <div class="text-sm lg:flex-grow">
            <router-link
              v-for="l in links"
              :key="l.title"
              :to="l.to"
              class="block mt-2 lg:inline-block lg: mt-0 text-teal-200 hover:text-white mr-4"
              >{{ l.title }}</router-link
            >
          </div>
        </div>

        <div class="hidden lg:flex lg:items-center lg:w-auto w-full">
          <ul
            class="lg:flex items-center justify-between text-base text-white pt-4 lg:pt-0 mr-10"
          >
            <li>
              Made with 💛 by <a  href="https://github.com/SimonArenas" target="blank">Simón</a>
            </li>
          </ul>
        </div>
      </nav>
    </nav>
  </header>
</template>

<script>
import CxIcon from "@/components/CxIcon";

export default {
  name: "CxHeader",
  components: { CxIcon },

  props: {
    links: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.fondo {
  background: #00b09b; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #96c93d,
    #00b09b
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #96c93d,
    #00b09b
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
