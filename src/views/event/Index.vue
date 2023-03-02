<template>
  <div class="container text-start">
    <h3>Index</h3>
    <router-link :to="{ name: 'event.create' }" class="btn btn-primary"
      >Create</router-link
    >

    <table class="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Summary</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(event, index) in events.data" :key="index">
          <td>{{ event.title }}</td>
          <td>{{ event.user.name }}</td>
          <td>{{ event.id }}</td>
          <td>
            <router-link
              :to="{ name: 'event.edit', params: { id: event.id } }"
              class="btn btn-warning mx-2"
              >Edit</router-link
            >
            <button
              class="btn btn-danger text-white"
              @click.prevent="destroy(event.id, index)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";
import { onMounted, ref } from "vue";

export default {
  setup() {
    let events = ref([]);
    onMounted(() => {
      axios
        .get("http://pasusapi.test/api/events")
        .then((result) => {
          events.value = result.data;
        })
        .catch((err) => {
          // console.log(err.response);
          console.log("Login please");
        });
    });
    function destroy(id, index) {
      console.log(id);
      axios
        .delete("http://pasusapi.test/api/events/" + id)
        .then(() => {
          events.value.data.splice(index, 1);
        })
        .catch((err) => {
          // console.log(err.response.data);
          // console.log("Login please");
        });
    }
    return {
      events,
      destroy,
    };
  },
};
</script>
