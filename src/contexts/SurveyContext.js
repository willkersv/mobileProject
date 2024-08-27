import React, {createContext, useContext, useState} from 'react';

const SurveyContext = createContext();

export const SurveyProvider = ({children}) => {
  const [selectedSurvey, setSelectedSurvey] = useState(null);

  return (
    <SurveyContext.Provider value={{selectedSurvey, setSelectedSurvey}}>
      {children}
    </SurveyContext.Provider>
  );
};

export const useSurvey = () => useContext(SurveyContext);