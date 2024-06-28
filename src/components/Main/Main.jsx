import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import "./Main.css";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  const handleCardClick = (text) => {
    setInput(text);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSent();
    }
  };

  return (
    <div className="main">
      <div className="nav">
        <p>AI Chat</p>
        <img src={assets.user_icon2} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, User.</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div
                className="card"
                onClick={() =>
                  handleCardClick(
                    "Suggest a beautiful place to see on an upcoming road trip"
                  )
                }
              >
                <p>Suggest a beautiful place to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div
                className="card"
                onClick={() =>
                  handleCardClick(
                    "Evaluate and rank the following: film, digital, and polaroid cameras across price, photo quality, and trendiness."
                  )
                }
              >
                <p>
                  Evaluate and rank the following: film, digital, and polaroid
                  cameras across price, photo quality, and trendiness.
                </p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div
                className="card"
                onClick={() =>
                  handleCardClick(
                    "Find YouTube videos with inspiring best man speeches"
                  )
                }
              >
                <p>Find YouTube videos with inspiring best man speeches</p>
                <img src={assets.youtube_icon} alt="" />
              </div>
              <div
                className="card"
                onClick={() =>
                  handleCardClick(
                    "How can I list all processes that have been running longer than an hour in Linux?"
                  )
                }
              >
                <p>
                  How can I list all processes that have been running longer
                  than an hour in Linux?
                </p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon2} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.AI} alt="" />
              {loading ? (
                <div>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
              onKeyPress={handleKeyPress}
            />
            <div>
              {/* <img src={assets.galary_icon} alt="" />
              <img src={assets.mic_icon} alt="" /> */}
              {input ? (
                <img
                  onClick={() => onSent()}
                  src={assets.send_icon}
                  alt="Send"
                />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            AI chat may display inaccurate info, including about people, so
            double-check its responses. Your privacy & AI Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
