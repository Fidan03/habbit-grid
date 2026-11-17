import { useEffect, useState } from "react"

const DateComponent = () => {
    const[date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 60000);

        return () => clearInterval(timer);
    }, []);

    const formattedDate = date.toLocaleDateString('en-GB',{
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    }).replace(',', '');

  return (
    <>
        <p style={{color: '#5B6170'}}>{formattedDate}</p>
    </>
  )
}

export default DateComponent