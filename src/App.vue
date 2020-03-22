<template>
  <main id="app" class="container-fluid">
    <div class="row vh-100">
      <div>
        <div class="theme">
          <ThemeSelect :listeTheme="listeTheme" @select-theme="onSelectTheme" />
          <hr>
          <ListQuiz :idTheme="idTheme" @select-quiz="onSelectQuiz"/>
        </div>
        <div>
        <Quiz :idQuiz="idQuiz"/>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import ListQuiz from "./components/ListQuiz.vue";
import ThemeSelect from "./components/ThemeSelect.vue";
import * as data from "./data/data";
import Quiz from "./components/Quiz.vue";

export default {
  name: "app",
  components: {
    ListQuiz,
    ThemeSelect,
    Quiz
  },
  data: function() {
    return {
      listeTheme: data.listeTheme,
      idTheme: null,
      idQuiz: null
    };
  },
  methods: {
    onSelectTheme(idTheme) {
      this.idTheme = idTheme;
    },
    onSelectQuiz(idQuiz) {
      this.idQuiz = idQuiz;
    }
  }
};
</script>

<style>

</style>
