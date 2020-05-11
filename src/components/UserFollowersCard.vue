<template>
  <div class="card">
    <div class="card-header">
      <strong>{{followersCount}}</strong> followers (追隨者)
    </div>
    <div class="card-body">
      <router-link
        v-for="follower in followers"
        :key="follower.id"
        :to="{ name: 'profile', params:{id:follower.id} }"
      >
        <img :src="follower.image" width="60" height="60" class="avatar" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialFollowers: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      followers: this.initialFollowers,
      followersCount: this.initialFollowers.length
    };
  }
};
</script>