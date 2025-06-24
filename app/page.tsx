'use client '

import Image from "next/image";

export default function Home() {
  function myFunc(){
    alert("Hello")
  }
  return (
    <main>
      <h1>Welcome to my Page</h1>
      <button onClick={myFunc}>Click</button>
    </main>
  );
}
