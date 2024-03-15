export default class ModalManager {
    constructor() {
        this.modal = document.getElementById("myModal");
        this.modalImage = document.getElementById("modalImage"); // Define modalImage
        this.close = document.getElementsByClassName("close")[0];
        this.close.onclick = () => {
            this.closeModal()
        }
    }
  
    // getImageUrlForPortal(currentPortal) {
    //     // Define image URLs for each portal
    //     let imageUrls = {
    //         portal1: "/App/Assets/HighTop.jpeg",
    //         portal2: "/App/Assets/MindGamesFaceBrain.jpg",
    //         portal3: "/App/Assets/BlackTie.jpeg"
    //     };
    
    //     // Get the appropriate image URL based on the current portal
    //     return imageUrls[currentPortal];
    // }
  
    openModal(title, description, imageUrl, width, height) {
        document.getElementById("modalTitle").innerHTML = title;
        document.getElementById("modalDescription").innerHTML = description;
        this.modalImage.src = imageUrl;
        this.modalImage.style.maxWidth = width + 'px';
        this.modalImage.style.maxHeight = height + 'px';
        this.modal.style.display = "block";
        this.modal.classList.remove('fadeOut');
        this.modal.classList.add('fadeIn');
    }
    
  
    closeModal() {
        this.modal.classList.remove('fadeIn');
        this.modal.classList.add('fadeOut');
        setTimeout(() => {
            this.modal.style.display = "none";
        }, 600);
    }
}



// This code defines a JavaScript class called ModalManager that handles the functionality of a modal window. Here's a simplified breakdown:

// 1. Constructor: 
//    - Finds necessary elements in the HTML document, such as the modal itself, an image element within the modal, and a close button.
//    - Sets up an event listener for the close button so that when clicked, it triggers the closeModal method.

// 2. getImageUrlForPortal(currentPortal):
//    - Defines a method that returns the URL of an image based on the portal (a certain section or category) provided.

// 3. openModal(title, description, imageUrl):
//    - Opens the modal window with the provided title, description, and image URL.
//    - Sets the content of the modal (title, description, and image URL) based on the arguments provided.
//    - Displays the modal window and applies a fade-in animation.

// 4. closeModal():
//    - Closes the modal window.
//    - Applies a fade-out animation to the modal before hiding it.
//    - It does so with a slight delay for the animation to finish.

// In essence, this class allows you to easily manage the opening and closing of a modal window and dynamically change its content based on the parameters passed to the openModal method.
