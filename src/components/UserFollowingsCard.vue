<template>
  <div class="card">
    <div class="card-header">
      <strong>{{followingsCount}}</strong> followings (追蹤者)
    </div>
    <div class="card-body">
      <router-link
        v-for="following in followings"
        :key="following.id"
        :to="{ name: 'profile', params:{id:following.id} }"
      >
        <img :src="following.image" width="60" height="60" class="avatar" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialFollowings: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      followings: this.initialFollowings,
      followingsCount: this.initialFollowings.length
    };
  }
};
</script>