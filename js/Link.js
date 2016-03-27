var Link = function(id, mesh, radius) {

	this.id = id;
	this.mesh = mesh;
	this.force = new THREE.Vector3(0,0,0);
	this.velocity = new THREE.Vector3(0,0,0);
	this.radius = radius;
	this.mass = 1000;

};
