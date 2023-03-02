<template>
  <h3>Create</h3>
  <form @submit.prevent="store()">
    <div class="mb-3">
      <label class="form-label" for="Title">Title</label>
      <input type="text" class="form-control" v-model="event.title" />
    </div>
    <div class="mb-3">
      <label class="form-label" for="user_id">user_id</label>
      <input type="text" class="form-control" v-model="event.user_id" />
    </div>
    <div class="mb-3">
      <label class="form-label" for="category_id">Category_id</label>
      <input type="text" class="form-control" v-model="event.category_id" />
    </div>
    <div class="mb-3">
      <label class="form-label" for="body">Body</label>
      <input type="text" class="form-control" v-model="event.body" />
    </div>
    <div class="mb-3">
      <label class="form-label" for="status">Status</label>
      <input type="text" class="form-control" v-model="event.status" />
    </div>
    <div class="mb-3">
      <label class="form-label" for="thumbnail">Thumbnail</label>
      <input type="text" class="form-control" v-model="event.thumbnail" />
    </div>

    <div class="mb-3">
      <button class="btn btn-dark">Save</button>
    </div>
  </form>
</template>
<script>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
export default {
  setup() {
    const event = reactive({
      title: "",
      user_id: "",
      category_id: "",
      summary: "mososi",
      body: "",
      status: "draft",
      thumbnail: "",
    });

    const router = useRouter();

    function store() {
      console.log(event);
      axios
        .post("http://pasusapi.test/api/events", event)
        .then(() => {
          console.log(event);
          router.push({
            name: "event.index",
          });
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    }
    return {
      event,

      router,
      store,
    };
  },
};
</script>