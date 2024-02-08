import React, { useEffect } from "react";

// Function to remove annotations from the text
const removeAnnotations = (text) => {
  const regex = /【.*?】/g; // Regular expression to match annotations
  return text.replace(regex, ""); // Removing annotations from the text
};

// Chat component to display messages
const Chat = ({ messages }) => {
  // Reversing the messages array to display the latest message first
  const reversedMessages = [...messages].reverse();

  return (
    <>
      {reversedMessages.map((message) => ( // Mapping through reversed messages
        <div key={message.id} className={message.role}> {/* Adding role class based on message role */}
          {message.content.map((content, index) => ( // Mapping through message content
            <div key={index} className={`message-content ${content.type}`}> {/* Adding type class based on content type */}
              {content.type === "text" && ( // Rendering text content if type is text
                <p>{removeAnnotations(content.text.value)}</p> // Rendering text content with annotations removed
              )}
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default Chat; // Exporting Chat component