import React from 'react';

/**
 * Message - компонент сообщения.
 *
 * @param text - текст сообщения.
 */
const Message = ({ text }) => {

  return (
    <p className="message">{text}</p>
  );
};

export default Message;
