  window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("toggle").addEventListener("click", () => {
      const sidebarEl = document.getElementsByClassName("sidebar")[0];
      const containerEl = document.getElementsByClassName("container")[0];
      sidebarEl.classList.toggle("sidebar--isHidden");
      containerEl.classList.toggle("container--sidebarHidden");
  
      // No need to update the toggle button position
    });
  });
  
  const sidebar = document.querySelector('.sidebar');
  const resizer = document.querySelector('.sidebar-resizer');
  let isResizing = false;
  
  resizer.addEventListener('mousedown', (e) => {
    isResizing = true;
    e.preventDefault();
  });
  
  document.addEventListener('mousemove', (e) => {
    if (!isResizing) return;
    const minWidth = 60; // Set the minimum width of the sidebar
    const newWidth = Math.max(minWidth, e.clientX - sidebar.getBoundingClientRect().left);
    sidebar.style.width = newWidth + 'px';
  });
  
  document.addEventListener('mouseup', () => {
    isResizing = false;
  });