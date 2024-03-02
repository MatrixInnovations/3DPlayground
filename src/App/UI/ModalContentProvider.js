import * as THREE from 'three';

export default class ModalContentProvider {
  constructor() {
    this.modalContents = {
      aboutMe: {
        title: 'About me',
        imageUrl: '/App/Assets/HighTop.jpeg',
        description: 'A highly ambitious young man committed to achieving excellence at the highest level. Recognizes the significance of diligence, unshakeable commitment, and above all, fostering strong bonds with others. Prefers leading through actions rather than mere words. Diligently conducts research to refine ideas and broaden perspectives, actively seeking guidance from mentors and industry trailblazers. Holds integrity in the highest regard—considered one of his most cherished traits. Takes words seriously, ensuring accountability for actions and readily acknowledging and learning from mistakes.',
      },
      projects: {
        title: 'React Fullstack Web Application',
        imageUrl: "/App/Assets/FRB.jpeg",
        description: 'Architected an image recognition app with machine learning API in React. Enhanced skills in ML integration, front-end development, and API handling. Proactively tackled challenges, ensuring seamless synergy between AI and user interface. Web App URL: <a href="https://mindgames-y5b6.onrender.com">MindGamesApp</a>',
      },
      contactMe: {
        title: 'Contact Me',
        description: 'LinkedIn: <a href="https://linkedin.com/in/andrew-lowery-geekazon" target="_blank">linkedin.com/in/andrew-lowery-geekazon</a>',
      },
    };
  } 

  getModalInfo(portalName) {
    return this.modalContents[portalName];
  }

  createAboutMeMesh() {
    const aboutMeTexture = THREE.ImageUtils.loadTexture(this.modalContents.aboutMe.picture);

    // Create a plane geometry
    const geometry = new THREE.PlaneGeometry(/* dimensions */);

    // Use the texture on a material
    const material = new THREE.MeshBasicMaterial({ map: aboutMeTexture });

    // Create the mesh
    return new THREE.Mesh(geometry, material);
  }
}
