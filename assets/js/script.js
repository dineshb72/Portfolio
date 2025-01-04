'use strict';

// Ensure the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('Portfolio loaded successfully!');

  /**
   * 🔄 Element Toggle Function
   */
  const elementToggleFunc = (elem) => {
    if (elem) elem.classList.toggle('active');
  };

  /**
   * 🪟 Sidebar Toggle
   */
  const sidebar = document.querySelector('[data-sidebar]');
  const sidebarBtn = document.querySelector('[data-sidebar-btn]');

  if (sidebar && sidebarBtn) {
    sidebarBtn.addEventListener('click', () => {
      elementToggleFunc(sidebar);
    });
  }

  /**
   * 📝 Testimonials Modal
   */
  const testimonialsItems = document.querySelectorAll('[data-testimonials-item]');
  const modalContainer = document.querySelector('[data-modal-container]');
  const modalCloseBtn = document.querySelector('[data-modal-close-btn]');
  const overlay = document.querySelector('[data-overlay]');
  const modalImg = document.querySelector('[data-modal-img]');
  const modalTitle = document.querySelector('[data-modal-title]');
  const modalText = document.querySelector('[data-modal-text]');

  const testimonialsModalFunc = () => {
    if (modalContainer && overlay) {
      modalContainer.classList.toggle('active');
      overlay.classList.toggle('active');
    }
  };

  if (testimonialsItems.length && modalContainer && modalCloseBtn && overlay) {
    testimonialsItems.forEach((item) => {
      item.addEventListener('click', () => {
        const avatar = item.querySelector('[data-testimonials-avatar]');
        const title = item.querySelector('[data-testimonials-title]');
        const text = item.querySelector('[data-testimonials-text]');

        if (avatar && title && text) {
          modalImg.src = avatar.src;
          modalImg.alt = avatar.alt;
          modalTitle.innerHTML = title.innerHTML;
          modalText.innerHTML = text.innerHTML;
          testimonialsModalFunc();
        }
      });
    });

    modalCloseBtn.addEventListener('click', testimonialsModalFunc);
    overlay.addEventListener('click', testimonialsModalFunc);
  }

  /**
   * 🔽 Custom Select Dropdown
   */
  const select = document.querySelector('[data-select]');
  const selectItems = document.querySelectorAll('[data-select-item]');
  const selectValue = document.querySelector('[data-selecct-value]');
  const filterBtn = document.querySelectorAll('[data-filter-btn]');

  const filterItems = document.querySelectorAll('[data-filter-item]');
  const filterFunc = (selectedValue) => {
    filterItems.forEach((item) => {
      if (selectedValue === 'all' || selectedValue === item.dataset.category) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  };

  let lastClickedBtn = filterBtn[0];

  if (select && selectItems.length && selectValue) {
    select.addEventListener('click', () => elementToggleFunc(select));

    selectItems.forEach((item) => {
      item.addEventListener('click', () => {
        const selectedValue = item.innerText.toLowerCase();
        selectValue.innerText = item.innerText;
        elementToggleFunc(select);
        filterFunc(selectedValue);
      });
    });
  }

  if (filterBtn.length) {
    filterBtn.forEach((btn) => {
      btn.addEventListener('click', () => {
        const selectedValue = btn.innerText.toLowerCase();
        if (selectValue) selectValue.innerText = btn.innerText;
        filterFunc(selectedValue);

        lastClickedBtn.classList.remove('active');
        btn.classList.add('active');
        lastClickedBtn = btn;
      });
    });
  }

  /**
   * 📄 Form Validation
   */
  const form = document.querySelector('[data-form]');
  const formInputs = document.querySelectorAll('[data-form-input]');
  const formBtn = document.querySelector('[data-form-btn]');

  if (form && formInputs.length && formBtn) {
    formInputs.forEach((input) => {
      input.addEventListener('input', () => {
        if (form.checkValidity()) {
          formBtn.removeAttribute('disabled');
        } else {
          formBtn.setAttribute('disabled', '');
        }
      });
    });
  }

  /**
   * 🌐 Page Navigation
   */
  const navigationLinks = document.querySelectorAll('[data-nav-link]');
  const pages = document.querySelectorAll('[data-page]');

  if (navigationLinks.length && pages.length) {
    navigationLinks.forEach((link) => {
      link.addEventListener('click', () => {
        pages.forEach((page) => page.classList.remove('active'));
        navigationLinks.forEach((nav) => nav.classList.remove('active'));

        const targetPage = link.innerText.toLowerCase();
        document.querySelector(`[data-page="${targetPage}"]`)?.classList.add('active');
        link.classList.add('active');
        window.scrollTo(0, 0);
      });
    });
  }

  /**
   * ✅ Debugging Logs
   */
  console.log('✅ Sidebar:', sidebar);
  console.log('✅ Modal Container:', modalContainer);
  console.log('✅ Custom Select:', select);
  console.log('✅ Form:', form);
  console.log('✅ Navigation Links:', navigationLinks);
});
