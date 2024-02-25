import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const StarsCanvas = (props) => {
  const ref = useRef();

  const [sphere] = useState(() =>
    random
      .inSphere(new Float32Array(2001), { radius: 1.2 })
      .filter((x) => !isNaN(x) && x !== undefined)
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 25;
    ref.current.rotation.y -= delta / 30;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const Stars = () => {
  return (
    <div className="w-full mt-[50vh] h-[50vh] absolute  inset-0 ">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense>
          <StarsCanvas />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default Stars;
