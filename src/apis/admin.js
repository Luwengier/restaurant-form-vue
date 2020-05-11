import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  /* eslint-disable */
  restaurants: {
    getDetail({ restaurantId }) {
      return apiHelper.get(`/admin/restaurants/${restaurantId}`)
    },
    create({ formData }) {
      return apiHelper.post('/admin/restaurants', formData)
    },
    get() {
      return apiHelper.get('/admin/restaurants')
    },
    update({ restaurantId, formData }) {
      return apiHelper.put(`/admin/restaurants/${restaurantId}`, formData)
    },
    delete(restaurantsId) {
      return apiHelper.delete(`/admin/restaurants/${restaurantsId}`)
    }
  },
  categories: {
    get() {
      return apiHelper.get('/admin/categories')
    }
  }
}