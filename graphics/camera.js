import camera from "../data/camera"

Class Camera() {
  constructor() {
    this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
  }

}
