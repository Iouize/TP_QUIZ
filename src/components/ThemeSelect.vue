<template>
  <div class="bloc-theme">
    <h2 class="theme-title">Thème</h2>
    <button
      class="btn-primary d-block"
      @click="montrerListe = !montrerListe"
    >
      {{ theme ? theme.titre : "Choisir un thème" }}
    </button>
    <div class="btn-group-vertical btn-group-lg" v-if="montrerListe">
      <button
        type="button"
        class="btn btn-secondary"
        v-for="theme in listeTheme"
        :key="theme.id"
        @click="selectTheme(theme)"
      >
        {{ theme.titre }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ThemeSelect",
  props: ["listeTheme"],
  data: function() {
    return {
      theme: null,
      montrerListe: false
    };
  },
  methods: {
    selectTheme(theme) {
      this.theme = theme;
      this.montrerListe = false;
      this.$emit("select-theme", theme.id);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.bloc-theme {
  width : 600px;
}


.theme-title {
  margin-right: 1rem;
}

.btn{
  background-color : #26adbe;
}

.btn:hover {
  background-color:white;
  color: #048b9a;
}
</style>
