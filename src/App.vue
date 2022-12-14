<template>
  <div class="main">
    <div class="main__bottom">

      <template v-if="allDataIsReady">
        <y-modal v-if="showEndBanner">
          <h1>Тест пройден</h1>
        </y-modal>

        <template v-for="(test, test_arr_id) in blockOnPass.tests" :key="test.createdAt">
          <template v-for="(question, question_arr_id) in test.questions" :key="`${question.createdAt}${question.id}`">
            <template v-if="testNow === test_arr_id && questionNow === question_arr_id">
              <template v-if="question.type_id === 1">
                <question-type3
                  :test-arr-id="test_arr_id"
                  :question-arr-id="question_arr_id"
                  @next="nextQuestion"
                />
              </template>
              <template v-else-if="question.type_id === 2">
                <question-type1 />
              </template>
              <template v-else>
                <question-type2 />
              </template>
            </template>
          </template>
        </template>
      </template>
    </div>
  </div>
</template>
<script>
import QuestionType1 from "@/components/QuestionsTypes/QuestionType1/QuestionType1.vue";
import QuestionType2 from "./components/QuestionsTypes/QuestionType2/QuestionType2";
import QuestionType3 from "./components/QuestionsTypes/QuestionType3/QuestionType3";
export default {
  components:{
    QuestionType1,QuestionType2,QuestionType3,
  },
  created() {
    this.$store.dispatch('getBlock')
  },
  data() {
    return {
      testNow: 0,
      questionNow: 0,
      showEndBanner: false
    }
  },
  methods: {
    nextQuestion() {
      if (!(this.blockOnPass.tests.length - 1 === this.testNow)) {
        if (this.blockOnPass.tests[this.testNow].questions.length - 1 === this.questionNow) {
          this.testNow++
          this.questionNow = 0
        } else {
          this.questionNow++
        }
      } else {
        this.testNow++
        this.showEndBanner = true
      }
    }
  },
  computed: {
    blockOnPass() {
      return this.$store.getters.blockOnPass
    },
    allDataIsReady() {
      return this.$store.getters.isAllDataReady
    }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');

:root {
  --font-rubik: 'Rubik', sans-serif;

  --light: hsl(0, 0%, 100%);
  --light-opacity: hsla(0, 0%, 100%, 0.27);

  font-family: var(--font-rubik);
  font-size: calc(1vw + .2rem);
  color: var(--light);

  box-sizing: border-box;

  background-image: url('assets/img/bg.png');
  background-size: cover;
  background-attachment: fixed;
}

*,
::before,
::after {
  padding: 0;
  border: none;
  margin: 0;
  background: none;
  user-select: none;
  box-sizing: inherit;
  text-decoration: none;
}

.link:link,
.link:visited,
.link:hover,
.link:active {
  color: var(--light);
}
.main{
display: flex;
  align-items: center;
  justify-content: center;
}
@media screen and (max-width:820px) {
  .main{

  }
  .main__bottom{
    display: flex;
    position: absolute;
    bottom: 0;
    width: 100%;

  }
}

</style>
