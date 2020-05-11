<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>

    <hr />
    <RestaurantsTopCard
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      :initial-restaurant="restaurant"
    />
  </div>
</template>

<script>
/* eslint-disable */
import NavTabs from "../components/NavTabs";
import RestaurantsTopCard from "../components/RestaurantsTopCard";

const dummyData = {
  restaurants: [
    {
      id: 50,
      name: "Jolie Hackett",
      tel: "542.600.9620",
      address: "2439 Tiffany Heights",
      opening_hours: "08:00",
      description: "magni ut voluptas",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=27.32287991372693",
      viewCounts: 1,
      createdAt: "2019-11-20T06:25:42.934Z",
      updatedAt: "2019-12-10T13:41:50.568Z",
      CategoryId: null,
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
      isFavorited: true,
      FavoriteCount: 2
    },
    {
      id: 51,
      name: "發大財0121牛排",
      tel: "12345678",
      address: "高雄市",
      opening_hours: "00:00",
      description: "123",
      image: "https://i.imgur.com/CaeM9rg.jpg",
      viewCounts: 22,
      createdAt: "2019-11-22T06:50:58.472Z",
      updatedAt: "2019-12-10T15:15:17.194Z",
      CategoryId: 6,
      FavoritedUsers: [
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
            RestaurantId: 51,
            createdAt: "2019-12-08T17:57:05.837Z",
            updatedAt: "2019-12-08T17:57:05.837Z"
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 1
    },
    {
      id: 5,
      name: "Abagail Dietrich",
      tel: "638.352.6637 x5805",
      address: "011 Glenna Camp",
      opening_hours: "08:00",
      description: "Cumque quasi nihil. Dicta accusantium officiis ass",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=60.98596097768254",
      viewCounts: 37,
      createdAt: "2019-11-20T06:25:42.923Z",
      updatedAt: "2019-11-23T14:18:04.644Z",
      CategoryId: null,
      FavoritedUsers: [
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
            RestaurantId: 5,
            createdAt: "2019-11-23T14:09:32.441Z",
            updatedAt: "2019-11-23T14:09:32.441Z"
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 1
    },
    {
      id: 7,
      name: "Kari Sporer",
      tel: "584-434-6976",
      address: "941 Jakubowski Stream",
      opening_hours: "08:00",
      description: "sunt dolorem voluptate",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=80.77439621389972",
      viewCounts: 1,
      createdAt: "2019-11-20T06:25:42.923Z",
      updatedAt: "2019-11-23T14:30:22.808Z",
      CategoryId: null,
      FavoritedUsers: [
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
            RestaurantId: 7,
            createdAt: "2019-11-23T13:54:18.486Z",
            updatedAt: "2019-11-23T13:54:18.486Z"
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 1
    },
    {
      id: 6,
      name: "Liliane Dibbert",
      tel: "1-827-478-9971 x690",
      address: "2762 Devon Run",
      opening_hours: "08:00",
      description: "facilis",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=98.6709769179636",
      viewCounts: 22,
      createdAt: "2019-11-20T06:25:42.923Z",
      updatedAt: "2019-11-23T14:30:18.715Z",
      CategoryId: null,
      FavoritedUsers: [
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
            RestaurantId: 6,
            createdAt: "2019-11-23T13:53:40.181Z",
            updatedAt: "2019-11-23T13:53:40.181Z"
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 1
    },
    {
      id: 99,
      name: "cool",
      tel: "457291867",
      address: "26 Bluegrass Street",
      opening_hours: "13:02",
      description: "coolcoolcool",
      image: "https://i.imgur.com/OC8nekt.png",
      viewCounts: null,
      createdAt: "2019-12-09T02:50:06.794Z",
      updatedAt: "2019-12-09T02:50:06.794Z",
      CategoryId: null,
      FavoritedUsers: [
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
            RestaurantId: 99,
            createdAt: "2019-12-09T12:20:05.184Z",
            updatedAt: "2019-12-09T12:20:05.184Z"
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 1
    },
    {
      id: 21,
      name: "Daija Kunze",
      tel: "384-909-3213",
      address: "868 Bayer Mountains",
      opening_hours: "08:00",
      description: "Reprehenderit aliquam dolor dicta consequatur ad n",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=56.179907577974795",
      viewCounts: 1,
      createdAt: "2019-11-20T06:25:42.927Z",
      updatedAt: "2019-12-08T17:56:26.650Z",
      CategoryId: null,
      FavoritedUsers: [
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
            RestaurantId: 21,
            createdAt: "2019-12-09T02:19:13.209Z",
            updatedAt: "2019-12-09T02:19:13.209Z"
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 1
    },
    {
      id: 22,
      name: "Joanie Larkin",
      tel: "436.858.3661 x76732",
      address: "732 Reichert Underpass",
      opening_hours: "08:00",
      description: "Officia quidem voluptatem dignissimos repellat pro",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=10.952554365224177",
      viewCounts: 3,
      createdAt: "2019-11-20T06:25:42.927Z",
      updatedAt: "2019-12-10T13:42:51.692Z",
      CategoryId: 99,
      FavoritedUsers: [
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
            RestaurantId: 22,
            createdAt: "2019-12-09T02:23:38.508Z",
            updatedAt: "2019-12-09T02:23:38.508Z"
          }
        }
      ],
      isFavorited: true,
      FavoriteCount: 1
    },
    {
      id: 25,
      name: "Webster Dietrich",
      tel: "1-653-478-8294 x018",
      address: "229 Predovic Lodge",
      opening_hours: "08:00",
      description: "Qui consequuntur est quo.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=37.893799230224204",
      viewCounts: null,
      createdAt: "2019-11-20T06:25:42.928Z",
      updatedAt: "2019-11-20T06:25:42.928Z",
      CategoryId: null,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0
    },
    {
      id: 101,
      name: "AC Sushi Ya",
      tel: "03-2837382",
      address: "taipeiTW",
      opening_hours: "01:08",
      description: "this is a description.",
      image: null,
      viewCounts: null,
      createdAt: "2019-12-11T08:51:32.693Z",
      updatedAt: "2019-12-11T08:51:32.693Z",
      CategoryId: 60,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0
    }
  ]
};

export default {
  components: {
    NavTabs,
    RestaurantsTopCard
  },
  data() {
    return {
      restaurants: []
    };
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    fetchRestaurants() {
      this.restaurants = dummyData.restaurants;
    }
    /*
    addFavorite(restaurantId) {
      this.restaurants[
        this.restaurants.findIndex(
          restaurant => Number(restaurant.id) === Number(restaurantId)
        )
      ] = {
        ...this.restaurants[
          this.restaurants.findIndex(
            restaurant => Number(restaurant.id) === Number(restaurantId)
          )
        ],
        isFavorited: true
      };
    },
    deleteFavorite(restaurantId) {
      console.log(
        this.restaurants.findIndex(
          restaurant => Number(restaurant.id) === Number(restaurantId)
        )
      );
      this.restaurants[
        this.restaurants.findIndex(
          restaurant => Number(restaurant.id) === Number(restaurantId)
        )
      ] = {
        ...this.restaurants[
          this.restaurants.findIndex(
            restaurant => Number(restaurant.id) === Number(restaurantId)
          )
        ],
        isFavorited: false
      };
      console.log(
        this.restaurants[
          this.restaurants.findIndex(
            restaurant => Number(restaurant.id) === Number(restaurantId)
          )
        ]
      );
    }
    */
  }
};
</script>