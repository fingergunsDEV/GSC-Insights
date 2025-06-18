document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".dropdown").forEach(dropdown => {
    const btn = dropdown.querySelector("button");
    const content = dropdown.querySelector(".dropdown-content");
    btn?.addEventListener("click", e => {
      e.stopPropagation();
      content?.classList.toggle("show");
    });
  });

  window.addEventListener("click", () => {
    document.querySelectorAll(".dropdown-content").forEach(el => el.classList.remove("show"));
  });

  document.querySelectorAll(".tab-btn").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("tab-active"));
      tab.classList.add("tab-active");
      const tabId = tab.dataset.tab;
      document.querySelectorAll(".tab-content").forEach(tc => {
        tc.classList.remove("active");
        if (tc.id === tabId) tc.classList.add("active");
      });
    });
  });

  function showModal(title, content) {
    const modal = document.getElementById("genericModal");
    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalBody").textContent = content;
    modal.classList.add("show");
  }

  function closeModal() {
    document.getElementById("genericModal").classList.remove("show");
  }

  document.getElementById("closeModal").addEventListener("click", closeModal);

  document.getElementById("viewAllPagesBtn")?.addEventListener("click", () => {
    showModal("All Pages", "Displaying all top performing pages...");
  });

  document.getElementById("viewAllKeywordsBtn")?.addEventListener("click", () => {
    showModal("All Keywords", "Displaying all top keywords...");
  });

  document.querySelectorAll("#profileDropdown a").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const action = e.currentTarget.textContent.trim();
      showModal("Profile Option", `You selected: ${action}`);
    });
  });

  document.querySelectorAll(".fix-now-btn, .view-details-btn, .view-issues-btn, .get-suggestions-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const issue = btn.getAttribute("data-issue");
      showModal("Issue Detail", `Details for: ${issue}`);
    });
  });

  document.querySelectorAll(".has-tooltip").forEach(el => {
    el.setAttribute("tabindex", "0");
    el.setAttribute("role", "tooltip");
  });
});            
                  
