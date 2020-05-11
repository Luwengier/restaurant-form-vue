<template>
  <div class="container py-5">
    <h1>{{restaurant.name}}</h1>
    <h5>[{{restaurant.Category.name}}]</h5>
    <hr />

    <div>
      <p class="ml-4">
        &bull; 有{{restaurant.commentCount}}筆評論
        <br />
        &bull; 有{{restaurant.favoritedCount}}人收藏這家餐廳
      </p>
    </div>

    <a href="back">回上一頁</a>
  </div>
</template>

<script>
const dummyData = {
  restaurant: {
    id: 1,
    name: "August Gerlach Da LA1234",
    tel: "02-8888-0000",
    address: "01313 ketlch deive",
    opening_hours: "08:00",
    description: "dsfsafdsadfasasdfasdf",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=22.148585495422335",
    viewCounts: 3,
    createdAt: "2019-11-20T06:25:42.921Z",
    updatedAt: "2019-12-11T07:46:33.828Z",
    CategoryId: 3,
    Category: {
      id: 3,
      name: "義大利料理",
      createdAt: "2019-06-22T09:00:43.000Z",
      updatedAt: "2019-06-22T09:00:43.000Z"
    },
    FavoritedUsers: [
      {
        id: 2,
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$ESv6iQjQ8oEe3/XGjw00PuSh1kjmG6Dkhd4YXa50boTlncJDxljAy",
        isAdmin: false,
        image: null,
        createdAt: "2019-11-20T06:25:42.685Z",
        updatedAt: "2019-11-21T09:55:30.970Z",
        Favorite: {
          UserId: 2,
          RestaurantId: 50,
          createdAt: "2019-12-08T15:59:49.568Z",
          updatedAt: "2019-12-08T15:59:49.568Z"
        }
      },
      {
        id: 1,
        name: "root1",
        email: "root@example.com",
        password:
          "$2a$10$alLLwv1Kn0tC9euHs6Llwen8uif7jQfU9DPaybXRuGn83ZfKzW56G",
        isAdmin: true,
        image: null,
        createdAt: "2019-11-20T06:25:42.456Z",
        updatedAt: "2019-11-25T06:53:28.542Z",
        Favorite: {
          UserId: 1,
          RestaurantId: 50,
          createdAt: "2019-12-09T05:35:30.613Z",
          updatedAt: "2019-12-09T05:35:30.613Z"
        }
      }
    ],
    LikedUsers: [],
    Comments: [
      {
        id: 1,
        text: "Voluptas omnis laudantium et non ut quia unde.",
        UserId: 2,
        RestaurantId: 1,
        createdAt: "2019-11-20T06:25:42.942Z",
        updatedAt: "2019-11-20T06:25:42.942Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$ESv6iQjQ8oEe3/XGjw00PuSh1kjmG6Dkhd4YXa50boTlncJDxljAy",
          isAdmin: false,
          image: null,
          createdAt: "2019-11-20T06:25:42.685Z",
          updatedAt: "2019-11-21T09:55:30.970Z"
        }
      },
      {
        id: 51,
        text: "Distinctio laborum explicabo quasi.",
        UserId: 2,
        RestaurantId: 1,
        createdAt: "2019-11-20T06:25:42.944Z",
        updatedAt: "2019-11-20T06:25:42.944Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$ESv6iQjQ8oEe3/XGjw00PuSh1kjmG6Dkhd4YXa50boTlncJDxljAy",
          isAdmin: false,
          image: null,
          createdAt: "2019-11-20T06:25:42.685Z",
          updatedAt: "2019-11-21T09:55:30.970Z"
        }
      },
      {
        id: 101,
        text: "Nihil iure quas.",
        UserId: 2,
        RestaurantId: 1,
        createdAt: "2019-11-20T06:25:42.946Z",
        updatedAt: "2019-11-20T06:25:42.946Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$ESv6iQjQ8oEe3/XGjw00PuSh1kjmG6Dkhd4YXa50boTlncJDxljAy",
          isAdmin: false,
          image: null,
          createdAt: "2019-11-20T06:25:42.685Z",
          updatedAt: "2019-11-21T09:55:30.970Z"
        }
      }
    ]
  }
};

export default {
  data() {
    return {
      restaurant: {
        id: undefined,
        name: "",
        Category: {},
        FavoritedUsers: [],
        LikedUsers: [],
        Comments: [],
        favoritedCount: 0,
        commentCount: 0
      }
    };
  },
  created() {
    this.fetchRestaurant();
  },
  methods: {
    fetchRestaurant() {
      this.restaurant = {
        ...dummyData.restaurant,
        favoritedCount: dummyData.restaurant.FavoritedUsers.length,
        commentCount: dummyData.restaurant.Comments.length
      };
    }
  }
};
</script>