<template>
<div class="results">
  <y-modal class="modal">
    <y-icon class="q__logo" />
    <div class="r__list">
      <y-results-item
        v-for="metric in resultsData.metrics"
        :key="metric.name"
        :metric="metric"
      />
    </div>
  </y-modal>
</div>
</template>

<script>
export default {
  name: "Results",
  computed: {
    resultsData() {
      return this.$store.getters.results
    },
  }
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
.modal {
  transition: all  .5s ease-in-out;
}
.r__list{
  margin-bottom: 5rem;
}
</style>
