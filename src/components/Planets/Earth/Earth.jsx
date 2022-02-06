import React, { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Loader,
  useProgress,
  Html,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";

import earth from "./pictures/earth.jpg";
import bumps from "./pictures/bumps.png";
import starfield from "./pictures/starfield.jpg";
import clouds from "./pictures/clouds.png";

function EarthObject() {
  const earthRef = React.useRef();
  const cloudRef = React.useRef();
  const galaxyRef = React.useRef();
  const [earthTx, bump, cloud, galaxy] = useTexture([
    earth,
    bumps,
    clouds,
    starfield,
  ]);

  earthTx.wrapS = THREE.RepeatWrapping;
  earthTx.repeat.set(1, 1);
  bump.wrapS = THREE.RepeatWrapping;
  bump.repeat.set(1, 1);

  useFrame(({ clock }) => {
    earthRef.current.rotation.y = clock.getElapsedTime() / 32;

    cloudRef.current.rotation.x = clock.getElapsedTime() / 32;
    cloudRef.current.rotation.y = clock.getElapsedTime() / 32;

    galaxyRef.current.rotation.y = clock.getElapsedTime() / 64;
  });

  return (
    <>
      <mesh ref={earthRef}>
        <sphereBufferGeometry attach="geometry" args={[1, 64, 64]} />
        <meshPhysicalMaterial
          attach="material"
          map={earthTx}
          bumpMap={bump}
          bumpScale={0.1}
          shininess={8}
          reflectivity={0}
          side={2}
        />
      </mesh>
      <mesh ref={cloudRef}>
        <sphereBufferGeometry attach="geometry" args={[1.03, 64, 64]} />
        <meshPhysicalMaterial attach="material" map={cloud} transparent />
      </mesh>
      <mesh ref={galaxyRef}>
        <sphereBufferGeometry attach="geometry" args={[2.5, 64, 64]} />
        <meshBasicMaterial attach="material" map={galaxy} side={1} />
      </mesh>
    </>
  );
}

function ObjectLoader() {
  const { progress } = useProgress();

  return (
    <>
      <Html center sprite transform distanceFactor={20} position={[5, 15, 0]}>
        {progress}%
      </Html>
    </>
  );
}

export default function Earth() {
  return (
    <div style={{ height: "100vh", width: "100wh" }}>
      <Canvas colorManagement camera={{ position: [0, 0, 1.6], fov: 90 }}>
        <Suspense fallback={<ObjectLoader />}>
          <directionalLight position={[-2, 1.0, 1.6, 12]} />
          <EarthObject />
          <OrbitControls
            maxDistance={2.5}
            minDistance={1.3}
            enablePan={false}
          />
        </Suspense>
      </Canvas>
      <Loader />
    </div>
  );
}
