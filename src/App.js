import React from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Stars } from "drei";
import { Physics, usePlane, useBox } from "use-cannon";
import "./styles.css";

function Box() {
  const [ref, api] = useBox(() => ({ mass: 1, position: [0, 2, 0] }));
  return (
    <mesh
      onClick={() => {
        api.velocity.set(0, 2, 0);
      }}
      ref={ref}
      position={[0, 2, 0]}
    >
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
      // 박스 컬러와 material
    </mesh>
  );
}

function Plane() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
  }));
  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      //크기를 지정한다
      <meshLambertMaterial attach="material" color="lightblue" />
      //배경을 지정한다..
    </mesh>
  );
}

export default function App() {
  return (
    <Canvas>
      <OrbitControls />
      // 궤도컨트롤? 드래그로 움직일수있게하는 기능
      <Stars />
      //배경을 별이보이는 화면처럼 보이게함 drei 에서 제공해줌..
      <ambientLight intensity={0.5} />
      // 주변에 조명을 추가하는것? 이코드를 쓰니까 검은색이 박스의 지정된 생깔로
      변함.
      <spotLight position={[10, 15, 10]} angle={0.3} />
      // 그림자를 지게함.. 좀더 3D같아보임..
      <Physics>
        <Box />
        네모난 정육면체ㄱㄷ
        <Plane />
        /박스아래 파란부분 우주부분말고 그부분을 코드로 짜준다. 결국바닥부분임
      </Physics>
    </Canvas>
  );
}
