'use client';
import { useState } from 'react';
import './globals.css';

export default function Page() {
  const airports = [
    "London Heathrow Airport (LHR)", "London Gatwick Airport (LGW)", "London Stansted Airport (STN)",
    "London Luton Airport (LTN)", "London City Airport (LCY)", "Birmingham Airport (BHX)",
    "Manchester Airport (MAN)", "Liverpool John Lennon Airport (LPL)", "Newcastle International Airport (NCL)",
    "East Midlands Airport (EMA)", "Bristol Airport (BRS)", "Leeds Bradford Airport (LBA)",
    "Southampton Airport & Port (SOU)", "Doncaster Sheffield Airport",
    "Teesside International Airport (MME)", "Humberside Airport (HUY)"
  ];

  const priceTable = {
    car: {
      "London Heathrow Airport (LHR)": 275, "London Gatwick Airport (LGW)": 325,
      "London Stansted Airport (STN)": 225, "London Luton Airport (LTN)": 225,
      "London City Airport (LCY)": 266, "Birmingham Airport (BHX)": 175,
      "Manchester Airport (MAN)": 160, "Liverpool John Lennon Airport (LPL)": 175,
      "Newcastle International Airport (NCL)": 175, "East Midlands Airport (EMA)": 160,
      "Bristol Airport (BRS)": 300, "Leeds Bradford Airport (LBA)": 110,
      "Southampton Airport & Port (SOU)": 325, "Doncaster Sheffield Airport": 65,
      "Teesside International Airport (MME)": 155, "Humberside Airport (HUY)": 50
    },
    minibus: {
      "London Heathrow Airport (LHR)": 420, "London Gatwick Airport (LGW)": 475,
      "London Stansted Airport (STN)": 350, "London Luton Airport (LTN)": 350,
      "London City Airport (LCY)": 414, "Birmingham Airport (BHX)": 250,
      "Manchester Airport (MAN)": 220, "Liverpool John Lennon Airport (LPL)": 250,
      "Newcastle International Airport (NCL)": 250, "East Midlands Airport (EMA)": 220,
      "Bristol Airport (BRS)": 450, "Leeds Bradford Airport (LBA)": 160,
      "Southampton Airport & Port (SOU)": 475, "Doncaster Sheffield Airport": 120,
      "Teesside International Airport (MME)": 240, "Humberside Airport (HUY)": 75
    }
  };

  const [serviceType, setServiceType] = useState('car');
  const [passengers, setPassengers] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [pickupAddress, setPickupAddress] = useState('');

  const [outAirport, setOutAirport] = useState(airports[0]);
  const [outDate, setOutDate] = useState('');
  const [outTime, setOutTime] = useState('');
  const [outFlight, setOutFlight] = useState('');

  const [returnRequired, setReturnRequired] = useState(false);

  const [retAirport, setRetAirport] = useState(airports[0]);
  const [retDate, setRetDate] = useState('');
  const [retTime, setRetTime] = useState('');
  const [retFlight, setRetFlight] = useState('');

  const [notes, setNotes] = useState('');
  const [extraPickups, setExtraPickups] = useState([{ id: 1, address: '' }]);

  const [submitted, setSubmitted] = useState(false);

  const addExtraPickup = () =>
    setExtraPickups(prev => [...prev, { id: Date.now(), address: '' }]);

  const removeExtraPickup = id =>
    setExtraPickups(prev => prev.filter(p => p.id !== id));

  const updateExtraPickup = (id, value) =>
    setExtraPickups(prev => prev.map(p => p.id === id ? { ...p, address: value } : p));

  const calculatePrice = () => {
    const base = priceTable[serviceType][outAirport] ?? 0;
    const ret = returnRequired ? (priceTable[serviceType][retAirport] ?? 0) : 0;
    return base + ret;
  };

  const submitForm = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="card-frosted fade-in">
        <div className="form-panel" style={{ maxWidth: 600, margin: 'auto' }}>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontWeight: 800, fontSize: '2rem' }}>Elite Airport Travel</h1>
            <p>Thank you <strong>{name}</strong>, your booking has been received.</p>
            <p>We will contact you shortly on {phone}.</p>
           <p style={{ fontWeight: 700, marginTop: 20 }}>
  Any bookings made with less than 72 hours notice, please call us directly.
</p>

</form>
</div>
</main>

