import Image from "next/image";


function InitialLogo () {
  
}

function TansitionLogo(){
  

}


const Intro = () => {
  return (
    <div id="IntroContainer">
      <div id="nameBox" className="border-2 border-frame">
        <Image src="/img/ChrisLogo.png" width={700} height={700}></Image>
        <h1 className="text-cbfont"> Sifeng Chen </h1>
      </div>
      <h1> Hey, my name is Chris </h1>

      <h1> I am a Full stack developer</h1>
    </div>
  );
};

export default Intro;
