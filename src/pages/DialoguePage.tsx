import "./DialoguePage.scss";
import Header from "../components/Header";
import SpeechBubble from "../components/SpeechBubble";

const DialoguePage = () => {
  const data = {
    lineInfoList: [
      { person: "Ange Katrina", jpnLine: { nihongo: "あっ", hiragana: "あっ" }, engLine: "Oops" },
      { person: "Ange Katrina", jpnLine: { nihongo: "お待たせ、待った？", hiragana: "おまたせ、まった？" }, engLine: "Sorry, I'm late. Did you wait long?" },
      { person: "Lize Helesta", jpnLine: { nihongo: "ううん、今来たとこ。", hiragana: "ううん、いまきたとこ。" }, engLine: "No, I just got here." },
      { person: "Inui Toko", jpnLine: { nihongo: "いぬいここ！リゼひよこ！アンジュぺったんこ！！", hiragana: "いぬいここ！リゼひよこ！アンジュぺったんこ！！" }, engLine: "Inui Koko! Lize Hiyoko! Ange Pettanko!!" },
    ],
  }

  return (
    <body>
      <Header />
      <div className="Dialogue">
        {data.lineInfoList.map((lineInfo) => (
          <SpeechBubble person={lineInfo.person} jpnLine={lineInfo.jpnLine} engLine={lineInfo.engLine}></ SpeechBubble>
        ))}
      </div>
    </body>
  );
}

export default DialoguePage;