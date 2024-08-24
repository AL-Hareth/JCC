'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model(props: any) {
  const { scene } = useGLTF('/blender/uploads_files_3660386_glb.glb');
  return <primitive object={scene} {...props} />;
}

export default function ModelViewer() {
  return (
   <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />
      <OrbitControls />
      <Model position={[0, 0, 0]} />
    </Canvas>
  );
}
