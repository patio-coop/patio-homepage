let HEIGHT = 600;

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
    this.ratio = window.innerWidth / HEIGHT;
    this.camera = new THREE.PerspectiveCamera(60, this.ratio, 10, 5000);
    this.camera.lookAt(this.scene.position);
    this.camera.position.set(0, 20, 30);
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
