<template>
  <div v-if="theme" class="bloc-quiz">
    <div class="d-flex align-items-end quiz-title-bloc" v-for="quiz in listeQuiz" :key="quiz.id">
      <h3 class="flex-fill quiz-title-text"> {{ quiz.titre }}</h3>
      <button type="button" class="btn btn-secondary btn-sm" @click="selectQuiz(quiz.id)">Lancer</button>
    </div>
  </div>
</template>

<script>
import { getTheme, getListeQuiz } from "../data/data";

export default {
  name: "ListQuiz",
  props: ["idTheme"],
  data: function() {
    return {};
  },
  computed: {
    theme: function() {
      return getTheme(this.idTheme);
    },

    listeQuiz: function() {
      return getListeQuiz(this.idTheme);
    }
  },

 methods: {
    selectQuiz: function(idQuiz) {
      this.idQuiz = idQuiz;
      this.$emit("select-quiz", idQuiz);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.bloc-quiz {
  width : 100%;
}


.quiz-title-bloc {
  margin-top: 2rem;
  margin-bottom: 0.5rem;
}

.quiz-title-text {
  margin: 0;
}
</style>
