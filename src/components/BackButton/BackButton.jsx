import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const BackButton = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);  // Вернуться на одну страницу назад в истории браузера
  };

  return (
    <div>
      
      <Button variant="outlined" color="primary" onClick={handleBackClick} className='back-btn' sx={{
        marginBottom: 2, // Отступ сверху кнопки
        width: '100%', // Ширина кнопки на всю доступную ширину
        '@media (min-width: 600px)': {
          width: 'auto', // При ширине экрана более 600px вернуть стандартную ширину
        },
      }}>
        Назад
      </Button>
    </div>
  );
};

export default BackButton;
