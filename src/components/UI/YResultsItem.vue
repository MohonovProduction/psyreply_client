<template>
<div class="results__item">
  <p class="item__title"><slot></slot></p>
  <div class="item__range"></div>
</div>
</template>

<script>
export default {
  name: "YResultsItem"
}
</script>

<style scoped>
.results__item{
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.item__title{
  font-size: 1.5em;
  margin-top: 1rem;
  align-self: start;
  margin-bottom: 0.5rem;
}
.item__range{
  width: 30rem;
  height: 3rem;
  background: linear-gradient(155.31deg, rgba(255, 255, 255, 0.5) 12.33%, rgba(255, 255, 255, 0) 34.31%, rgba(255, 255, 255, 0) 52.66%, rgba(255, 255, 255, 0.54) 74.67%);
  background-blend-mode: overlay;
  border-radius: 7px;
  border: 2px solid;
  border-left-color: rgba(255, 255, 255, 0);
  border-right-color:rgba(255, 255, 255, 0) ;
  border-bottom-color: rgba(255, 255, 255, 0.5) ;
  border-top-color: rgba(255, 255, 255, 0.5);
}
</style>