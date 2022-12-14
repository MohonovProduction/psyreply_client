<template>
<div class="yqlist">
  <y-question-item></y-question-item>
  <hr>
  <y-question-item></y-question-item>
  <hr>
  <y-question-item></y-question-item>

</div>
</template>

<script>
export default {
  name: "YQuestionsList"
}
</script>

<style scoped>
hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  min-width: 30vw;
  border-left: 0px solid white;
  border-right: 0px solid white;
  border-bottom: 0px solid white;
  border-top: 1px solid rgba(255, 255, 255, 0.52);
}
@media screen and (max-width:820px){
  .yqlist{
    display: grid;
    grid-gap: 2.5rem;
  }
}


</style>