import { createStore } from 'vuex'
import Client from '@/api/Client';

export default createStore({
  state: {
    blockOnPass: null,
    passedBlock: null,
    allDataIsReady: false
  },
  getters: {
    blockOnPass(state) {
      return state.blockOnPass
    },
    isAllDataReady(state) {
      return state.allDataIsReady
    },
    questionData: (state) => (coordinates) => {
      const test = state.blockOnPass.tests[coordinates.test_id]
      return test.questions[coordinates.question_id]
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
    }
  },
  actions: {
    async getBlock({ commit }) {
      const client = new Client()
      client.getBlock()
        .then(res => {
          if (res.ok) {
            res.json().then(r => {
              commit('updateBlockOnPass', r)
              const passedBlock = {
                time_on_pass: 0,
                tests: []
              }
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
                })
              })
              commit('updatePassedBlock', passedBlock)
              commit('allDataIsReady')
            })
          }
        })
    }
  },
  modules: {
  }
})
