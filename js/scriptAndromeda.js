camera.position.z = 10;  // Set the camera position so that the circle is visible

// Add lighting if using MeshPhongMaterial
var light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(10, 10, 10);
scene.add(light);

// Render loop
var animate = function () {
  requestAnimationFrame(animate);

  // Any animations or updates to the scene go here

  renderer.render(scene, camera);
};

animate();
