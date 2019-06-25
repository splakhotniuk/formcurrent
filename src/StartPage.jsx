import React from 'react';

export const StartPage = (props) => {
    props.setIsNextPagePossible(true);
    
  return (
    <div>
      <h2 className="text-center">Виберіть спосіб отримання даних</h2>
    </div>
  )
};