import { createRestaurantTemplate } from "../templates/template-creator";
import RestaurantSource from "../../data/restaurant-source";

const Artikel = {
  async render() {
    return `
      <h1 class="fw-bold" style="text-align: center;">Artikel Terkait <span class="text-warning">Stunting</span></h1>
      <div class="container mt-4" >
        <div class="row" id="restaurants">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.getListOfRestaurants();
    const restaurantsContainer = document.querySelector("#restaurants");
    if (restaurantsContainer) {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantTemplate(restaurant);
      });
    } else {
      console.error("Element #restaurants not found");
    }
  },
};

export default Artikel;
