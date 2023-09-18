import "./App.css";
import ButtonClass from "./components/ButtonClass";
import ButtonFunction from "./components/ButtonFunction";

const App =() =>{
  const foodFavorite = ["grape", "banana", "durians"];
  const playMusic = () => {
    alert("hore")
  }

  const sendEmail = () => {
    alert("Send")
  }

  const sayHai = (name) => {

    alert(`Hi ${name}`)
  }
  return (
    <>
      
      <h1>belajar react</h1>
      <p>Hello</p>
      <ul>
        {
          foodFavorite.map((food) => {
            return <li>{food}</li>;
          })
          /* <li>{foodFavorite[0]}</li>
              <li>{ foodFavorite[1]}</li>
              <li>{ foodFavorite[2]}</li> */
        }
      </ul>
      <ButtonClass text="coba" />
      
      <ButtonFunction text="lagi" warna="blue" onClickHandler={playMusic}/>
      <ButtonFunction text="Kirim email" warna="red" onClickHandler={sendEmail} />
      <ButtonFunction text="say hi" warna="green" onClickHandler={() => sayHai('budi')}/>
      <ButtonClass text="kembali" />
      
    </>
  );
}

export default App;
