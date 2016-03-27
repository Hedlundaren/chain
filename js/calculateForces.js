
function calculateForces(chain_links){
  var force = new THREE.Vector3( 0, 0, 0 );
  var gravity_force = new THREE.Vector3( 0, 0, 0 );
  var arrow_key_force = new THREE.Vector3( 0, 0, 0 );
  var distance = new THREE.Vector3( 0, 0, 0 );
  var move = new THREE.Vector3( 0, 0, 0 );
  var short = new THREE.Vector3( 0, 0, 0 );
  for(var link_id = 0; link_id < chain_links.length; link_id++){

    // Initialize
    force = new THREE.Vector3(0,0,0);

    // Gravity
    gravity_force.set(0,p.g*chain_links[link_id].mass,0);


    // Add forces together
    force.add(gravity_force);
    chain_links[link_id].force = force;
  }

  // Arrow keys
  arrow_key_force.set(left*p.speed_gain - right*p.speed_gain, 0, up*p.speed_gain - down*p.speed_gain);
  chain_links[1].force.add(arrow_key_force);


  return chain_links;

}
