import { useState } from "react";
import {
  MyMessage,
  TextMessageBox,
  TypingLoader,
  GptMessage,
  TextMessageBoxFile,
  TextMessageBoxSelect,
} from "../../components";

interface Message {
  text: string;
  isGpt: boolean;
}

export const OrthographyPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const handlePost = async (text: string) => {
    setIsLoading(true);
    setMessages((prev) => [...prev, { text: text, isGpt: false }]);

    // TODO: UseCase

    setIsLoading(false);

    // Todo: Añadir el mensaje isGPT en true
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2">
          {/* Bienvenida */}

          <GptMessage text="Hola, puedes escribir tu texto en español, y te ayudo con las correcciones" />

          {messages.map((message, index) =>
            message.isGpt ? (
              <GptMessage key={index} text="Esto es de GPT" />
            ) : (
              <MyMessage key={index} text="Esto es myMessage" />
            )
          )}

          {isLoading && (
            <div className="col-start-1 col-end-12 fade-in">
              <TypingLoader />
            </div>
          )}
        </div>
      </div>

      <TextMessageBox
        onSendMessage={handlePost}
        placeholder="Escribe aquí para verificar ortografia"
        disableCorrection
      />
      {/* <TextMessageBoxFile
        onSendMessage={handlePost}
        placeholder="Escribe aquí para verificar ortografia"
      /> */}

      {/* <TextMessageBoxSelect
        options={[
          { id: "1", text: "hola" },
          { id: "2", text: "mundo" },
          { id: "3", text: "ia" },
        ]}
        onSendMessage={console.log}
      /> */}
    </div>
  );
};
