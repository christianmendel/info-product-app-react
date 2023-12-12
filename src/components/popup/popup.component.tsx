import React, { useEffect, useState } from "react";
import { useRandomUser } from "../../hook/userGenerate/userGenerate";
import { User } from "../../model/user";
import "./popup.component.css";

export const PopUp: React.FC = () => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState<User>({} as User);

  const randomUserApi = useRandomUser();
  const generateRandomTime = () => {
    const min = 15;
    const max = 60;

    return (Math.floor(Math.random() * (max - min + 1)) + min) * 1000;
  };

  const displayPopUp = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
      gerarUser();
    }, 5000);
  };

  useEffect(() => {
    gerarUser();
  }, []);

  useEffect(() => {
    const handleTimeout = () => {
      displayPopUp();
      setTimeout(handleTimeout, generateRandomTime());
    };

    const timeout = setTimeout(handleTimeout, generateRandomTime());

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  async function gerarUser() {
    const userGerado: User = (await randomUserApi.fetchRandomUser()) as User;
    setUser(userGerado);
  }

  return (
    <>
      {!!show && (
        <div className="popup active">
          <div className="popup-title">
            <b>Compra feita!</b>
          </div>
          <div className="popup-details">
            Por <b>{user.name}</b> na cidade de <b>{user.city}</b>
          </div>
        </div>
      )}
    </>
  );
};
