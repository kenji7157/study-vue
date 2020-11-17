<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      TEST
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { SampleModule, getters }  from "../store/SampleModule";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  created () {
    console.log('-- created --');
    // $storeは全てのモジュールを包括しているので、どのアクションでも呼び出せる
    SampleModule.mutations.setText(this.$store, 'TEST');
    // console.log(SampleModule.getters.text(this.$store));
    // console.log(getters.text(this.$store));

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
