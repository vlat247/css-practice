import Header from "./components/Header";
import Square from "./components/Square";

export default function Home() {
  return (
    <>
    <Header />
    <div id='container'>
      
      <Square bgColor="bg-red-200" />
      <Square bgColor="bg-blue-200" />
      <Square bgColor="bg-green-200" />
      <Square bgColor="bg-yellow-200" />
    </div>
</>
  );
}
