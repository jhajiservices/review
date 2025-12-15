fetch("reviews.json")
  .then(res => res.json())
  .then(data => {
    const pick = arr => arr[Math.floor(Math.random() * arr.length)];

    const review = `
${pick(data.intro)} Jhaji Services for ${pick(data.service)} ${pick(data.location)}.
${pick(data.detail)} ${pick(data.ending)}
    `.trim();

    setTimeout(() => {
      document.getElementById("loader").style.display = "none";
      document.getElementById("reviewText").innerText = review;
      document.getElementById("reviewBox").style.display = "block";
    }, 2000);
  });

function copyAndGo() {
  const text = document.getElementById("reviewText").innerText;
  navigator.clipboard.writeText(text).then(() => {
    window.location.href =
      "https://g.page/r/CV0F0rtdcU-_EBE/review";
  });
}