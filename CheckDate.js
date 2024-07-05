class CheckDate {
  static isDate(dateString) {
    const [day, month, year] = dateString.split('-').map(Number);
    const today = new Date();
    const todayDay = today.getDate();
    const todayMonth = today.getMonth() + 1; // Months are zero-indexed (0 = January, 1 = February, etc.)
    const todayYear = today.getFullYear();

    return todayDay === day && todayMonth === month && todayYear === year;
  }
}

export default CheckDate;
