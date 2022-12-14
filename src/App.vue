<template>
  <div class="main">
    <div class="main__bottom">
      <QuestionType2></QuestionType2>
    </div>

  </div>
</template>
<script>
import QuestionType1 from "@/components/QuestionsTypes/QuestionType1/QuestionType1.vue";
import QuestionType2 from "./components/QuestionsTypes/QuestionType2/QuestionType2";
import QuestionType3 from "./components/QuestionsTypes/QuesitonType3/QuestionType3";
export default {
  components:{
    QuestionType1,QuestionType2,QuestionType3,
  },
  created() {
    this.$store.dispatch('getBlock')
  },
  methods: {

  },
  computed: {
    blockOnPass() {
      return this.$store.getters.blockOnPass
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
