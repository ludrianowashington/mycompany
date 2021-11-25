import { viewContainer } from './modules/views.js';
import updateTotalCash from './modules/updateTotal.js';
import handleClick from './modules/handleClick.js';

// Initial function
function init() {
  handleClick();
  viewContainer();
  changeValue();
}

// Set Initial value
function changeValue() {
  let value = '100,00'

  updateTotalCash(value);
}

function handleClicker(ev) {
  const main = document.querySelector('.main')
  console.log(ev.target)
  // if (main) { }

  if (menu.includes(ev.target.id) === "") {
    if (main.hasChildNodes() && main.childNodes[0].id !== ev.srcElement.id) {
      main.removeChild(main.childNodes[0]);
      console.log(main.childNodes[0].id);
      viewContainer();
      return;
    }
    // console.log(ev.target);
    console.log(menu);
  }

  const menuItems = {
    purchasing: 'purchasing',
    manufacturing: 'manufacturing',
    inventory: 'inventory',
    sales: 'sales',
    automation: 'automation',
    data: 'data',
    default: ''
    // undefined: viewContainer(text)
  }
  console.log(menuItems[ev.target.id])
  // return menuItems[ev.target.id]
}

// Start script
window.onload = init()