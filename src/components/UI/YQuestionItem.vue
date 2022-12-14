<template>
 <div class="yqitem">
   <p class="qtext">
     Я всегда стремлюсь делать работу до конца, но часто не успеваю
   </p>
   <div class="buttons">
     <y-button
       v-for="answer in answers"
       @click="selectAnswer(answer.id)"
       :active="(selectedAnswer[0] === answer.id)"
     >{{answer.title}}</y-button>
   </div>
 </div>
</template>

<script>
export default {
  name: "YQuestionItem",
  props: {
    testArrId: Number,
    questionArrId: Number,
  },
  data() {
    return {
      selectedAnswer: []
    }
  },
  methods: {
    selectAnswer(id) {
      this.selectedAnswer[0] = id
      const data = {
        test_id: this.testArrId,
        question_id: this.questionArrId,
        answer: this.selectedAnswer
      }
      this.$store.commit('selectAnswer', data)
    }
  },
  computed: {
    answers() {
      const coordinates = {
        test_id: this.testArrId,
        question_id: this.questionArrId
      }
      const question = this.$store.getters.questionData(coordinates)
      return JSON.parse(question.value)
    }
  }
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
