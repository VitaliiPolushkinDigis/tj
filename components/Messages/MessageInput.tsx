import { FC, useState } from 'react';

interface MessageInputProps {
  send: (text: string) => void;
}

const MessageInput: FC<MessageInputProps> = ({ send }) => {
  const [value, setValue] = useState('');
  const handleSendClick = () => {
    send(value);
    setValue('');
  };
  return (
    <div>
      <input
        onChange={(text) => {
          setValue(text.target.value);
        }}
        type="text"
        placeholder="Type your message"
        value={value}
      />
      <button onClick={handleSendClick}>Send</button>
    </div>
  );
};

export default MessageInput;
