const { createApp } = Vue;

createApp({
  data() {
    return {
      dischi: [],
    };
  },
  methods: {
    getList() {
      axios
        .get(
          "http://localhost/esercizi/php-dischi-json/frontend/data/dischi.json"
        )
        .then((response) => (this.dischi = response.data));
    },
  },
  created() {
    this.getList();
  },
}).mount("#root");
