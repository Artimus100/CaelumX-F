'use client'

import { useState, useRef } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import * as THREE from 'three'
import { TextureLoader } from 'three'

interface GlobeProps {
  isHovered: boolean
  setIsHovered: React.Dispatch<React.SetStateAction<boolean>>
}

function Globe({ isHovered, setIsHovered }: GlobeProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const globeTexture = useLoader(TextureLoader, '/placeholder.svg?height=1024&width=2048')

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001
    }
  })

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
      scale={isHovered ? 1.1 : 1}
    >
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        map={globeTexture}
        emissive={new THREE.Color(0x00ff00)}
        emissiveIntensity={isHovered ? 0.5 : 0.2}
      />
    </mesh>
  )
}

export default function GlobeScene() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Canvas camera={{ position: [0, 0, 3] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Stars radius={300} depth={60} count={5000} factor={7} saturation={0} fade speed={1} />
      <Globe isHovered={isHovered} setIsHovered={setIsHovered} />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  )
}
