<template>
<div class="results__item">
  <p class="item__title"><slot></slot></p>
  <div class="range_wrapper">
    <div class="item__range" ref="line"></div>
    <div class="item__range_progress" ref="line__progress">{{percents}}%</div>
  </div>
</div>
</template>

<script>
export default {
  name: "YResultsItem",
  props: {
    metric: Object
  },
  data() {
    return {
    }
  },
  mounted() {
    const line = this.$refs.line
    const progressLine = this.$refs.line__progress
    const fullWidth = line.offsetWidth
    const voidWidth = fullWidth - (fullWidth / 100 * this.percents)
    progressLine.style.right = `${voidWidth}px`
  },
  computed: {
    percents() {
      const values = this.metric.values
      let max = values.sort((a, b) => b - a )[0]
      let lastKey = Object.keys(values).sort((a, b) => b - a)[0]
      console.log(max, lastKey)
      return  (max > 0) ? Math.floor(values[lastKey] / max) * 100 : 0
    }
  }
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
.range_wrapper {
  position: relative;
}
.range_wrapper:hover {
  cursor: pointer;
}
.item__range {
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
.item__range_progress {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  padding: 0 1rem;
  background: linear-gradient(200.42deg, #38F9D7 13.57%, #43E97B 98.35%);
  border-radius: 7px;
}
</style>
