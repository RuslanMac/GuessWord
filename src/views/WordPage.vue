<template>
  <div>
    <div class="word">
      <v-text-field label="Введите слово" v-model="word"></v-text-field
      ><v-btn class="mt-3 ml-4" @click="sendWord">Отправить</v-btn>

      
      <v-btn @click="getWord" color="success" class="mt-3 ml-4">Загадать</v-btn>
    </div>
    <div class="info">
      <span v-if="visibile">{{ message }}</span>
    </div>
    <div class="dialog">
      <template>
        <v-simple-table fixed-header height="300px">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  Актор
                </th>
                <th class="text-left">
                  Ответ
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in answers" :key="item.index">
                <td>{{ item.actor }}</td>
                <td>{{ item.word }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </template>
    </div>
  </div>
</template>
<script>
import apiClient from "@/services/apiClient";
export default {
  data() {
    return {
      word: "",
      index: "",
      answers: [],
      message: "",
      visibile: false,
    };
  },
  methods: {
    getWord() {
      this.answers = [];
      apiClient.getWord().then((response) => {
        this.index = response.data.index;
        this.message = "Слово загадано";
        this.visibile = true;
      });
      setTimeout(() => {
        this.visibile = false;
      }, 5000);
    },
    sendWord() {
      this.visibile = false;
      this.answers.push({ actor: "Вы", word: this.word });
      apiClient.sendWord(this.word, this.index).then((response) => {
        this.message = response.data;
        this.answers.push({ actor: "Система", word: this.message });
        //this.answers.push(response);
      });
    },
    getHelp() {
      apiClient.getHelp(this.word, this.index).then((response) => {
        this.message = response.data;
        this.visibile = true;
      });
    },
  },
};
</script>
<style scoped>
.word {
  display: flex;
  width: 40%;
  margin: auto;
}
.dialog {
  margin: auto;
  width: 60%;
}
.info {
  display: flex;
  font-style: italic;
  font-size: 24px;
  align-content: center;
  width: 20%;
  margin: auto;
  border-radius: 5px;
}
</style>
