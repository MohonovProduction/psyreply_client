<template>
  <div class="main">
    <div class="main__bottom">
<!--      <results></results>-->

      <template v-if="allDataIsReady">
        <template v-if="step === 'before-test'">
          <y-modal class="before_test">
            <y-cool-button @click="startTest">Начать тестирование</y-cool-button>
          </y-modal>
        </template>

        <template v-if="step === 'testing'">
          <template v-for="(test, test_arr_id) in blockOnPass.tests" :key="test.createdAt">
            <template v-for="(question, question_arr_id) in test.questions" :key="`${question.createdAt}${question.id}`">
<!--              TODO: change layout for transition animation -->
<!--              <transition name="slide">-->
                <template v-if="testNow === test_arr_id && questionNow === question_arr_id">
                  <!--               One fom more  -->
                  <template v-if="test.type_id === 1">
                    <question-type3
                      :test-arr-id="test_arr_id"
                      :question-arr-id="question_arr_id"
                      :passed="percentOfPass"
                      @next="nextQuestion(1)"
                    />
                  </template>
                  <!--                Yes Not ki -->
                  <template v-else-if="test.type_id === 2">
                    <question-type1
                      :test-arr-id="test_arr_id"
                      :question-arr-id="question_arr_id"
                      :passed="percentOfPass"
                      @next="nextQuestion(1)"
                    />
                  </template>
                  <!--                More from more -->
                  <!--                NOTE: just check 'more' attribute -->
                  <template v-else-if="test.type_id === 3">
                    <question-type3
                      :test-arr-id="test_arr_id"
                      :question-arr-id="question_arr_id"
                      :passed="percentOfPass"
                      :more="true"
                      @next="nextQuestion(1)"
                    />
                  </template>
                  <template v-else-if="test.type_id === 4">
                    <!--                  Range -->
                    <question-type2
                      :test-arr-id="test_arr_id"
                      :question-arr-id="question_arr_id"
                      :passed="percentOfPass"
                      @next="nextQuestion"
                    />
                  </template>
                </template>
<!--              </transition>-->
            </template>
          </template>
        </template>

<!--        TODO: do beautiful-->
        <template v-if="step === 'after-test'">
          <y-modal class="before_test">
            <h1>Тестирование окончено</h1>
          </y-modal>
        </template>
      </template>
    </div>
  </div>
</template>
<script>
import QuestionType1 from "@/components/QuestionsTypes/QuestionType1/QuestionType1.vue";
import QuestionType2 from "./components/QuestionsTypes/QuestionType2/QuestionType2";
import QuestionType3 from "./components/QuestionsTypes/QuestionType3/QuestionType3";
import Results from "./components/Results";
import router from '@/router';

export default {
  components:{
    QuestionType1,QuestionType2,QuestionType3,Results
  },
  created() {
    if (window.location.search.length > 0) {
      const token = window.location.search.split('=')[1]
      localStorage.setItem('user_token', token)
      router.push('/')
    }

    this.$store.dispatch('getBlock')
  },
  data() {
    return {
      testNow: 0,
      questionNow: 0,
      step: 'before-test',
      startTime: null,
      endTime: null
    }
  },
  methods: {
    startTest() {
      this.step = 'testing'
      this.startTime = Date.now()
    },
    nextQuestion(m) {
      const tests = this.blockOnPass.tests
      const questions = tests[this.testNow].questions

      if (this.testNow !== tests.length) {
        if (this.questionNow !== questions.length - 1) {
          this.questionNow += 1
        } else {
          this.questionNow = 0
          this.testNow++
        }
        this.$store.commit('answersPassedIncrement')
      }

      if (this.testNow === tests.length) {
        this.testNow++

        this.step = 'after-test'

        this.endTime = Date.now()
        const timeOnPas = this.endTime - this.startTime
        this.$store.commit('setTimeOnPass', timeOnPas)

        this.$store.dispatch('passBlock')
      }
    }
  },
  computed: {
    blockOnPass() {
      return this.$store.getters.blockOnPass
    },
    allDataIsReady() {
      return this.$store.getters.isAllDataReady
    },
    percentOfPass() {
      return this.$store.getters.relationAnswersAndPassedAnswers
    }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');

/* TODO: fix layout for animation */

.slide-leave-active,
.slide-enter-active {
  opacity: 1;
  transform: translateX(0);
  transition: all 0.5s;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(50%);
}
.slide-leave-to {
  opacity: 0;
  transform: translateX(-50%);
}

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

.before_test {
  display: flex;
  justify-content: center;
  align-items: center;
  /* TODO: remove important */
  margin-top: 5rem;
  padding: 2rem !important;
  width: min-content;
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

@media (min-width: 1000px) {
  :root {
    font-size: .8rem;
  }
}

</style>
