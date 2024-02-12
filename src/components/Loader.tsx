import { Html, useProgress } from "@react-three/drei";
const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load"></span>
      <p className="text-sm text-white-100 font-extrabold mt-10">
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default Loader;
