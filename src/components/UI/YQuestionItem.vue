<template>
 <div class="yqitem">
   <p class="qtext">
     Я всегда стремлюсь делать работу до конца, но часто не успеваю
   </p>
   <div class="buttons">
     <y-button>Да</y-button>
     <y-button>Нет</y-button>
   </div>
 </div>
</template>

<script>
export default {
  name: "YQuestionItem"
}
</script>
<style scoped>
.buttons{
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  align-items: center;
  justify-content: space-between;
}
@media screen and (max-width:820px){
  .qtext{
    font-size: 2rem;
  }

}
</style>
