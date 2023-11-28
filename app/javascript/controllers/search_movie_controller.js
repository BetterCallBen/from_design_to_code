import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="search-movie"
export default class extends Controller {
  static targets = ["movies", "form"];

  connect() {
    console.log("tout con");
    console.log();
  }

  filterMovies(event) {
    const url = `${this.formTarget.action}?query=${event.currentTarget.value}`;
    console.log(url);

    fetch(url, {
      headers: {
        Accept: "text/plain",
      },
    })
      .then((res) => res.text())
      .then((data) => {
        this.moviesTarget.innerHTML = data;
      });
  }
}
