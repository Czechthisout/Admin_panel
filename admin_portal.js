  window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("toggle").addEventListener("click", () => {
      const sidebarEl = document.getElementsByClassName("sidebar")[0];
      const containerEl = document.getElementsByClassName("container")[0];
      sidebarEl.classList.toggle("sidebar--isHidden");
      containerEl.classList.toggle("container--sidebarHidden");
  
      // No need to update the toggle button position
    });
  });
  
  