import React, { useState, useEffect } from 'react'

function DateTimeDisplay() {

    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000); // Atualiza a cada segundo

        return () => clearInterval(interval); // Limpa ao desmontar
    }, []);

    const formattedDateTime = currentDateTime.toLocaleString("pt-br");

    return (
        <div className="flex flex-col items-center">
          <p className="sm:text-sm xl:text-xl">{formattedDateTime}</p>
        </div>
      );

}
export default DateTimeDisplay;
