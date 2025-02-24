import { Logo } from '@pmndrs/branding'
import { Canvas } from '@react-three/fiber'
import { AccumulativeShadows, RandomizedLight, OrbitControls } from '@react-three/drei'
import { Leva } from 'leva'

import Overlay from './Overlay'
import Sphere from "./Sphere";
import Env from "./Env";

import "./App.css";

export default function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [0, 0, 4.5], fov: 50 }}>
        <group position={[0, -0.65, 0]}>
          <Sphere />
          <AccumulativeShadows temporal frames={200} color="purple" colorBlend={0.5} opacity={1} scale={10} alphaTest={0.85}>
            <RandomizedLight amount={8} radius={5} ambient={0.5} position={[5, 3, 2]} bias={0.001} />
          </AccumulativeShadows>
        </group>
        <Env />
        <OrbitControls autoRotate autoRotateSpeed={4} enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.1} maxPolarAngle={Math.PI / 2.1} />
      </Canvas>
      <Overlay />
      <Logo style={{ position: 'absolute', bottom: 40, left: 40, width: 30 }} />
      <Leva collapsed />
    </>
  )
}

