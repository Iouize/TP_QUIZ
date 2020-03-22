<template>
  <div>Quiz : {{ idQuiz }}
    {{ listeQuestions.questions.length }}
  </div>
</template>

<script>
import { getQuiz } from "../data/data";
import { getQuestions } from "../data/questions";


export default {
  name: "Quiz",
  props: ["idQuiz"],
  data: function() {
    return {
      listeQuestions: null
    }
  },

  watch: {
    idQuiz: function() {
      if (this.idQuiz) {
        getQuestions(this.idQuiz).then(json => {
          this.listeQuestions = json;
        });
      }
    }
  },
  
  computed: {
    quiz : function(){
      return getQuiz(this.idQuiz);
    }
    }
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.quiz-title-bloc {
  margin-top: 2rem;
  margin-bottom: 0.5rem;
}

.quiz-title-text {
  margin: 0;
}
</style>
