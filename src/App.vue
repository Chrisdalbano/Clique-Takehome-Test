<template>
  <Home />
</template>

<script lang="ts">
import Home from "./views/Home.vue";

export default defineComponent({
  name: "App",
  setup() {
    return {};
  },
  components: {
    Home,
  },
});
</script>
