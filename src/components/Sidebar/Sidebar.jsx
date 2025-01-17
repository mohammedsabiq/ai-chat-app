import React, { useState, useContext } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div className="sidebar">
      <div className="top">
        <img
          className="menu"
          onClick={() => setExtended((prev) => !prev)}
          src={assets.menu_icon}
          alt="menu icon"
        />
        <div onClick={() => newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="new chat icon" />
          {extended && <p>New chat</p>}
        </div>
        {extended && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((item, index) => {
              return (
                <div onClick={() => loadPrompt(item)} key={item} className="recent-entry">
                  <img src={assets.message_icon} alt="message icon" />
                  <p>{item.slice(0, 18)} ...</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
      {/* <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="help icon" />
          {extended && <p>Help</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="activity icon" />
          {extended && <p>Activity</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.settings_icon} alt="settings icon" />
          {extended && <p>Settings</p>}
        </div>
      </div> */}
    </div>
  );
};

export default Sidebar;
