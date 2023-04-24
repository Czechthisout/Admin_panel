// window.addEventListener("DOMContentLoaded", () => {
//     document.getElementById("toggle").addEventListener("click", () => {
//       const sidebarEl = document.getElementsByClassName("sidebar")[0];
//       const containerEl = document.getElementsByClassName("container")[0];
//       sidebarEl.classList.toggle("sidebar--isHidden");
//       containerEl.classList.toggle("container--sidebarHidden");
  
//       Update the toggle button position
//       const toggleButtonEl = document.getElementById("toggle");
//       toggleButtonEl.style.left = containerEl.classList.contains("container--sidebarHidden")
//         ? "0"
//         : "12rem";
//     });
//   });
  
  // window.addEventListener("DOMContentLoaded", () => {
  //   document.getElementById("toggle").addEventListener("click", () => {
  //     const sidebarEl = document.getElementsByClassName("sidebar")[0];
  //     const containerEl = document.getElementsByClassName("container")[0];
  //     sidebarEl.classList.toggle("sidebar--isHidden");
  //     containerEl.classList.toggle("container--sidebarHidden");
  
  //     // Update the toggle button position
  //     const toggleButtonEl = document.getElementById("toggle");
  //     toggleButtonEl.style.left = containerEl.classList.contains("container--sidebarHidden")
  //       ? "0"
  //       : "-2.2rem";
  //   });
  // });

  window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("toggle").addEventListener("click", () => {
      const sidebarEl = document.getElementsByClassName("sidebar")[0];
      const containerEl = document.getElementsByClassName("container")[0];
      sidebarEl.classList.toggle("sidebar--isHidden");
      containerEl.classList.toggle("container--sidebarHidden");
  
      // No need to update the toggle button position
    });
  });
  
  