function calculateWindChill(T, V, unit = "C") {
  if (
    typeof T !== "number" ||
    typeof V !== "number" ||
    V < 0 ||
    (unit !== "F" && unit !== "C")
  ) {
    return "N/A";
  }

  if (unit === "F") {
    return (
      35.74 +
      0.6215 * T -
      35.75 * Math.pow(V, 0.16) +
      0.4275 * T * Math.pow(V, 0.16)
    );
  }

  return (
    13.12 +
    0.6215 * ((T * 9) / 5 + 32) -
    11.37 * Math.pow(V, 0.16) +
    0.3965 * ((T * 9) / 5 + 32) * Math.pow(V, 0.16)
  );
}
const windChill = calculateWindChill(26, 12).toFixed(1);

const windChillElement = document.querySelector('#windChill');
windChillElement.innerHTML = `${windChill} °C`;