import React, { useState } from 'react'
import { format } from 'date-fns'
import { Calendar, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom';

export default function DatePicker() {
  const [selectedDate, setSelectedDate] = useState(format(new Date(new Date().setMonth(new Date().getMonth() + 1)), 'yyyy-MM-dd')); // Set default to today + 1 month
  const navigate = useNavigate();

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleContinue = () => {
    navigate('/categories'); // Redirect to categories page using React Router
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-xs bg-white rounded-lg shadow-lg overflow-hidden">
        <header className="bg-[#004aad] text-white p-4 flex items-center justify-between">
          <h1 className="text-xl font-bold">Select Date</h1>
          <Calendar className="h-6 w-6" />
        </header>
        <main className="p-6">
            <input
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
              className="w-full border-2 border-[#004aad] rounded-md text-lg text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#004aad] focus:border-transparent"
              style={{
                WebkitAppearance: 'none',
                MozAppearance: 'none',
                appearance: 'none',
                boxSizing: 'border-box',
                width: '100%',
                padding: '0.5rem',
              }}
            />
            <div className="flex justify-end">
              {selectedDate && ( // Check if a date is selected
                <button
                onClick={handleContinue} // Updated to use local function
                className="mt-4 bg-[#004aad] text-white rounded-md px-4 py-2 flex items-center" 
              >
                Continue <ArrowRight className="ml-2" />
              </button>
            )}
            </div>
        </main>
      </div>
    </div>
  );
}