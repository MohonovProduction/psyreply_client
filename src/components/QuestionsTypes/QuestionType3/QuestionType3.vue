<template>
  <div class="QuestionType">
    <y-modal class="q__modal">
      <y-icon class="q__logo" />
      <div class="questions">
        <p class="question__text">{{questionData.title}}</p>
        <y-answers-list
          :test-arr-id="testArrId"
          :question-arr-id="questionArrId"
        />
        <y-cool-button
          class="q__button"
          @click="$emit('next')"
        >Продолжить</y-cool-button>
        <div class="q__coins__per">
                    <div class="coins">
                      <img class="coins__img" src="@/assets/img/coins.svg" alt="">
                      <p>{{questionData.coins}}</p>
                    </div>
          <p class="test__percent">10% пройдено</p>
        </div>
      </div>
    </y-modal>
    <div class="back"></div>
  </div>
</template>

<script>
export default {
  name: "QuestionType3",
  props: {
    testArrId: Number,
    questionArrId: Number,
  },
  computed: {
    questionData() {
      const coordinates = {
        test_id: this.testArrId,
        question_id: this.questionArrId
      }
      return this.$store.getters.questionData(coordinates)
    }
  }
}
</script>

<style scoped>
.question__text{
  margin-top: 1rem;
 width: 50rem;
  font-size: 1.2rem;
  text-align: center;
}
.q__button--disable {
  opacity: .5;
}
</style>
