<template>
  <div class="home">
    <PlayGround />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PlayGround from "@/components/PlayGround.vue"; // @ is an alias to /src

@Component({
  components: {
    PlayGround
  }
})
export default class Home extends Vue {}
</script>
