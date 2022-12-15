import { createStore } from 'vuex'
import Client from '@/api/Client';

export default createStore({
  state: {
    blockOnPass: null,
    passedBlock: null,
    allDataIsReady: false,
    answersCount: null,
    answersPassed: null,
  },
  getters: {
    blockOnPass(state) {
      return state.blockOnPass
    },
    passedBlock(state) {
      return state.passedBlock
    },
    isAllDataReady(state) {
      return state.allDataIsReady
    },
    questionData: (state) => (coordinates) => {
      const test = state.blockOnPass.tests[coordinates.test_id]
      return test.questions[coordinates.question_id]
    },
    questionByGroupData: (state) => (coordinates) => {
      const group_id = Math.floor(coordinates.question_id / 3)
      const question_id = coordinates.question_id % 3
      const test = state.blockOnPass.tests[coordinates.test_id]
      return test.questions[group_id][question_id]
    },
    passedBlockAnswer: (state) => (coordinates) => {
      const test = state.passedBlock.tests[coordinates.test_id]
      return test.answers[coordinates.answer_id].answer
    },
    relationAnswersAndPassedAnswers(state) {
      return Math.floor(state.answersPassed / state.answersCount * 100  )
    }
  },
  mutations: {
    updateBlockOnPass(state, block) {
      state.blockOnPass = block
    },
    updatePassedBlock(state, block) {
      state.passedBlock = block
    },
    allDataIsReady(state) {
      state.allDataIsReady = true
    },
    selectAnswer(state, data) {
      const test = state.passedBlock.tests[data.test_id]
      test.answers[data.question_id].answer = data.answer
    },
    setTimeOnPass(state, data) {
      state.passedBlock.time_on_pass = data
    },
    answersPassedIncrement(state) {
      state.answersPassed++
    },
    setAnswersCount(state, data) {
      state.answersCount = data
    }
  },
  actions: {
    async getBlock({ commit }) {
      const client = new Client()
      client.getBlock()
        .then(res => {
          if (res.ok) {
            res.json().then(r => {
              const passedBlock = {
                time_on_pass: 0,
                tests: []
              }
              let answersCount = 0
              r.tests.forEach(test => {
                passedBlock.tests.push({
                  test_id: test.id,
                  answers: []
                })
                test.questions.forEach(question => {
                  passedBlock.tests[passedBlock.tests.length - 1].answers.push({
                    question_id: question.id,
                    answer: []
                  })
                  answersCount++
                })
              })
              commit('updatePassedBlock', passedBlock)
              commit('setAnswersCount', answersCount)

              r.tests.map((test, id, array) => {
                if (test.type_id === 2) {
                  const questionGroups = []
                  test.questions.forEach((el, id) => {
                    if (id % 3 === 0) {
                      questionGroups.push([el])
                    } else {
                      questionGroups[questionGroups.length - 1].push(el)
                    }
                  })
                  array[id].questions = questionGroups
                }
              })
              commit('updateBlockOnPass', r)

              commit('allDataIsReady')
            })
          }
        })
    },
    async passBlock(ctx) {
      const client = new Client()
      client.passBlock(ctx.getters.passedBlock)
        .then(res => {})
    }
  },
  modules: {
  }
})
