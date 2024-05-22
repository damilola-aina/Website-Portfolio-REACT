/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Rindir (https://sketchfab.com/rindir)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/low-poly-head-bust-2578313d54e043da9b59b6077debc714
Title: Low Poly Head Bust
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from "@react-three/fiber"

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')

  const modelref = useRef()


  useFrame((state, delta) =>{
    modelref.current.rotation.z = Math.sin(0.25 * state.clock.getElapsedTime())/3

})

  return (
    <group position={[6,-6,-15]} {...props} dispose={null}>
      <group ref={modelref} rotation={[-Math.PI / 2, -5*Math.PI/16, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_0.geometry}
          material={materials['Scene_-_Root']}
          position={[0, 0, 0]}
          scale={10}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
