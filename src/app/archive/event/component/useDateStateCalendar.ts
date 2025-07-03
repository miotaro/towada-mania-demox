'use client'
import { useState, useMemo } from "react";
import { CalendarEvent } from "./CalendarTypes";

export function useCalendar(
  events: CalendarEvent[] = [],
  initialDate = new Date()
) {
  const today = new Date();

  const [selectedDate, setSelectedDate] = useState(new Date(
    initialDate.getFullYear(),
    initialDate.getMonth(),
  ));
  const year = selectedDate.getFullYear();
  const month = selectedDate.getMonth(); // 0〜11

  // 月の最初の曜日（0=日曜〜6=土曜）
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  // 月の日数（28〜31）
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const eventsThisMonth = useMemo(() => {
    return events.filter(event => {
      return (
        event.date.getFullYear() === year &&
        event.date.getMonth() === month
      );
    });
  }, [events, year, month]);

  //今日の日付
  const isToday = (date: Date) => {
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };
  //過去日
  const isPastDate = (date: Date) => {
    return date < new Date(today.getFullYear(), today.getMonth(), today.getDate());
  };

  const goToPrevMonth = () => {
    setSelectedDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };
  const goToNextMonth = () => {
    setSelectedDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  return {
    today,
    selectedDate,
    year,
    month,
    firstDayOfMonth,
    daysInMonth,
    eventsThisMonth,
    isToday,
    isPastDate,
    goToPrevMonth,
    goToNextMonth
  };
}
