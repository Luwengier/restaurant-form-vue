<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="profile.image" width="300px" height="300px" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{profile.name}}</h5>
          <p class="card-text">{{profile.email}}</p>
          <ul class="list-unstyled list-inline">
            <li>
              <strong>{{profile.commentsCount}}</strong> 已評論餐廳
            </li>
            <li>
              <strong>{{profile.favoritedRestaurantsCount}}</strong> 收藏的餐廳
            </li>
            <li>
              <strong>{{profile.followingsCount}}</strong> followings (追蹤者)
            </li>
            <li>
              <strong>{{profile.followersCount}}</strong> followers (追隨者)
            </li>
          </ul>
          <p v-if="isOneself">
            <router-link
              :to="{name: 'edit-profile', params: {id: profile.id}}"
              class="btn btn-link"
            >
              <button type="submit" class="btn btn-primary">edit</button>
            </router-link>
          </p>
          <template v-else>
            <button
              v-if="profile.isFollowed"
              type="button"
              class="btn btn-danger btn-border favorite mr-2"
              @click.stop.prevent="deleteFollowing"
            >Unfollow</button>
            <button
              v-else
              type="button"
              class="btn btn-primary btn-border favorite mr-2"
              @click.stop.prevent="addFollowing"
            >Follow</button>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const dummyUser = {
  currentUser: {
    id: 1,
    name: "管理者",
    email: "root@example.com",
    image: "https://i.pravatar.cc/300",
    isAdmin: true
  },
  isAuthenticated: true
};

export default {
  props: {
    initialProfile: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      profile: this.initialProfile,
      currentUser: dummyUser.currentUser
    };
  },
  computed: {
    isOneself: function() {
      return this.profile.id === this.currentUser.id;
    }
  },
  methods: {
    addFollowing() {
      this.profile.isFollowed = true;
    },
    deleteFollowing() {
      this.profile.isFollowed = false;
    }
  }
};
</script>