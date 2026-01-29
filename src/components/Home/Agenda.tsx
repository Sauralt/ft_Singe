"use client";

import { useMemo, useState } from "react";

const weekDays = ["Lu", "Ma", "Me", "Je", "Ve", "Sa", "Di"];

const formatMonth = (date: Date) =>
  new Intl.DateTimeFormat("fr-FR", { month: "long" })
    .format(date)
    .replace(/^./, (char) => char.toUpperCase());

export default function Agenda() {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );

  const days = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const leadingEmpty = (firstDay + 6) % 7;
    const totalDays = new Date(year, month + 1, 0).getDate();

    return Array.from({ length: leadingEmpty + totalDays }, (_, index) =>
      index < leadingEmpty ? null : index - leadingEmpty + 1
    );
  }, [currentDate]);

  const monthLabel = formatMonth(currentDate);
  const yearLabel = currentDate.getFullYear();
  const isToday = (day: number | null) =>
    day !== null &&
    day === today.getDate() &&
    currentDate.getMonth() === today.getMonth() &&
    currentDate.getFullYear() === today.getFullYear();

  const goToPreviousMonth = () =>
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1)
    );
  const goToNextMonth = () =>
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1)
    );

  return (
    <div className="rounded-2xl bg-white/5 p-6">
      <div className="flex items-center justify-between">
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-200 transition hover:bg-white/10"
          onClick={goToPreviousMonth}
          aria-label="Mois précédent"
        >
          ←
        </button>
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-white/10 px-4 py-2 text-lg font-semibold">
            {monthLabel}
          </div>
          <div className="rounded-xl bg-white/10 px-4 py-2 text-lg font-semibold">
            {yearLabel}
          </div>
        </div>
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-slate-200 transition hover:bg-white/10"
          onClick={goToNextMonth}
          aria-label="Mois suivant"
        >
          →
        </button>
      </div>

      <div className="mt-6 grid grid-cols-7 gap-3 text-center text-xs uppercase tracking-widest text-slate-400">
        {weekDays.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-7 gap-3">
        {days.map((day, index) => {
          const isSelected = isToday(day);
          const isMuted = day === null;

          return (
            <div
              key={`${day ?? "empty"}-${index}`}
              className={
                "flex h-12 items-center justify-center rounded-xl text-sm font-semibold transition " +
                (isMuted
                  ? "text-slate-600"
                  : isSelected
                    ? "bg-blue-600 text-white shadow-[0_10px_25px_-10px_rgba(37,99,235,0.9)]"
                    : "bg-white/5 text-slate-200 hover:bg-white/10")
              }
            >
              {day ?? " "}
            </div>
          );
        })}
      </div>
    </div>
  );
}
