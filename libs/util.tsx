//- libs/util.tsx

export const locale = "en-US";

export const ScrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export const DateFormated = (date: string): string => {
  const formatted = new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return formatted;
};

export const NumberFormated = (number: number): string => {
  return new Intl.NumberFormat(locale).format(number);
};

export const CalculateAge = (dateOfBirthString: string): number => {
  const birthDate = new Date(dateOfBirthString);
  const today = new Date();

  const birthYear = birthDate.getFullYear();
  const birthMonth = birthDate.getMonth();
  const birthDay = birthDate.getDate();

  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const currentDay = today.getDate();

  let age = currentYear - birthYear;

  // Adjust if the birthday hasn't happened yet this year
  if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
    age--;
  }

  return age;
};
