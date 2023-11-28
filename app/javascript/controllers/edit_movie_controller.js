import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="edit-movie"
export default class extends Controller {
  static targets = ["form", "title"];
  connect() {
    console.log(this.element);
  }

  toggleForm() {
    this.formTarget.classList.toggle("d-none");
    this.titleTarget.classList.toggle("d-none");
  }

  update(event) {
    const url = event.currentTarget.action;
    const formData = new FormData(event.currentTarget);
    fetch(url, {
      method: "PATCH",
      headers: {
        Accept: "text/plain",
      },
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => {
        this.element.outerHTML = data;
      });
  }
}
