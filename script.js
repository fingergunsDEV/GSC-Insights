// GSC Insights Dashboard Interaction Module
// File: scripts.js
// Description: Handles all interactive elements for the GSC Insights Dashboard
// Setup: Include in HTML via <script src="scripts.js"></script> after DOM loads

// Utility Functions
const toggleClass = (element, className) => {
  element.classList.toggle(className);
};

const removeClassFromAll = (elements, className) => {
  elements.forEach(el => el.classList.remove(className));
};

const showModal = (content) => {
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-content p-6">
      ${content}
      <button class="material-btn px-4 py-2 bg-primary-600 text-white mt-4" onclick="this.closest('.modal').remove()">Close</button>
    </div>
  `;
  document.body.appendChild(modal);
  setTimeout(() => toggleClass(modal, 'show'), 10);
};

// Header Interactions
function toggleNotificationDropdown() {
  const dropdown = document.getElementById('notificationDropdown');
  toggleClass(dropdown, 'show');
}

function viewAllNotifications() {
  showModal(`
    <h3 class="text-lg font-medium text-neutral-800 mb-4">All Notifications</h3>
    <p class="text-sm text-neutral-600">Full notification history will be displayed here.</p>
    <!-- Add dynamic notification list here -->
  `);
}

function toggleProfileDropdown() {
  const dropdown = document.getElementById('profileDropdown');
  toggleClass(dropdown, 'show');
}

function handleProfileAction(action) {
  const actions = {
    'My Profile': () => showModal('<p class="text-sm text-neutral-600">Profile page under construction.</p>'),
    'Settings': () => showModal('<p class="text-sm text-neutral-600">Settings page under construction.</p>'),
    'Help Center': () => window.open('https://support.example.com', '_blank'),
    'Sign Out': () => {
      // Simulate logout
      showModal('<p class="text-sm text-neutral-600">Logging out...</p>');
      setTimeout(() => window.location.href = '/login', 1000);
    }
  };
  actions[action]?.();
}

// Site Selector
function toggleSiteDropdown() {
  const dropdown = document.getElementById('siteDropdown');
  toggleClass(dropdown, 'show');
}

function selectSite(site) {
  const selectedSite = document.getElementById('selectedSite');
  selectedSite.textContent = site;
  toggleSiteDropdown();
  // Trigger data refresh
  showModal(`<p class="text-sm text-neutral-600">Loading data for ${site}...</p>`);
}

function addNewSite() {
  showModal(`
    <h3 class="text-lg font-medium text-neutral-800 mb-4">Add New Property</h3>
    <input type="text" class="w-full px-4 py-2 border border-neutral-300 rounded-lg mb-4" placeholder="Enter site URL">
    <button class="material-btn px-4 py-2 bg-primary-600 text-white">Submit</button>
  `);
}

// Date Range Selector
//function selectDateRange(range) {
//  const buttons = document.querySelectorAll('.date-range-btn');
//  removeClassFromAll(buttons, 'bg-primary-600');
 // removeClassFromAll(buttons, 'text-white');
 // buttons.forEach(btn => btn.classList.add('bg-white', 'text-neutral-700', 'border', 'border-neutral-300'));

//  const activeBtn = document.querySelector(`.date-range-btn[data-range="${range}"]`);
//  activeBtn.classList.remove('bg-white', 'text-neutral-700', 'border', 'border-neutral-300');
//  activeBtn.classList.add('bg-primary-600', 'text-white');

  // Update date inputs
//  const endDate = new Date();
//  const startDate = new Date();
//  startDate.setDate(endDate.getDate() - parseInt(range));
  
//  document.getElementById('startDate').value = startDate.toISOString().split('T')[0];
//  document.getElementById('endDate').value = endDate.toISOString().split('T')[0];
}

//function toggleDatePicker(pickerId) {
 // const calendar = document.getElementById(pickerId);
 // toggleClass(calendar, 'show');
}

//function navigateMonth(direction, calendarId) {
//  const monthYear = document.getElementById(`currentMonthYear${calendarId}`);
  //let [month, year] = monthYear.textContent.split(' ');
 // const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//  let monthIndex = months.indexOf(month);
//  let yearNum = parseInt(year);
//
//  if (direction === 'prev') {
//    monthIndex--;
  //  if (monthIndex < 0) {
  //   monthIndex = 11;
   //   yearNum--;
   // }
 // } else {
  //  monthIndex++;
  //  if (monthIndex > 11) {
  //    monthIndex = 0;
  //    yearNum++;
  //  }
//  }

//  monthYear.textContent = `${months[monthIndex]} ${yearNum}`;
//  updateCalendarDays(calendarId.toLowerCase(), monthIndex, yearNum);
//}

//function updateCalendarDays(calendarId, month, year) {
//  const daysContainer = document.getElementById(`${calendarId}Days`);
//  const daysInMonth = new Date(year, month + 1, 0).getDate();
//  const firstDay = new Date(year, month, 1).getDay();
  // daysContainer.innerHTML = '';

  // Add empty days for alignment
 // for (let i = 0; i < firstDay; i++) {
  //  daysContainer.innerHTML += '<div></div>';
 // }

  // Add days
 // for (let i = 1; i <= daysInMonth; i++) {
   // const today = new Date();
//    const isToday = i === today.getDate() && month === today.getMonth() && year === today.getFullYear();
//    const isSelected = false; // Implement selection logic
 //   daysContainer.innerHTML += `
 //     <div class="calendar-day ${isToday ? 'today' : ''} ${isSelected ? 'selected' : ''}" data-day="${i}">
 //       ${i}
  //    </div>
//    `;
//  }
//}

// function selectDay(day, calendarId) {
 // const input = document.getElementById(calendarId.replace('Calendar', ''));
//  const monthYear = document.getElementById(`currentMonthYear${calendarId}`).textContent;
//  const [month, year] = monthYear.split(' ');
//  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//  const monthIndex = months.indexOf(month).toString().padStart(2, '0');
//  input.value = `${year}-${monthIndex}-${day.padStart(2, '0')}`;
//  toggleDatePicker(calendarId);
//}

//function applyDateRange() {
//  const startDate = document.getElementById('startDate').value;
 // const endDate = document.getElementById('endDate').value;
//  showModal(`<p class="text-sm text-neutral-600">Applying date range: ${startDate} to ${endDate}...</p>`);
//}

// Tabs
function switchTab(tabId) {
  const tabs = document.querySelectorAll('.tab-btn');
  const contents = document.querySelectorAll('.tab-content');

  removeClassFromAll(tabs, 'tab-active');
  removeClassFromAll(contents, 'active');

  const activeTab = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
  const activeContent = document.getElementById(tabId);

  activeTab.classList.add('tab-active');
  activeContent.classList.add('active');
}

// Performance Tab
function changeChartMetric(metric) {
  const chartContainer = document.getElementById('performanceChart');
  // Update chart based on metric
  chartContainer.innerHTML = `<p class="text-sm text-neutral-600">Loading ${metric} chart...</p>`;
  // Implement actual chart update logic
}

function viewDeviceDetails() {
  showModal(`
    <h3 class="text-lg font-medium text-neutral-800 mb-4">Device Breakdown Details</h3>
    <p class="text-sm text-neutral-600">Detailed device performance data will be displayed here.</p>
  `);
}

function viewAllPages() {
  showModal(`
    <h3 class="text-lg font-medium text-neutral-800 mb-4">All Pages</h3>
    <p class="text-sm text-neutral-600">Full page performance data will be displayed here.</p>
  `);
}

function viewAllKeywords() {
  showModal(`
    <h3 class="text-lg font-medium text-neutral-800 mb-4">All Keywords</h3>
    <p class="text-sm text-neutral-600">Full keyword performance data will be displayed here.</p>
  `);
}

// Opportunities Tab
function sortOpportunities(criteria) {
  const list = document.getElementById('opportunitiesList');
  list.innerHTML = `<p class="text-sm text-neutral-600">Sorting by ${criteria}...</p>`;
  // Implement sorting logic
}

function viewAffectedPages(issue) {
  showModal(`
    <h3 class="text-lg font-medium text-neutral-800 mb-4">Affected Pages: ${issue}</h3>
    <p class="text-sm text-neutral-600">List of pages affected by ${issue} will be displayed here.</p>
  `);
}

function fixNow(issue) {
  showModal(`
    <h3 class="text-lg font-medium text-neutral-800 mb-4">Fix: ${issue}</h3>
    <p class="text-sm text-neutral-600">Initiating fix for ${issue}...</p>
  `);
}

function viewDetails(issue) {
  showModal(`
    <h3 class="text-lg font-medium text-neutral-800 mb-4">Details: ${issue}</h3>
    <p class="text-sm text-neutral-600">Detailed analysis for ${issue} will be displayed here.</p>
  `);
}

function viewIssues(issue) {
  showModal(`
    <h3 class="text-lg font-medium text-neutral-800 mb-4">Issues: ${issue}</h3>
    <p class="text-sm text-neutral-600">List of issues for ${issue} will be displayed here.</p>
  `);
}

function viewLinkMap(issue) {
  showModal(`
    <h3 class="text-lg font-medium text-neutral-800 mb-4">Link Map: ${issue}</h3>
    <p class="text-sm text-neutral-600">Internal link structure visualization will be displayed here.</p>
  `);
}

function getSuggestions(issue) {
  showModal(`
    <h3 class="text-lg font-medium text-neutral-800 mb-4">Suggestions: ${issue}</h3>
    <p class="text-sm text-neutral-600">Link improvement suggestions for ${issue} will be displayed here.</p>
  `);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  // Header
  document.getElementById('notificationBtn').addEventListener('click', toggleNotificationDropdown);
  document.querySelector('.dropdown-content button').addEventListener('click', viewAllNotifications);
  document.getElementById('profileBtn').addEventListener('click', toggleProfileDropdown);
  document.querySelectorAll('#profileDropdown a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      handleProfileAction(link.textContent.trim());
    });
  });

  // Site Selector
  document.getElementById('siteSelector').addEventListener('click', toggleSiteDropdown);
  document.querySelectorAll('#siteDropdown li[data-site]').forEach(item => {
    item.addEventListener('click', () => selectSite(item.dataset.site));
  });
  document.getElementById('addNewSite').addEventListener('click', addNewSite);


  // Tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  // Performance
  document.getElementById('chartMetricSelector').addEventListener('change', (e) => changeChartMetric(e.target.value));
  document.getElementById('deviceDetailsBtn').addEventListener('click', viewDeviceDetails);
  document.getElementById('viewAllPagesBtn').addEventListener('click', viewAllPages);
  document.getElementById('viewAllKeywordsBtn').addEventListener('click', viewAllKeywords);

  // Opportunities
  document.getElementById('opportunitySortSelect').addEventListener('change', (e) => sortOpportunities(e.target.value));
  document.querySelectorAll('.view-affected-pages').forEach(btn => {
    btn.addEventListener('click', () => viewAffectedPages(btn.dataset.issue));
  });
  document.querySelectorAll('.fix-now-btn').forEach(btn => {
    btn.addEventListener('click', () => fixNow(btn.dataset.issue));
  });
  document.querySelectorAll('.view-details-btn').forEach(btn => {
    btn.addEventListener('click', () => viewDetails(btn.dataset.issue));
  });
  document.querySelectorAll('.view-issues-btn').forEach(btn => {
    btn.addEventListener('click', () => viewIssues(btn.dataset.issue));
  });
  document.querySelectorAll('.view-link-map-btn').forEach(btn => {
    btn.addEventListener('click', () => viewLinkMap(btn.dataset.issue));
  });
  document.querySelectorAll('.get-suggestions-btn').forEach(btn => {
    btn.addEventListener('click', () => getSuggestions(btn.dataset.issue));
  });



// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown-content.show').forEach(d => d.classList.remove('show'));
  }
  if (!e.target.closest('.date-picker')) {
    document.querySelectorAll('.date-picker-calendar.show').forEach(c => c.classList.remove('show'));
  }
});
