const app = new App({ setup, animate });

window.onload = app.init;
window.onresize = app.handleResize;

const loader = new THREE.TextureLoader();
const data = {}

function setup(app) {
  app.camera.position.z = config.sizes.globe * 1.75;
  app.camera.position.x = config.sizes.globe * 0;
  app.camera.position.y = config.sizes.globe * 1;

  groups.main = new THREE.Group();
  groups.main.name = 'Main';

  const globe = new Globe();
  groups.main.add(globe);

  const points = new Points(data.grid);
  groups.globe.add(groups.points);

  const markers = new Markers(data.countries);
  groups.globe.add(groups.markers);

  const lines = new Lines();
  groups.globe.add(groups.lines);

  app.scene.add(groups.main);
}


function animate(app) {
  if(elements.lineDots) {
    for(let i = 0; i < elements.lineDots.length; i++) {
      const dot = elements.lineDots[i];
      dot.material.color.set(config.colors.globeLinesDots);
      dot.animate();
    }
  }

  if(elements.markers) {
    for(let i = 0; i < elements.markers.length; i++) {
      const marker = elements.markers[i];
      marker.point.material.color.set(config.colors.globeMarkerColor);
      marker.glow.material.color.set(config.colors.globeMarkerGlow);
      marker.label.material.map.needsUpdate = true;
      marker.animateGlow();
    }
  }

  if(animations.rotateGlobe) {
    groups.globe.rotation.y -= 0.0025;
    groups.globe.rotation.x -= 0.0025;
    groups.globe.rotation.z -= 0.0025;
  }
}

