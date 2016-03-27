
function updatePosition(chain_links){
	var a;
	var distance = new THREE.Vector3( 0, 0, 0 );
	var short = new THREE.Vector3( 0, 0, 0 );
	var move = new THREE.Vector3( 0, 0, 0 );
	for(var link_id = 0; link_id < chain_links.length; link_id++){




		a = chain_links[link_id].force.divideScalar(chain_links[link_id].mass);
		chain_links[link_id].velocity.addScaledVector(chain_links[link_id].force, p.dt);
		chain_links[link_id].velocity.x = p.floor_friction*chain_links[link_id].velocity.x;
		chain_links[link_id].velocity.z = p.floor_friction*chain_links[link_id].velocity.z;


    if(link_id != chain_links.length-1){
			distance.subVectors(chain_links[link_id].mesh.position, chain_links[link_id+1].mesh.position);
			if(distance.length() > p.max_dist/1.5){
					short = distance.normalize().multiplyScalar(p.max_dist);//*p.max_dist;
					move.subVectors(distance, short);
					//chain_links[link_id+1].mesh.position.add(move);
					chain_links[link_id + 1].velocity.add(distance.divideScalar(distance.length()*1));
			}
		}

		if(link_id != chain_links.length-1){
			distance.subVectors(chain_links[link_id].mesh.position, chain_links[link_id+1].mesh.position);
			if(distance.length() > p.max_dist){
					short = distance.normalize().multiplyScalar(p.max_dist);//*p.max_dist;
					move.subVectors(distance, short);
					//chain_links[link_id+1].mesh.position.add(move);
					chain_links[link_id + 1].mesh.position.add(distance.divideScalar(distance.length()/2));
			}
		}


		chain_links[link_id].mesh.position.addScaledVector(chain_links[link_id].velocity, p.dt);



		checkBoundaries(chain_links[link_id]);





	}

	return chain_links;
}

function checkBoundaries(link){
	if(link.mesh.position.y < link.radius){
		link.mesh.position.y = link.radius;
		link.velocity.y = -p.bounce_factor * link.velocity.y;
	}

	if(link.mesh.position.z < link.radius + p.nearBound){
		link.mesh.position.z = link.radius + p.nearBound;
		link.velocity.z = -p.bounce_factor * link.velocity.z;
	}

	if(link.mesh.position.z > - link.radius + p.farBound){
		link.mesh.position.z = - link.radius + p.farBound;
		link.velocity.z = -p.bounce_factor * link.velocity.z;
	}

	if(link.mesh.position.x < link.radius + p.leftBound){
		link.mesh.position.x = link.radius + p.leftBound;
		link.velocity.x = -p.bounce_factor * link.velocity.x;
	}

	if(link.mesh.position.x > - link.radius + p.rightBound){
		link.mesh.position.x = - link.radius + p.rightBound;
		link.velocity.x = -p.bounce_factor * link.velocity.x;
	}
}
