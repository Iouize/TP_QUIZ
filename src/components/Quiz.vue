<template>
  <div>Quiz : {{ idQuiz }}
    {{ listeQuestions.questions.length }}
  </div>
</template>

<script>
import { afficheQuestions } from "../../data/questions";

export default {
  name: "Quiz",
  props: ["idQuiz"],
  data: function() {
    return {};
  },

  watch: {
    idQuiz: function() {
      if (this.idQuiz) {
        getQuizAjax(this.idQuiz).then(json => {
          this.listeQuestions = json;
        });
      }
    }
  }
  4
  computed: {
    listeQuestions: function(){
      const json = getListeQuestions(this.idQuiz);
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
