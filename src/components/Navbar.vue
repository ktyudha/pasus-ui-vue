<template>
  <nav class="navbar navbar-expand-lg bg-white">
    <div class="container">
      <a class="navbar-brand" href="/"
        ><img src="" class="img-nav" alt="" />
        <span class="fw-medium mx-2 fs-6">Pasukan Khusus</span>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item me-4">
            <a class="nav-link fw-bold" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item me-4">
            <a class="nav-link fw-bold" href="/about">About Us</a>
          </li>
          <li class="nav-item me-4">
            <a class="nav-link fw-bold" href="/event">Event</a>
          </li>
          <li class="nav-item me-4">
            <a class="nav-link fw-bold" href="/anggota">Member</a>
          </li>
          <li class="nav-item">
            <a class="nav-link fw-bold" href="/alumni">Alumni</a>
          </li>
          <li class="nav-item me-4 md:ms-4">
            <button class="btn btn-outline-danger" @click="logout()">
              Delete
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarVue",
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$router.push("/login");
    },
  },
};
</script>

<style></style>
