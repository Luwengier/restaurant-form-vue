<template>
  <div class="card">
    <div class="card-header">
      <strong>{{commentsCount}}</strong> 已評論餐廳
    </div>
    <div class="card-body">
      <router-link
        v-for="comment in comments"
        :key="comment.id"
        :to="{name:'restaurant',params:{id:comment.RestaurantId}}"
      >
        <img :src="comment.Restaurant.image" width="60" height="60" class="avatar" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialComments: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      comments: this.initialComments,
      commentsCount: this.initialComments.length
    };
  }
};
</script>