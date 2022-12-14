<template>
  <div class="QuestionType">
    <y-modal class="q__modal">
      <y-icon class="q__logo" />
      <div class="questions">
        <p class="question__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa lectus arcu, elementum amet ultricies volutpat sed montes. Blandit dui leo non fermentum interdum malesuada bibendum arcu turpis. Malesuada vitae tempor ut enim. Convallis in neque congue et elementum feugiat malesuada ante rhoncus.
        </p>
        <y-answers-list/>
        <y-cool-button class="q__button">Продолжить</y-cool-button>
        <div class="q__coins__per">
          <!--          <div class="coins">-->
          <!--            <img class="coins__img" src="@/assets/img/coins.svg" alt="">-->
          <!--            <p>200</p>-->
          <!--          </div>-->
          <p class="test__percent">10% пройдено</p>
        </div>
      </div>
    </y-modal>
    <div class="back"></div>
  </div>
</template>

<script>
export default {
  name: "QuestionType3"
}
</script>

<style scoped>
.question__text{
  margin-top: 1rem;
 width: 50rem;
  font-size: 1.2rem;
  text-align: center;
}
</style>