
  // Dark mode toggle (already ache)
  const toggle = document.getElementById("theme-toggle");
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
  });

  // Back to Top functionality
  const backToTopBtn = document.getElementById("backToTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });



  // Previous JS (Dark mode, back to top) এখানে থাকবে

  // Department info data
  const deptData = {
    "CSE": {
      head: "Dr. M. A. Matin",
      seats: "120",
      research: "AI, ML, Cybersecurity"
    },
    "EEE": {
      head: "Dr. Z. H. Khan",
      seats: "120",
      research: "Power Systems, IoT"
    },
    "ME": {
      head: "Dr. A. H. Mahmud",
      seats: "120",
      research: "Thermodynamics, Robotics"
    },
    "CE": {
      head: "Dr. R. A. Sarker",
      seats: "120",
      research: "Structural, Environmental"
    },
    "IPE": {
      head: "Dr. J. M. Islam",
      seats: "60",
      research: "Manufacturing, Optimization"
    },
    "BECM": {
      head: "Dr. A. M. Rahman",
      seats: "60",
      research: "Construction Management"
    }
  };

  // Modal elements
  const modal = document.getElementById("deptModal");
  const closeBtn = document.getElementById("closeModal");

  // Set content
  function openModal(dept) {
    document.getElementById("modalTitle").textContent = dept + " Department";
    document.getElementById("modalHead").textContent = deptData[dept].head;
    document.getElementById("modalSeats").textContent = deptData[dept].seats;
    document.getElementById("modalResearch").textContent = deptData[dept].research;
    modal.style.display = "block";
  }

  // Add click event to each card
  document.querySelectorAll(".department-card").forEach(card => {
    card.addEventListener("click", () => {
      const dept = card.querySelector("h3").textContent.trim();
      openModal(dept);
    });
  });

  // Close button event
  closeBtn.onclick = () => modal.style.display = "none";

  // Outside click close
  window.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
  };
// hamburger toggle
const hamburger =
document.getElementById("hamburger");
const navMenu =
document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});