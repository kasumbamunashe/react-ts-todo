import React from 'react'

const Spinner: React.FC = () => (
  <div className="spinner">
    <div className="loader"></div>
    <style>{`
      .spinner { display: flex; justify-content: center; margin: 20px 0; }
      .loader { border: 4px solid #f3f3f3; border-top: 4px solid #45b6fe; border-radius: 50%; width: 30px; height: 30px; animation: spin 1s linear infinite; }
      @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
    `}</style>
  </div>
)

export default Spinner
