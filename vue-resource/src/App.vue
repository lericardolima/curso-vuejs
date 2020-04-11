<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>
      </div>
      <div class="container col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <form class="form">
          <div class="form-group">
            <input type="text" placeholder="Email" class="form-control" v-model="user.email" />
          </div>
          <div class="form-group">
            <input type="text" placeholder="Password" class="form-control" v-model="user.password" />
          </div>
          <button class="btn btn-info" @click.prevent="sendUser">Save</button>
        </form>
      </div>
    </div>
    <hr />
    <div class="row container">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Persisted users</h1>
        <hr />
        <ul class="list-group">
          <li class="list-group-item" v-for="(u, index) in users" :key="index">
            <p>Email: {{ u.email }} / Password: {{ u.password }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      user: {
        email: "",
        password: ""
      },
      users: [],
      resource: {}
    };
  },
  methods: {
    sendUser() {
      this.resource.saveAlter(this.user);
    },
    findAllUsers() {
      this.$http
        .get("data.json")
        .then(response => response.json())
        .then(users => {
          let usersArray = [];
          for (let key in users) {
            usersArray.push(users[key]);
          }

          this.users = usersArray;
        });
    }
  },
  created() {
    const customActions = {
      saveAlter: { method: "POST", url: "alter.json" }
    };
    this.resource = this.$resource("data.json", {}, customActions);
  },
  mounted() {
    this.findAllUsers();
  }
};
</script>

<style>
</style>
