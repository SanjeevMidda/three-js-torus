import "./index.css";
import { extend, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Group } from "three/examples/jsm/libs/tween.module.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

extend({ OrbitControls });

function App() {
  const { camera, gl } = useThree();
  console.log(camera, gl);

  const torusRef = useRef();

  useFrame((state, delta) => {
    // console.log("tick");
    // torusRef.current.rotation.y += 0.01;
    // torusRef.current.rotation.x += 0.01;
  });

  console.log(torusRef.current);
  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />
      <group ref={torusRef}>
        <mesh position-x={-2}>
          <sphereGeometry />
          <meshBasicMaterial color="orange" wireframe />
        </mesh>

        <mesh position={[2, 0, 0]} scale={2} rotation={[2, 1, 1]}>
          <torusGeometry />
          <meshBasicMaterial wireframe color="blue" />
        </mesh>
      </group>

      {/* <mesh scale={10} rotation-x={-Math.PI * 0.5} position-y={-1}>
        <planeGeometry />
        <meshBasicMaterial color="green" />
      </mesh> */}
    </>
  );
}

export default App;
