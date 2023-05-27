let HEIGHT = 750;

class App {
  constructor({animate, setup}) {
    this.animate = animate;
    this.setup = setup;
    window.app = this;
  }

  init = async () => {
    this.initScene();
    this.initRenderer();
    this.initCamera();

    this.render();
    this.update();
  }

  initScene = () => {
    this.scene = new THREE.Scene();
  }

  initRenderer = () => {
    this.renderer = new THREE.WebGLRenderer({alpha: true});
    this.renderer.setClearColor(0x0C1354, 1.0);
    this.renderer.setSize(window.innerWidth, HEIGHT);
    this.renderer.setPixelRatio(window.devicePixelRatio * 1);
    this.renderer.shadowMap.enabled = true;
    this.renderer.antialias = true;
  }

  initCamera = () => {
    let aspectRatio = window.innerWidth / HEIGHT;
    let viewSize = 250; // You may want to adjust this depending on your scene

    // OrthographicCamera parameters are left, right, top, bottom, near, far
    // Adjust these values to crop the frustum
    let left = -aspectRatio * viewSize / 2.3;
    let right = aspectRatio * viewSize / 2; // Set this to 0 to only show the left half of the scene
    let top = viewSize / 2;
    let bottom = -viewSize / 2; // Set this to 0 to only show the top half of the scene

    // OrthographicCamera parameters are left, right, top, bottom, near, far
    this.camera = new THREE.OrthographicCamera(left, right, top, bottom, 1, 500);

    this.camera.position.set(10, 20, 1000); // Adjust position as needed
    // this.camera.lookAt(this.scene.position);
  }

  render = () => {
    this.setup(this);
    let target = document.getElementById("3dglobe-target")
    target.appendChild(this.renderer.domElement);
  }

  // REQUESTANIMATIONFRAME IS HERE
  update = () => {
    this.animate(this);
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.update);
  }

  addControlGui = callback => {
    var gui = new dat.GUI();
    dat.GUI.toggleHide();
    callback(gui);
  }

  handleResize = () => {
    this.camera.aspect = window.innerWidth / HEIGHT;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, HEIGHT);
  }
}
