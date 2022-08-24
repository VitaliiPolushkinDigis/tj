import { FC } from 'react';
import { useSubscribeToEventsQuery } from '../../services/api/MessageService';

interface MessagesProps {
  messages: string[];
}

const Messages: FC<MessagesProps> = ({ messages }) => {
  const { data } = useSubscribeToEventsQuery();

  return (
    <div>
      {data.map((message, i) => (
        <p key={i}>{message}</p>
      ))}
    </div>
  );
};

export default Messages;
