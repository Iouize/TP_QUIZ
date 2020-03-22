<template>
  <div class="bloc-questions">
    <div>
    <h3>Quiz : {{ quiz.titre }}</h3>
    <p>
      Nombre de questions : {{ listeQuestions ? listeQuestions.length : 0}}
    </p>
  </div>
  <div v-if="quiz">
  <div
      class="quiz-title-bloc" v-for="item in listeQuestions" :key="item.id">
      <div>
        <h3 class="quiz-title-text">{{ item.titre }}</h3>
        <div v-for="reponse in item.reponses" :key="reponse.id">
          <input :id="reponse.id" type="radio" :name="item.id" :value="reponse.correcte">
          <label :for="reponse.id"> {{ reponse.titre }}</label>
          
        </div>
      </div>
    </div>
  </div>

  

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
