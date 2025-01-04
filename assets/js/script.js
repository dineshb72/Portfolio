'use strict';

// Ensure the DOM is fully loaded before executing scripts
document.addEventListener('DOMContentLoaded', function () {

  // 🔄 Element Toggle Function
  const elementToggleFunc = function (elem) {
    if (elem) elem.classList.toggle('active');
  };

  // 🪟 Sidebar Toggle
  const sidebar = document.querySelector('[data-sidebar]');
  const sidebarBtn = document.querySelector('[data-sidebar-btn]');

  if (sidebar && sidebarBtn) {
    sidebarBtn.addEventListener('click', function () {
      elementToggleFunc(sidebar);
    });
  }

  // 📝 Testimonials Modal
  const testimonialsItem = document.querySelectorAll('[data-testimonials-item]');
  const modalContainer = document.querySelector('[data-modal-container]');
  const modalCloseBtn = document.querySelector('[data-modal-close-btn]');
  const overlay = document.querySelector('[data-overlay]');

  const modalImg = document.querySelector('[data-modal-img]');
  const modalTitle = document.querySelector('[data-modal-title]');
  const modalText = document.querySelector('[data-modal-text]');

  const testimonialsModalFunc = function () {
    if (modalContainer && overlay) {
      modalContainer.classList.toggle('active');
      overlay.classList.toggle('active');
    }
  };

  if (testimonialsItem.length > 0 && modalContainer && modalCloseBtn && overlay) {
    for (let i = 0; i < testimonialsItem.length; i++) {
      testimonialsItem[i].addEventListener('click', function () {
        const avatar = this.querySelector('[data-testimonials-avatar]');
        const title = this.querySelector('[data-testimonials-title]');
        const text = this.querySelector('[data-testimonials-text]');

        if (avatar && title && text) {
          modalImg.src = avatar.src;
          modalImg.alt = avatar.alt;
          modalTitle.innerHTML = title.innerHTML;
          modalText.innerHTML = text.innerHTML;

          testimonialsModalFunc();
        }
      });
    }

    modalCloseBtn.addEventListener('click', testimonialsModalFunc);
    overlay.addEventListener('click', testimonialsModalFunc);
  }

  // 🔽 Custom Select Dropdown
  const select = document.querySelector('[data-select]');
  const selectItems = document.querySelectorAll('[data-select-item]');
  const selectValue = document.querySelector('[data-selecct-value]');
  const filterBtn = document.querySelectorAll('[data-filter-btn]');

  if (select && selectItems.length > 0 && selectValue) {
    select.addEventListener('click', function () {
      elementToggleFunc(this);
    });

    for (let i = 0; i < selectItems.length; i++) {
      selectItems[i].addEventListener('click', function () {
        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        elementToggleFunc(select);
        filterFunc(selectedValue);
      });
    }
  }

  // 🛠️ Filter Functionality
  const filterItems = document.querySelectorAll('[data-filter-item]');
  const filterFunc = function (selectedValue) {
    for (let i = 0; i < filterItems.length; i++) {
      if (selectedValue === 'all' || selectedValue === filterItems[i].dataset.category) {
        filterItems[i].classList.add('active');
      } else {
        filterItems[i].classList.remove('active');
      }
    }
  };

  let lastClickedBtn = filterBtn.length > 0 ? filterBtn[0] : null;

  if (filterBtn.length > 0) {
    for (let i = 0; i < filterBtn.length; i++) {
      filterBtn[i].addEventListener('click', function () {
        let selectedValue = this.innerText.toLowerCase();
        if (selectValue) selectValue.innerText = this.innerText;
        filterFunc(selectedValue);

        if (lastClickedBtn) lastClickedBtn.classList.remove('active');
        this.classList.add('active');
        lastClickedBtn = this;
      });
    }
  }

  // 📄 Form Validation
  const form = document.querySelector('[data-form]');
  const formInputs = document.querySelectorAll('[data-form-input]');
  const formBtn = document.querySelector('[data-form-btn]');

  if (form && formInputs.length > 0 && formBtn) {
    for (let i = 0; i < formInputs.length; i++) {
      formInputs[i].addEventListener('input', function () {
        if (form.checkValidity()) {
          formBtn.removeAttribute('disabled');
        } else {
          formBtn.setAttribute('disabled', '');
        }
      });
    }
  }

  // 🌐 Page Navigation
  const navigationLinks = document.querySelectorAll('[data-nav-link]');
  const pages = document.querySelectorAll('[data-page]');

  if (navigationLinks.length > 0 && pages.length > 0) {
    for (let i = 0; i < navigationLinks.length; i++) {
      navigationLinks[i].addEventListener('click', function () {
        for (let j = 0; j < pages.length; j++) {
          if (this.innerHTML.toLowerCase() === pages[j].dataset.page) {
            pages[j].classList.add('active');
            navigationLinks[j].classList.add('active');
            window.scrollTo(0, 0);
          } else {
            pages[j].classList.remove('active');
            navigationLinks[j].classList.remove('active');
          }
        }
      });
    }
  }

  // ✅ Debugging Logs (Remove in Production)
  console.log('Sidebar:', sidebar);
  console.log('Modal Container:', modalContainer);
  console.log('Custom Select:', select);
  console.log('Form:', form);
  console.log('Navigation Links:', navigationLinks);

});
