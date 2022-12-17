<template>
<div class="results">
  <y-modal>
    <y-icon class="q__logo" />
    <div class="r__list">
      <y-results-item :percent="20">Тревога</y-results-item>
      <y-results-item>Уровень стресса</y-results-item>
      <y-results-item>Happy index</y-results-item>
    </div>
  </y-modal>
</div>
</template>

<script>
export default {
  name: "Results"
}
</script>

<style scoped>
.results{
  margin-top:4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

}
.r__list{
  margin-bottom: 5rem;
}
</style>
