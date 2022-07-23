import React, {useState} from 'react';

const ChatInput = () => {
  const [textArea, setTextArea] = useState(null);

  return (
    <div className="mainChatInput">
      <textarea value={textArea} onChange={(e) => setTextArea(e.target.value)}/>
      <button className="button2">Submit</button>
    </div>
  );
};

export default ChatInput;
