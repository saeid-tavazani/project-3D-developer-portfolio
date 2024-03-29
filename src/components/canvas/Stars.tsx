import { useState, useRef, Suspense, MutableRefObject } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { Group } from "three";

const Stars = (props: any) => {
  const ref: MutableRefObject<Group | null> = useRef(null);
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );
  // Assigning a Group instance to ref.current
  // ref.current = new Group();
  useFrame((state, delta) => {
    if (ref.current) {
      // Add null check to prevent accessing properties on undefined
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  // Example usage:
  // Assigning a Group instance to ref.current

  return (
    <group rotation={[0, 0, Math.PI / 4]} ref={ref}>
      {" "}
      {/* Assign ref to the group */}
      <Points positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
