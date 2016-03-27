window.addEventListener( 'resize', onWindowResize, false );


document.onkeydown = onKeyDown;
document.onkeyup = onKeyUp;

function onKeyDown(e) {
    e = e || window.event;
		if (e.keyCode == '38') {up = true;}
    else if (e.keyCode == '40') {down = true;}
    else if (e.keyCode == '37') {left = true;}
		else if (e.keyCode == '39') {right = true;}
    else if (e.keyCode == '32') {chain_links[1].velocity.y = p.jump_gain;}
}

function onKeyUp(e) {
    e = e || window.event;
		if (e.keyCode == '38') {up = false;}
    else if (e.keyCode == '40') {down = false;}
    else if (e.keyCode == '37') {left = false;}
    else if (e.keyCode == '39') {right = false;}
}


function onWindowResize() {

	windowHalfX = window.innerWidth / 2;
	windowHalfY = window.innerHeight / 2;
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
}
