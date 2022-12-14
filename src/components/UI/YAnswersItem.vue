<template>
<div class="YAnswerItem">
  <div class="item">
    <div class="item__text">
      <slot></slot>
    </div>
    <div class="item__elipce"></div>
  </div>

  <hr>
</div>
</template>

<script>
export default {
  name: "YAnswersItem"
}
</script>

<style scoped>
.item{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.item__text{
  width: 20rem;
}
.item__elipce{
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  background-color: rgba(217, 217, 217, 0.17);;
}
hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  min-width: 30vw;
  border-left: 0px solid white;
  border-right: 0px solid white;
  border-bottom: 0px solid white;
  border-top: 1px solid rgba(255, 255, 255, 0.52);
}
</style>