<script lang="ts">
	import * as THREE from 'three';
	import { setup } from '../../utils/context.js';
	import * as defaults from '../../utils/defaults.js';

	/** @type {THREE.BufferGeometry} */
	export let points: THREE.Vector3[] | THREE.Vector2[] = [];
	export let geometry = defaults.geometry;

	export let material = new THREE.LineBasicMaterial({color: 0x0000ff});

	export let renderOrder = 0;

	// TODO morphTargetInfluences, morphTargetDictionary, raycast
	const { root, self } = setup(new THREE.Line(geometry, material));
	$: {
		if (self.geometry && geometry !== self.geometry) {
			// TODO geometry might be used by another object?
			self.geometry.dispose();
		}

		self.geometry = geometry;
		self.material = material;
		self.geometry.setFromPoints(points);
		self.renderOrder = renderOrder;

		root.invalidate();
	}
</script>

<slot />
