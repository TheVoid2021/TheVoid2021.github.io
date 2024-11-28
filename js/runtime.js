function createDateTime() {
  const now = new Date();
  const startDate = new Date("11/11/2024 00:00:00");
  const endDate = new Date("11/11/2024 00:00:00");

  const totalSeconds = (now - startDate) / 1000;
  const totalDays = Math.floor(totalSeconds / (60 * 60 * 24));
  const totalHours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const totalMinutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const totalSecondsLeft = Math.floor(totalSeconds % 60);

  const travelerDistance = 234e8 + (now - startDate) / 1000 * 17;
  const astronomicalUnits = (travelerDistance / 1496e5).toFixed(6);

  const isWorkingHours = totalHours >= 9 && totalHours < 18;

  const htmlContent = `
      ${isWorkingHours ? `<img class='boardsign' src='/source/img/1.jpg' title='什么时候能够实现财富自由啊！'>` : `<img class='boardsign' src='/source/img/1.jpg' title='下班了就该开开心心地玩耍~'>`}
      <br>
      <div style="font-size:13px;font-weight:bold">
          本站居然运行了 ${totalDays} 天 ${totalHours.toString().padStart(2, '0')} 小时 ${totalMinutes.toString().padStart(2, '0')} 分 ${totalSecondsLeft.toString().padStart(2, '0')} 秒 
          <i id="heartbeat" class='fas fa-heartbeat'></i> 
          <br>
          旅行者 1 号当前距离地球 ${travelerDistance} 千米，约为 ${astronomicalUnits} 个天文单位 🚀
      </div>
  `;

  if (document.getElementById("workboard")) {
    document.getElementById("workboard").innerHTML = htmlContent;
  }
}

setInterval(createDateTime, 1000);
