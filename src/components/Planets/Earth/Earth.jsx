import React, { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Loader,
  useProgress,
  Html,
  useTexture,
} from "@react-three/drei";

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
        <meshPhongMaterial
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
        <meshBasicMaterial attach="material" map={cloud} transparent />
      </mesh>
      <mesh ref={galaxyRef}>
        <sphereBufferGeometry attach="geometry" args={[90, 64, 64]} />
        <meshBasicMaterial attach="material" map={galaxy} side={1} />
      </mesh>
    </>
  );
}

function ObjectLoader() {
  const { progress } = useProgress();

  return (
    <>
      <Html
        center
        sprite
        transform
        distanceFactor={20}
        position={[5, 15, 0]}
        style={{
          background: "palegreen",
          fontSize: "50px",
          padding: "10px 18px",
          border: "2px solid black",
        }}
      >
        {progress}%
      </Html>
    </>
  );
}

export default function Earth() {
  try {
    return (
      <div>
        <Canvas
          style={{
            height: "100vh",
            width: "100wh",
            backgroundColor: "black",
          }}
          colorManagement
          dpr={window.devicePixelRatio}
          camera={{ position: [0, 0, 1.6], fov: 90 }}
        >
          <Suspense fallback={<ObjectLoader />} dpr={[1, 2]}>
            <directionalLight position={[-2, 1.0, 1.6, 3]} />
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
  } catch (error) {
    console.log("The error is: " + Error);
  }
}
