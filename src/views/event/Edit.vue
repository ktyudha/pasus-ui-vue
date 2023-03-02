<template>
  <h3>Edit</h3>
  <form @submit.prevent="update()">
    {{ event }}
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
import { reactive, ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";
export default {
  setup() {
    let event = reactive({
      title: "",
      user_id: "",
      category_id: "",
      summary: "",
      body: "",
      status: "",
      thumbnail: "",
    });

    // const validation = ref([])

    const router = useRouter();
    const route = useRoute();
    const id = route.params.id;

    onMounted(() => {
      axios
        .get("http://pasusapi.test/api/events/" + id)
        .then((result) => {
          event.value = result.data;
          // console.log(id)
          event.title = result.data.data.title;
          event.user_id = result.data.data.user.id;
          event.category_id = result.data.data.category.id;
          event.body = result.data.data.body;
          event.status = result.data.data.status;
          event.thumbnail = result.data.data.thumbnail;
        })
        .catch((err) => {
          console.log(err.response.data);
          // validation.value = err.response.data
        });
    });

    function update() {
      axios
        .put("http://pasusapi.test/api/events/" + id, event)
        .then(() => {
          //   console.log(event);
          router.push({
            name: "event.index",
          });
        })
        .catch((err) => {
          console.log(event);
          console.log(err.response.data);
        });
    }

    return {
      event,
      update,
      router,
    };
  },
};
</script>
