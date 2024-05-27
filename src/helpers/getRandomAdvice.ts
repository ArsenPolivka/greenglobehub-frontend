import { advices } from "@/utils/constants";

export function getRandomAdvice(): string {
  const today = new Date().toISOString().split('T')[0];
  const storedDate = localStorage.getItem('adviceDate');
  let advice = localStorage.getItem('dailyAdvice');

  if (storedDate !== today) {
    advice = advices[Math.floor(Math.random() * advices.length)];
    localStorage.setItem('adviceDate', today);
    localStorage.setItem('dailyAdvice', advice);
  }

  return advice || advices[Math.floor(Math.random() * advices.length)];
}
