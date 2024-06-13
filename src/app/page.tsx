import { useState } from "react";
import useLocalStorage from "./use-localstorage";

export default function Home() {
  const [name, setName] = useLocalStorage("loggedInUser", "");
  const [age, setAge] = useState(20);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={() => setName("Hackman")}></button>
      <div>logged user: {name}</div>
    </main>
  );
}
