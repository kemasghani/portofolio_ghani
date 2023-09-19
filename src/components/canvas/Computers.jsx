import React, { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  const meshRef = useRef();

  return (
    <mesh ref={meshRef}>
      {/* ... Lights and other components ... */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.95}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const CameraControls = ({ controlsRef }) => {
  return (
    <OrbitControls
      ref={controlsRef}
      enableZoom={false}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 2}
    />
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const controlsRef = useRef(); // Define controlsRef at a higher scope

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  // Animation loop
  const animate = () => {
    // Rotate the camera around the center
    const cameraPosition = [
      40 * Math.cos(performance.now() * 0.0005), // Adjust the speed as needed
      3,
      40 * Math.sin(performance.now() * 0.0005), // Adjust the speed as needed
    ];

    if (controlsRef.current) {
      controlsRef.current.object.position.set(...cameraPosition);
      controlsRef.current.object.lookAt(0, 0, 0);
    }

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    // Start the animation loop when the component mounts
    animate();

    // Clean up the animation loop when the component unmounts
    return () => {
      cancelAnimationFrame(animate);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 50], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <CameraControls controlsRef={controlsRef} />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
