import React, { createContext, useContext, useState } from "react";

const StoreContext = createContext<any>(null);

const StoreProvider: React.FC = ({ children }) => {
    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);

    const updatePlayerScore = () => {
        setPlayerScore(playerScore + 1);
    };

    const updateComputerScore = () => {
        setComputerScore(computerScore + 1);
    };

    const store = {
        playerScore,
        computerScore,
        updatePlayerScore,
        updateComputerScore,
    };


    return (
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    );
};

export { StoreContext, StoreProvider }