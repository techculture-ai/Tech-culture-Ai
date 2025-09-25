import React, { useState, useRef, useEffect } from "react";
import {
  IoCalendarOutline,
  IoTimeOutline,
  IoChevronDown,
  IoChevronBack,
  IoChevronForward,
} from "react-icons/io5";

const ModernDateTimePicker = ({ value, onChange, minDateTime, onFocus }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("date"); // 'date' or 'time'
  const [tempDate, setTempDate] = useState("");
  const [tempTime, setTempTime] = useState("");
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const dropdownRef = useRef(null);

  // Initialize temp values from props
  useEffect(() => {
    if (value) {
      const date = new Date(value);
      setTempDate(date.toISOString().split("T")[0]);
      setTempTime(date.toTimeString().slice(0, 5));
    }
  }, [value]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Generate time options
  const generateTimeOptions = () => {
    const options = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const timeString = `${hour.toString().padStart(2, "0")}:${minute
          .toString()
          .padStart(2, "0")}`;
        options.push(timeString);
      }
    }
    return options;
  };

  // Generate calendar days
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    const days = [];
    const today = new Date();
    const minDate = minDateTime ? new Date(minDateTime) : null;

    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);

      const isCurrentMonth = date.getMonth() === month;
      const isToday = date.toDateString() === today.toDateString();
      const isSelected = tempDate === date.toISOString().split("T")[0];
      const isDisabled = minDate && date < minDate.setHours(0, 0, 0, 0);

      days.push({
        date,
        day: date.getDate(),
        isCurrentMonth,
        isToday,
        isSelected,
        isDisabled,
      });
    }
    return days;
  };

  const handleDateSelect = (date) => {
    const dateString = date.toISOString().split("T")[0];
    setTempDate(dateString);
    setActiveTab("time");
  };

  const handleTimeSelect = (time) => {
    setTempTime(time);
    if (tempDate) {
      const dateTimeString = `${tempDate}T${time}`;
      onChange({ target: { name: "demoDateTime", value: dateTimeString } });
      setIsOpen(false);
    }
  };

  const handleApply = () => {
    if (tempDate && tempTime) {
      const dateTimeString = `${tempDate}T${tempTime}`;
      onChange({ target: { name: "demoDateTime", value: dateTimeString } });
    }
    setIsOpen(false);
  };

  const handleClear = () => {
    setTempDate("");
    setTempTime("");
    onChange({ target: { name: "demoDateTime", value: "" } });
    setIsOpen(false);
  };

  const handleInputClick = () => {
    setIsOpen(!isOpen);
    if (onFocus && !isOpen) {
      onFocus();
    }
  };

  const formatDisplayValue = () => {
    if (!value) return "";
    const date = new Date(value);
    return date.toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Input Field */}
      <div
        onClick={handleInputClick}
        className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-800/50 focus:ring-2 focus:ring-blue-500 outline-none text-white placeholder-gray-400 cursor-pointer hover:border-gray-600 transition-all duration-200 flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <IoCalendarOutline className="text-orange-500 text-lg" />
          <span className={value ? "text-white" : "text-gray-400"}>
            {value ? formatDisplayValue() : "Select preferred date & time"}
          </span>
        </div>
        <IoChevronDown
          className={`text-gray-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div
          className="absolute top-full left-0 mt-2 w-full bg-gray-800 border border-gray-700 rounded-xl shadow-2xl z-50"
          style={{ overflow: "hidden" }}
        >
          {/* Header Tabs */}
          <div className="flex border-b border-gray-700">
            <button
              onClick={() => setActiveTab("date")}
              className={`flex-1 py-3 px-4 text-sm font-medium transition-colors duration-200 ${
                activeTab === "date"
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:text-white hover:bg-gray-700"
              }`}
            >
              <IoCalendarOutline className="inline mr-2" />
              Date
            </button>
            <button
              onClick={() => setActiveTab("time")}
              className={`flex-1 py-3 px-4 text-sm font-medium transition-colors duration-200 ${
                activeTab === "time"
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:text-white hover:bg-gray-700"
              }`}
            >
              <IoTimeOutline className="inline mr-2" />
              Time
            </button>
          </div>

          {/* Date Picker */}
          {activeTab === "date" && (
            <div className="p-4">
              {/* Month Navigation */}
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={() =>
                    setCurrentMonth(
                      new Date(
                        currentMonth.getFullYear(),
                        currentMonth.getMonth() - 1
                      )
                    )
                  }
                  className="p-2 hover:bg-gray-700 rounded-lg text-gray-300 hover:text-white transition-colors"
                >
                  <IoChevronBack />
                </button>
                <h3 className="text-white font-medium">
                  {monthNames[currentMonth.getMonth()]}{" "}
                  {currentMonth.getFullYear()}
                </h3>
                <button
                  onClick={() =>
                    setCurrentMonth(
                      new Date(
                        currentMonth.getFullYear(),
                        currentMonth.getMonth() + 1
                      )
                    )
                  }
                  className="p-2 hover:bg-gray-700 rounded-lg text-gray-300 hover:text-white transition-colors"
                >
                  <IoChevronForward />
                </button>
              </div>

              {/* Week Days */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {weekDays.map((day) => (
                  <div
                    key={day}
                    className="text-center text-xs text-gray-400 py-2"
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Days */}
              <div className="grid grid-cols-7 gap-1">
                {generateCalendarDays().map((dayObj, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      !dayObj.isDisabled && handleDateSelect(dayObj.date)
                    }
                    disabled={dayObj.isDisabled}
                    className={`
                      w-8 h-8 text-sm rounded-lg transition-all duration-200 flex items-center justify-center
                      ${
                        !dayObj.isCurrentMonth
                          ? "text-gray-600"
                          : dayObj.isDisabled
                          ? "text-gray-600 cursor-not-allowed"
                          : dayObj.isSelected
                          ? "bg-blue-600 text-white font-bold"
                          : dayObj.isToday
                          ? "bg-orange-500 text-white font-bold"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white"
                      }
                    `}
                  >
                    {dayObj.day}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Time Picker */}
          {activeTab === "time" && (
            <div
              className="p-4 max-h-60"
              style={{
                overflowY: "auto",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
              css={`
                &::-webkit-scrollbar {
                  display: none;
                }
              `}
            >
              <div className="grid grid-cols-4 gap-2">
                {generateTimeOptions().map((time) => (
                  <button
                    key={time}
                    onClick={() => handleTimeSelect(time)}
                    className={`
                      py-2 px-3 text-sm rounded-lg transition-all duration-200
                      ${
                        tempTime === time
                          ? "bg-blue-600 text-white font-bold"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white"
                      }
                    `}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Footer Actions */}
          <div className="flex justify-between items-center p-3 border-t border-gray-700 bg-gray-900/50">
            <button
              onClick={handleClear}
              className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              Clear
            </button>
            <div className="flex gap-2">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleApply}
                disabled={!tempDate || !tempTime}
                className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModernDateTimePicker;
