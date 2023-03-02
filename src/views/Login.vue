<template>
  <h3>Login</h3>
  <div class="container">
    <form @submit.prevent="login()">
      <div class="mb-3">
        <label class="form-label" for="Email">Email</label>
        <input type="text" class="form-control" v-model="dataLogin.email" />
      </div>
      <div class="mb-3">
        <label class="form-label" for="Password">Password</label>
        <input
          type="password"
          class="form-control"
          v-model="dataLogin.password"
        />
      </div>
      <div class="mb-3">
        <button class="btn btn-dark">Save</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { reactive } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const dataLogin = reactive({
      email: "",
      password: "",
    });

    const router = useRouter();

    function login() {
      console.log(dataLogin);
      axios
        .post("http://pasusapi.test/api/auth/login", dataLogin)
        .then((response) => {
          // console.log(dataLogin);
          // localStorage.setItem("token");
          if (response.data) {
            //set token
            localStorage.setItem("token", response.data);
            router.push({
              name: "event.index",
            });

            //redirect ke halaman dashboard
            // return router.push({
            //   name: "dashboard",
            // });
          }
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    }
    return {
      dataLogin,
      router,
      login,
    };
  },
};
</script>

<style>
</style>