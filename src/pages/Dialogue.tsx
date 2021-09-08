import "./Dialogue.scss";
import Header from "../components/Header";
import SpeechBubble from "../components/SpeechBubble";

const Dialogue = () => {
  const data = {
    lines: [
      { key: 1, person: "Ange Katrina", jpn: { key: 1, japanese: "お待たせ、待った？", hiragana: "おまたせ、まった？" }, eng: "Sorry, I'm late. Did you wait long?" },
      { key: 2, person: "Lize Helesta", jpn: { key: 2, japanese: "ううん、今来たとこ。", hiragana: "ううん、いまきたとこ。" }, eng: "No, I just got here." },
    ],
  }

  return (
    <body>
      <Header />
      <div className="Dialogue">
        {data.lines.map((line) => (
          <SpeechBubble line={line}></ SpeechBubble>
        ))}
      </div>
    </body>
  );
}

export default Dialogue;