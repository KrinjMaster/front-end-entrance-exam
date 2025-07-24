import "../css/style.css";
import javascriptLogo from "../javascript.svg";
import viteLogo from "/vite.svg";
import { buttonHandler } from "./buttonhandler";

document.querySelector("#app").innerHTML = `
  <button class="poppins-medium save-button wave">Save</button>
  <section class="resume-content">
    <div class="resume-section image-container">
      <img class="resume-img resume-section" alt="profile photo" src="/random-guy-lmao.webp"/>
    </div>
    <div class="resume-introduction resume-section">
      <div contenteditable="true" class="poppins-medium resume-textarea resume-greeting-input">Hello 👋🏻 I’m</div>
      <div class="resume-introduction-main">
        <div contenteditable="true" class="poppins-semibold resume-textarea resume-name-input">Graham Hunt</div>
        <div contenteditable="true" class="poppins-medium resume-textarea resume-role-input" >Brand/Logo Designer</div>
      </div>
    </div>
    <div class="resume-languages resume-section">
      <div contenteditable="true" class="poppins-medium resume-textarea resume-title">Languages</div>
      <div class="resume-languages-list">
        <ul class="resume-languages-left">
          <li>
            <div contenteditable="true" class="poppins-medium resume-textarea resume-language-name">English</div>
          </li>
          <li>
            <div contenteditable="true" class="poppins-medium resume-textarea resume-language-name">Spanish</div>
          </li>
          <li>
            <div contenteditable="true" class="poppins-medium resume-textarea resume-language-name">French</div>
          </li>
        </ul>
        <ul class="resume-languages-right">
          <li class="resume-bar resume-bar-1">
            <span />
          </li>
          <li class="resume-bar resume-bar-2">
            <span />
          </li>
          <li class="resume-bar resume-bar-3">
            <span />
          </li>
        </ul>
      </div>
    </div>
    <div class="resume-section resume-education">
      <div contenteditable="true" class="poppins-medium resume-textarea resume-title">Education</div>
      <ul class="resume-education-list">
        <li class="resume-education-item-1">
          <div class="resume-education-item-1-upper">
            <div contenteditable="true" class="poppins-medium resume-textarea resume-education-item-title">2024</div>
            <svg width="11px" height="9.39px" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.75 0.807373C1.99375 0.807373 1.32 1.12388 0.81125 1.61929C0.31625 2.1147 0 2.78901 0 3.55965C0 4.31653 0.31625 4.99083 0.81125 5.5L5.5 10.1926L10.1887 5.5C10.6838 5.0046 11 4.33029 11 3.55965C11 2.80277 10.6838 2.12847 10.1887 1.61929C9.69375 1.12388 9.02 0.807373 8.25 0.807373C7.49375 0.807373 6.82 1.12388 6.31125 1.61929C5.81625 2.1147 5.5 2.78901 5.5 3.55965C5.5 2.80277 5.18375 2.12847 4.68875 1.61929C4.19375 1.12388 3.52 0.807373 2.75 0.807373Z" fill="#F6ED1E"/>
            </svg>
          </div>
          <div class="resume-education-item-middle">
            <div contenteditable="true" class="poppins-medium resume-textarea resume-education-item-title">UX/UI</div>
            <div contenteditable="true" class="poppins-light resume-textarea resume-education-item-skills">#UX #UI #research #DesignSystem #Agile #wireframing #figma #IA</div>
          </div>
          <div contenteditable="true" class="poppins-light resume-textarea resume-education-item-company">Neoland</div>
        </li>
        <li class="resume-education-item-2">
          <div contenteditable="true" class="poppins-medium resume-textarea resume-education-item-title">2022</div>
          <div class="resume-education-item-middle">
            <div contenteditable="true" class="poppins-medium resume-textarea resume-education-item-title">Product Designer</div>
            <div contenteditable="true" class="poppins-light resume-textarea resume-education-item-skills resume-education-item-green-skills">#analytics #research #prototype #wireframes</div>
          </div>
          <div contenteditable="true" class="poppins-light resume-textarea resume-education-item-company">Coursera</div>
        </li>
        <li class="resume-education-item-3">
          <div contenteditable="true" class="poppins-medium resume-textarea resume-education-item-title">2017-2021</div>
          <div class="resume-education-item-middle">
            <div contenteditable="true" class="poppins-medium resume-textarea resume-education-item-title">Graphic Designer</div>
            <div contenteditable="true" class="poppins-light resume-textarea resume-education-item-skills resume-education-item-green-skills">#branding #web #illustration #adobe</div>
          </div>
          <div contenteditable="true" class="poppins-light resume-textarea resume-education-item-company">Cali Institute of the Arts</div>
        </li>
      </ul>
    </div>
    <div class="resume-mixed-section">
      <div class="resume-section resume-interests">
        <div contenteditable="true" class="poppins-medium resume-textarea resume-title">Interests</div>
        <ul class="resume-interests-list">
          <li>
            <div contenteditable="true" class="poppins-light resume-textarea">branding</div>
          </li>
          <li>
            <div contenteditable="true" class="poppins-light resume-textarea">brand identity</div>
          </li>
          <li>
            <div contenteditable="true" class="poppins-light resume-textarea">logo</div>
          </li>
          <li>
            <div contenteditable="true" class="poppins-light resume-textarea">typography</div>
          </li>
          <li>
            <div contenteditable="true" class="poppins-light resume-textarea">photography</div>
          </li>
          <li>
            <div contenteditable="true" class="poppins-light resume-textarea">designing</div>
          </li>
          <li>
            <div contenteditable="true" class="poppins-light resume-textarea">poster design</div>
          </li>
          <li>
            <div contenteditable="true" class="poppins-light resume-textarea">research</div>
          </li>
          <li>
            <div contenteditable="true" class="poppins-light resume-textarea">social networks</div>
          </li>
          <li>
            <div contenteditable="true" class="poppins-light resume-textarea">illustration</div>
          </li>
        </ul>
      </div>
      <div class="resume-section resume-contact">
        <div contenteditable="true" class="poppins-medium resume-textarea resume-title resume-contact-title">Let´s chat! I´m ready to work on excinting projects</div>
        <ul class="resume-contacts-list">
          <li>
            <div contenteditable="true" class="poppins-light resume-textarea">ivann19bj@gmail.com</div>
          </li>
          <li>
            <div contenteditable="true" class="poppins-light resume-textarea">|
          </li>
          <li>
            <div contenteditable="true" class="poppins-light resume-textarea">+34 666 666 666</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="resume-section resume-tools">
        <div contenteditable="true" class="poppins-medium resume-textarea resume-title resume-tools-title">Tools</div>
        <div class="resume-tools-design">
          <div contenteditable="true" class="poppins-medium resume-textarea resume-tools-badge">design</div>
          <ul class="resume-tools-design-grid">
            <li class="resume-tools-design-grid-1">
              <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5 8C5 6.61929 6.11929 5.5 7.5 5.5C8.88071 5.5 10 6.61929 10 8C10 9.38071 8.88071 10.5 7.5 10.5C6.11929 10.5 5 9.38071 5 8Z" fill="#1ABCFE"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 13C0 11.6193 1.11929 10.5 2.5 10.5H5V13C5 14.3807 3.88071 15.5 2.5 15.5C1.11929 15.5 0 14.3807 0 13Z" fill="#0ACF83"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5 0.5L5 5.5H7.5C8.88071 5.5 10 4.38071 10 3C10 1.61929 8.88071 0.5 7.5 0.5L5 0.5Z" fill="#FF7262"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 3C0 4.38071 1.11929 5.5 2.5 5.5L5 5.5L5 0.5L2.5 0.5C1.11929 0.5 0 1.61929 0 3Z" fill="#F24E1E"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8C0 9.38071 1.11929 10.5 2.5 10.5H5L5 5.5L2.5 5.5C1.11929 5.5 0 6.61929 0 8Z" fill="#A259FF"/>
              </svg>
            </li>
            <li class="resume-tools-design-grid-2">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 6.51429C0 4.23407 0 3.09397 0.443759 2.22304C0.834101 1.45695 1.45695 0.834101 2.22304 0.443759C3.09397 0 4.23407 0 6.51429 0L11.4857 0C13.7659 0 14.906 0 15.777 0.443759C16.543 0.834101 17.1659 1.45695 17.5562 2.22304C18 3.09397 18 4.23407 18 6.51429L18 11.4857C18 13.7659 18 14.906 17.5562 15.777C17.1659 16.543 16.543 17.1659 15.777 17.5562C14.906 18 13.7659 18 11.4857 18L6.51429 18C4.23407 18 3.09397 18 2.22304 17.5562C1.45695 17.1659 0.834101 16.543 0.443759 15.777C0 14.906 0 13.7659 0 11.4857L0 6.51429Z" fill="white"/>
              <path d="M0 6.51429C0 4.23407 0 3.09397 0.443759 2.22304C0.834101 1.45695 1.45695 0.834101 2.22304 0.443759C3.09397 0 4.23407 0 6.51429 0L11.4857 0C13.7659 0 14.906 0 15.777 0.443759C16.543 0.834101 17.1659 1.45695 17.5562 2.22304C18 3.09397 18 4.23407 18 6.51429L18 11.4857C18 13.7659 18 14.906 17.5562 15.777C17.1659 16.543 16.543 17.1659 15.777 17.5562C14.906 18 13.7659 18 11.4857 18L6.51429 18C4.23407 18 3.09397 18 2.22304 17.5562C1.45695 17.1659 0.834101 16.543 0.443759 15.777C0 14.906 0 13.7659 0 11.4857L0 6.51429Z" fill="url(#paint0_radial_0_305)"/>
              <path d="M0 6.51429C0 4.23407 0 3.09397 0.443759 2.22304C0.834101 1.45695 1.45695 0.834101 2.22304 0.443759C3.09397 0 4.23407 0 6.51429 0L11.4857 0C13.7659 0 14.906 0 15.777 0.443759C16.543 0.834101 17.1659 1.45695 17.5562 2.22304C18 3.09397 18 4.23407 18 6.51429L18 11.4857C18 13.7659 18 14.906 17.5562 15.777C17.1659 16.543 16.543 17.1659 15.777 17.5562C14.906 18 13.7659 18 11.4857 18L6.51429 18C4.23407 18 3.09397 18 2.22304 17.5562C1.45695 17.1659 0.834101 16.543 0.443759 15.777C0 14.906 0 13.7659 0 11.4857L0 6.51429Z" fill="url(#paint1_radial_0_305)"/>
              <path d="M0 6.51429C0 4.23407 0 3.09397 0.443759 2.22304C0.834101 1.45695 1.45695 0.834101 2.22304 0.443759C3.09397 0 4.23407 0 6.51429 0L11.4857 0C13.7659 0 14.906 0 15.777 0.443759C16.543 0.834101 17.1659 1.45695 17.5562 2.22304C18 3.09397 18 4.23407 18 6.51429L18 11.4857C18 13.7659 18 14.906 17.5562 15.777C17.1659 16.543 16.543 17.1659 15.777 17.5562C14.906 18 13.7659 18 11.4857 18L6.51429 18C4.23407 18 3.09397 18 2.22304 17.5562C1.45695 17.1659 0.834101 16.543 0.443759 15.777C0 14.906 0 13.7659 0 11.4857L0 6.51429Z" fill="url(#paint2_radial_0_305)"/>
              <path d="M0 6.51429C0 4.23407 0 3.09397 0.443759 2.22304C0.834101 1.45695 1.45695 0.834101 2.22304 0.443759C3.09397 0 4.23407 0 6.51429 0L11.4857 0C13.7659 0 14.906 0 15.777 0.443759C16.543 0.834101 17.1659 1.45695 17.5562 2.22304C18 3.09397 18 4.23407 18 6.51429L18 11.4857C18 13.7659 18 14.906 17.5562 15.777C17.1659 16.543 16.543 17.1659 15.777 17.5562C14.906 18 13.7659 18 11.4857 18L6.51429 18C4.23407 18 3.09397 18 2.22304 17.5562C1.45695 17.1659 0.834101 16.543 0.443759 15.777C0 14.906 0 13.7659 0 11.4857L0 6.51429Z" fill="url(#paint3_radial_0_305)"/>
              <path d="M0 6.51429C0 4.23407 0 3.09397 0.443759 2.22304C0.834101 1.45695 1.45695 0.834101 2.22304 0.443759C3.09397 0 4.23407 0 6.51429 0L11.4857 0C13.7659 0 14.906 0 15.777 0.443759C16.543 0.834101 17.1659 1.45695 17.5562 2.22304C18 3.09397 18 4.23407 18 6.51429L18 11.4857C18 13.7659 18 14.906 17.5562 15.777C17.1659 16.543 16.543 17.1659 15.777 17.5562C14.906 18 13.7659 18 11.4857 18L6.51429 18C4.23407 18 3.09397 18 2.22304 17.5562C1.45695 17.1659 0.834101 16.543 0.443759 15.777C0 14.906 0 13.7659 0 11.4857L0 6.51429Z" fill="url(#paint4_radial_0_305)"/>
              <path d="M0 6.51429C0 4.23407 0 3.09397 0.443759 2.22304C0.834101 1.45695 1.45695 0.834101 2.22304 0.443759C3.09397 0 4.23407 0 6.51429 0L11.4857 0C13.7659 0 14.906 0 15.777 0.443759C16.543 0.834101 17.1659 1.45695 17.5562 2.22304C18 3.09397 18 4.23407 18 6.51429L18 11.4857C18 13.7659 18 14.906 17.5562 15.777C17.1659 16.543 16.543 17.1659 15.777 17.5562C14.906 18 13.7659 18 11.4857 18L6.51429 18C4.23407 18 3.09397 18 2.22304 17.5562C1.45695 17.1659 0.834101 16.543 0.443759 15.777C0 14.906 0 13.7659 0 11.4857L0 6.51429Z" fill="url(#paint5_radial_0_305)"/>
              <path d="M0 6.51429C0 4.23407 0 3.09397 0.443759 2.22304C0.834101 1.45695 1.45695 0.834101 2.22304 0.443759C3.09397 0 4.23407 0 6.51429 0L11.4857 0C13.7659 0 14.906 0 15.777 0.443759C16.543 0.834101 17.1659 1.45695 17.5562 2.22304C18 3.09397 18 4.23407 18 6.51429L18 11.4857C18 13.7659 18 14.906 17.5562 15.777C17.1659 16.543 16.543 17.1659 15.777 17.5562C14.906 18 13.7659 18 11.4857 18L6.51429 18C4.23407 18 3.09397 18 2.22304 17.5562C1.45695 17.1659 0.834101 16.543 0.443759 15.777C0 14.906 0 13.7659 0 11.4857L0 6.51429Z" fill="url(#paint6_radial_0_305)"/>
              <path d="M14.445 5.42309C13.4925 4.36924 12.15 3.77694 10.755 3.78463C9.39001 3.78463 8.00251 4.38463 7.11001 5.35386C6.94501 5.33847 6.78001 5.32309 6.62251 5.32309C3.94501 5.32309 2.28751 7.63078 2.28751 9.76924C2.29501 10.9231 2.73001 12.0308 3.50251 12.8769C4.31251 13.7615 5.43751 14.2615 6.62251 14.2615H10.755C13.56 14.2615 15.84 11.9 15.84 9.0077C15.825 7.67694 15.33 6.40001 14.445 5.42309ZM6.54001 13.5077C4.55251 13.5077 2.94751 11.8539 2.94751 9.8154C2.94751 7.79232 4.54501 6.14617 6.52501 6.13078C7.40251 6.13078 8.32501 6.42309 8.91001 7.06155L10.4175 8.64617C10.665 8.9077 10.6575 9.32309 10.4025 9.57694C10.1475 9.83078 9.74251 9.82309 9.49501 9.56155L8.02501 8.0077C7.06501 7.16155 5.61751 7.26924 4.79251 8.25386C4.43251 8.67694 4.23751 9.22309 4.23751 9.78463C4.23751 11.0769 5.31001 12.1692 6.57751 12.1692H6.87001C7.29001 12.7692 8.46751 13.5077 8.46751 13.5077H6.54001ZM13.905 12.1846C13.1025 13.0462 11.9925 13.5308 10.83 13.5385C9.72751 13.5385 8.60251 13.0308 7.74001 12.1539L5.77501 10.1231C5.52751 9.86155 5.53501 9.44617 5.78251 9.19232C5.90251 9.06924 6.06001 9.00771 6.23251 9.00771C6.40501 9.00771 6.57001 9.07694 6.69001 9.20771L8.64751 11.2154C9.27001 11.8539 10.065 12.2154 10.83 12.2154C11.6475 12.2154 12.4275 11.8692 12.99 11.2539C13.5675 10.6462 13.89 9.83078 13.89 8.98463C13.89 7.24617 12.51 5.83848 10.815 5.83078C10.17 5.83078 9.63751 5.96155 9.11251 6.33847C8.81531 6.03365 8.17501 5.73079 7.88251 5.66924C8.69251 4.89232 9.70501 4.5154 10.815 4.5154C13.2225 4.5154 15.165 6.5154 15.1725 8.98463C15.1725 10.1769 14.7225 11.3308 13.905 12.1846Z" fill="white"/>
              <defs>
              <radialGradient id="paint0_radial_0_305" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(14.9625 15.3846) rotate(46.87) scale(10.751 11.012)">
              <stop stop-color="#68E048"/>
              <stop offset="1" stop-color="#5CE049" stop-opacity="0"/>
              </radialGradient>
              <radialGradient id="paint1_radial_0_305" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(2.85 15.3077) rotate(137.364) scale(10.9593 11.2674)">
              <stop stop-color="#308CFE"/>
              <stop offset="1" stop-color="#2F8BFF" stop-opacity="0"/>
              </radialGradient>
              <radialGradient id="paint2_radial_0_305" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(14.625 10.0769) rotate(7.9001) scale(6.43608 6.76405)">
              <stop stop-color="#FDD511"/>
              <stop offset="1" stop-color="#FDD20D" stop-opacity="0"/>
              </radialGradient>
              <radialGradient id="paint3_radial_0_305" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(3.075 6.5) rotate(-127.134) scale(9.50414 9.68404)">
              <stop stop-color="#F928C2"/>
              <stop offset="1" stop-color="#F922BC" stop-opacity="0"/>
              </radialGradient>
              <radialGradient id="paint4_radial_0_305" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(10.2 3) rotate(-63.404) scale(9.54887 9.64828)">
              <stop stop-color="#F90700"/>
              <stop offset="1" stop-color="#F90700" stop-opacity="0"/>
              </radialGradient>
              <radialGradient id="paint5_radial_0_305" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17.025 2.61539) rotate(-65.6935) scale(5.73954 5.79005)">
              <stop stop-color="#FB4200"/>
              <stop offset="1" stop-color="#FB4300" stop-opacity="0"/>
              </radialGradient>
              <radialGradient id="paint6_radial_0_305" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1.875 2.19231) rotate(-133.672) scale(5.10478 5.2312)">
              <stop stop-color="#FE0D88"/>
              <stop offset="1" stop-color="#FE0D88" stop-opacity="0"/>
              </radialGradient>
              </defs>
              </svg>
            </li>
            <li class="resume-tools-design-grid-3">
              <img alt="logo miro" src="/logomiro.png" class="resume-logo-miro"/>
            </li>
            <li class="resume-tools-design-grid-4">
              <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.93154 3.24599C3.48241 3.69348 3.68917 3.65951 4.72444 3.5901L14.4827 3.00453C14.6895 3.00453 14.5174 2.79777 14.4487 2.7638L12.8272 1.59192C12.517 1.35119 12.1028 1.07502 11.3097 1.1437L1.86157 1.83339C1.51746 1.86735 1.44805 2.04014 1.5854 2.17749L2.93154 3.24599ZM3.51711 5.52034L3.51711 15.7874C3.51711 16.339 3.79255 16.5457 4.41356 16.511L15.1377 15.8908C15.7587 15.8568 15.8281 15.4772 15.8281 15.029L15.8281 4.83065C15.8281 4.38316 15.6561 4.1417 15.2758 4.17567L4.06872 4.83065C3.6552 4.86536 3.51711 5.07285 3.51711 5.52034ZM14.1039 6.07046C14.1726 6.3806 14.1039 6.69074 13.7938 6.72618L13.2769 6.82956V14.4087C12.8279 14.6502 12.4144 14.7883 12.0695 14.7883C11.5172 14.7883 11.3791 14.6155 10.9656 14.0993L7.58583 8.79303V13.9266L8.65507 14.1688C8.65507 14.1688 8.65507 14.789 7.79259 14.789L5.41339 14.9264C5.34471 14.789 5.41339 14.4442 5.65485 14.3755L6.27513 14.2035L6.27513 7.41513L5.41486 7.34572C5.34545 7.03558 5.51824 6.5881 6.00043 6.55339L8.55243 6.38134L12.0703 11.7563V7.00088L11.1731 6.89824C11.1044 6.51869 11.3799 6.24325 11.7247 6.20929L14.1039 6.07046ZM1.0685 0.902971L10.8969 0.179316C12.1035 0.0759363 12.4144 0.14461 13.1727 0.696213L16.3103 2.90115C16.8272 3.27996 17 3.38334 17 3.79686L17 15.8908C17 16.6484 16.7246 17.0974 15.7594 17.1653L4.34489 17.855C3.62123 17.8897 3.27565 17.7863 2.8961 17.3034L0.58557 14.3054C0.172053 13.7538 0 13.341 0 12.8581L0 2.10808C0 1.48854 0.276171 0.970906 1.0685 0.902971Z" fill="black"/>
              </svg>
            </li>
            <li class="resume-tools-design-grid-5">
              <svg width="19.5" height="16" viewBox="0 0 19.5 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.750061 14.7008C0.750061 15.406 1.32618 15.9772 2.03601 15.9772H2.0545C1.3338 15.9772 0.750061 15.406 0.750061 14.7008Z" fill="#FBBC05"/>
                <path d="M11.8006 4.80893V8.1413L16.2933 4.51749V1.29893C16.2933 0.59374 15.7172 0.0225677 15.0074 0.0225677L5.27412 0.0225677L5.26543 4.80893L11.8006 4.80893Z" fill="#FBBC05"/>
                <path d="M11.8009 11.4751H5.25485L5.24724 15.9774L15.0077 15.9774C15.7186 15.9774 16.2936 15.4063 16.2936 14.7011V11.7952L11.8009 8.1427V11.4751Z" fill="#34A853"/>
                <path d="M5.27427 0.0225677L0.750061 4.80893L5.26666 4.80893L5.27427 0.0225677Z" fill="#EA4335"/>
                <path d="M0.750061 11.4748L0.750061 14.7008C0.750061 15.406 1.3338 15.9771 2.0545 15.9771H5.2471L5.25471 11.4748H0.750061Z" fill="#1967D2"/>
                <path d="M5.26666 4.80893L0.750061 4.80893L0.750061 11.4747H5.25471L5.26666 4.80893Z" fill="#4285F4"/>
                <path d="M20.2436 13.5662V2.61071C19.9903 1.15672 18.3956 2.82344 18.3956 2.82344L16.2944 4.51781V11.7941L19.3022 14.2394C20.3881 14.382 20.2436 13.5662 20.2436 13.5662Z" fill="#34A853"/>
                <path d="M11.8007 8.1413L16.2944 11.7949V4.51855L11.8007 8.1413Z" fill="#188038"/>
              </svg>
            </li>
            <li class="resume-tools-design-grid-6">
              <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.249939" width="19" height="18" rx="9" fill="white"/>
                <path d="M14.8845 12.217C14.8856 12.4195 14.8413 12.6199 14.7545 12.8049C14.6677 12.9899 14.5403 13.1553 14.3809 13.2902C14.2215 13.425 14.0336 13.5262 13.8298 13.5871C13.626 13.648 13.4108 13.6671 13.1986 13.6433C12.426 13.5349 11.8599 12.8981 11.8787 12.1584V3.65456C11.86 2.91412 12.4276 2.27687 13.2011 2.16974C13.4132 2.14622 13.6281 2.16562 13.8316 2.22666C14.0351 2.28769 14.2226 2.38896 14.3818 2.52378C14.5409 2.6586 14.668 2.82389 14.7547 3.00872C14.8413 3.19355 14.8856 3.39371 14.8845 3.59595V12.217Z" fill="#F9AB00"/>
                <path d="M5.4262 10.8078C6.25624 10.8078 6.92911 11.4453 6.92911 12.2316C6.92911 13.018 6.25624 13.6555 5.4262 13.6555C4.59615 13.6555 3.92328 13.018 3.92328 12.2317C3.92328 11.4453 4.59615 10.8078 5.4262 10.8078ZM9.38068 6.49241C8.54673 6.53573 7.89964 7.19845 7.91904 7.98952V11.814C7.91904 12.852 8.40111 13.4821 9.10742 13.6164C9.3264 13.6584 9.55251 13.6538 9.76935 13.6028C9.9862 13.5518 10.1883 13.4557 10.3611 13.3214C10.5339 13.1872 10.6729 13.0183 10.7682 12.8268C10.8635 12.6353 10.9126 12.4262 10.912 12.2145V7.92361C10.9123 7.73391 10.8728 7.54605 10.7958 7.37098C10.7187 7.19591 10.6056 7.03713 10.463 6.90391C10.3205 6.77069 10.1514 6.6657 9.96553 6.59505C9.7797 6.52441 9.58089 6.48953 9.38068 6.49245V6.49241Z" fill="#E37400"/>
              </svg>
            </li>
          </ul>
        </div>
        <div class="resume-tools-no-code">
          <div contenteditable="true" class="poppins-medium resume-textarea resume-tools-badge">no-code</div>
          <ul class="resume-tools-no-code-grid">
            <li class="resume-tools-no-code-grid-1">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_0_324)">
                  <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#FF4A00"/>
                  <path d="M11.25 10.0021C11.2501 10.3624 11.185 10.7197 11.058 11.0568C10.7206 11.1843 10.3629 11.2498 10.0021 11.25H9.99785C9.6376 11.25 9.2803 11.185 8.94316 11.058C8.81564 10.7206 8.7502 10.3629 8.75 10.0021V9.99785C8.75004 9.6376 8.81508 9.28032 8.94199 8.94316C9.27942 8.81563 9.63713 8.75019 9.99785 8.75H10.0021C10.3628 8.74985 10.7205 8.81497 11.058 8.94219C11.185 9.27931 11.2501 9.63662 11.25 9.99687V10.0012V10.0021ZM14.9305 9.1666H12.0117L14.0756 7.10293C13.9135 6.87559 13.7327 6.66215 13.5352 6.46484C13.3378 6.26756 13.1244 6.08706 12.8971 5.9252L10.8334 7.98828V5.06953C10.5589 5.02342 10.2811 5.00016 10.0027 5H9.99746C9.71913 5.00016 9.44129 5.02342 9.1668 5.06953V7.98828L7.10293 5.92441C6.87559 6.08652 6.66216 6.26729 6.46484 6.46484C6.26764 6.66207 6.0872 6.87537 5.92539 7.10254L7.98828 9.1666H5.06953C5.06953 9.1666 5 9.71484 5 9.99824V10.0018C5.00011 10.2804 5.02337 10.5586 5.06953 10.8334H7.98828L5.92441 12.8971C6.24896 13.3527 6.64727 13.751 7.10293 14.0756L9.1666 12.0117V14.9305C9.44083 14.9765 9.71841 14.9998 9.99648 15H10.0037C10.2817 14.9998 10.5592 14.9765 10.8334 14.9305V12.0117L12.8971 14.0756C13.1244 13.9135 13.3378 13.7327 13.5352 13.5352C13.7325 13.3378 13.9131 13.1244 14.075 12.8971L12.0117 10.8334H14.9305C14.9765 10.5592 14.9998 10.2816 15 10.0035V9.99629C14.9998 9.71828 14.9765 9.44077 14.9305 9.1666Z" fill="white"/>
                </g>
                <defs>
                  <clipPath id="clip0_0_324">
                    <rect width="20" height="20" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </li>
            <li class="resume-tools-no-code-grid-2">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 0C0.895431 0 0 0.89543 0 2L0 16C0 17.1046 0.89543 18 2 18L16 18C17.1046 18 18 17.1046 18 16L18 2C18 0.895431 17.1046 0 16 0L2 0Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 0C0.895431 0 0 0.89543 0 2L0 16C0 17.1046 0.89543 18 2 18L16 18C17.1046 18 18 17.1046 18 16L18 2C18 0.895431 17.1046 0 16 0L2 0ZM12.401 7.34323C12.401 7.34323 11.428 10.2821 11.3485 10.5248C11.1035 8.68293 10.8561 6.84132 10.6065 5C8.9485 5 8.062 6.13646 7.5935 7.336L6.311 10.5321C6.3035 10.3028 6.131 7.37067 6.131 7.37067C6.029 5.90098 4.631 5.00626 3.5 5.00626L4.8695 13C6.6065 12.9928 7.543 11.8631 8.0335 10.6635C8.0335 10.6635 9.0785 8.06411 9.1215 7.94613C9.129 8.05688 9.8715 12.9995 9.8715 12.9995C11.6155 12.9995 12.5525 11.9391 13.0565 10.7815L15.5 5.00674C13.7775 5.00674 12.8695 6.13694 12.401 7.34323Z" fill="#4353FF"/>
              </svg>
            </li>
            <li class="resume-tools-no-code-grid-3">
              <svg width="13" height="19" viewBox="0 0 13 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 12.381L6.5 12.381L6.5 18.5715L0 12.381Z" fill="#0055FF"/>
                <path d="M6.5 6.19046L0 6.19046L0 12.3809L13 12.3809L6.5 6.19046Z" fill="#00AAFF"/>
                <path d="M0 0L6.5 6.19049L13 6.19049L13 0L0 0Z" fill="#88DDFF"/>
              </svg>
            </li>
            <li class="resume-tools-no-code-grid-4">
              <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.12461 9.28577C1.12461 12.2085 2.82462 14.7258 5.28307 15.9223L1.76538 6.28462C1.34298 7.22877 1.12463 8.25144 1.12461 9.28577ZM8.5 16.6611C9.35655 16.6611 10.1804 16.5108 10.9519 16.2427L10.8996 16.1446L8.63076 9.93308L6.42076 16.3604C7.07462 16.5565 7.77424 16.6611 8.5 16.6611ZM9.51345 5.82691L12.1811 13.7581L12.92 11.2996C13.2339 10.2796 13.4758 9.54731 13.4758 8.91308C13.4758 7.99769 13.1489 7.37 12.8742 6.88615C12.495 6.27153 12.1485 5.755 12.1485 5.15346C12.1485 4.47346 12.6585 3.84577 13.3908 3.84577H13.4823C12.1233 2.59817 10.3448 1.90731 8.5 1.91038C7.2785 1.91015 6.07609 2.21359 5.00096 2.79338C3.92581 3.37318 3.01167 4.21115 2.34076 5.23191L2.81154 5.245C3.58307 5.245 4.77307 5.14691 4.77307 5.14691C5.17846 5.12731 5.22424 5.70922 4.82538 5.755C4.82538 5.755 4.42655 5.80731 3.97538 5.82691L6.66924 13.8169L8.28424 8.97846L7.13345 5.82691C6.8757 5.8127 6.61841 5.79089 6.36193 5.76153C5.96307 5.73538 6.00885 5.12731 6.40769 5.14691C6.40769 5.14691 7.62385 5.245 8.34962 5.245C9.12115 5.245 10.3111 5.14691 10.3111 5.14691C10.71 5.12731 10.7623 5.70922 10.3635 5.755C10.3635 5.755 9.96462 5.80077 9.51345 5.82691ZM12.2073 15.6608C13.3231 15.012 14.249 14.0818 14.8927 12.9631C15.5364 11.8444 15.8752 10.5764 15.8754 9.28577C15.8754 8.00422 15.5485 6.80115 14.9731 5.74846C15.0899 6.9066 14.9146 8.07557 14.4631 9.14846L12.2073 15.6608ZM8.5 17.7858C6.24566 17.7858 4.08365 16.8902 2.4896 15.2962C0.895533 13.7021 0 11.5401 0 9.28577C0 7.03143 0.895533 4.86942 2.4896 3.27537C4.08365 1.6813 6.24566 0.785767 8.5 0.785767C10.7543 0.785767 12.9163 1.6813 14.5104 3.27537C16.1045 4.86942 17 7.03143 17 9.28577C17 11.5401 16.1045 13.7021 14.5104 15.2962C12.9163 16.8902 10.7543 17.7858 8.5 17.7858Z" fill="#126FC2"/>
              </svg>
            </li>
          </ul>
      </div>
      <div class="resume-tools-ai">
          <div contenteditable="true" class="poppins-medium resume-textarea resume-tools-badge">artoficial intelligence</div>
          <ul class="resume-tools-ai-grid">
            <li>
              <img alt="chatgpt logo" src="/chatgpt.png" class="resume-tools-ai-logo"/>
            </li>
            <li>
              <img alt="chatgpt logo" src="/logoCopilot.png" class="resume-tools-ai-logo"/>
            </li>
            <li>
              <img alt="chatgpt logo" src="/logoMidjourney.png" class="resume-tools-ai-logo"/>
            </li>
          </ul>
      </div>
    </div>
    <div class="resume-section resume-experience">
        <div contenteditable="true" class="poppins-medium resume-textarea resume-title">Experience</div>
        <ul class="resume-experience-list">
          <li class="resume-experience-list-1">
            <div class="resume-experience-list-1-upper">
              <div contenteditable="true" class="poppins-medium resume-textarea resume-experience-list-date">Jul. 2023 - Ago. 2023</div>
              <span class="poppins-medium resume-experience-badge">most recent</span>
            </div>
            <div class="resume-experience-list-bottom">
                <div class="resume-experience-list-bottom-left">
                  <div contenteditable="true" class="poppins-medium resume-textarea resume-experience-list-position">Senior Graphic Designer</div>
                  <div class="resume-experience-list-bottom-list">
                    <div contenteditable="true" class="poppins-light resume-textarea">Pinnacle</div>
                    <div contenteditable="true" class="poppins-light resume-textarea">|</div>
                    <div contenteditable="true" class="poppins-light resume-textarea">Full-time</div>
                  </div>
                </div>
                <ul class="resume-experience-list-experience">
                  <div contenteditable="true" class="poppins-light resume-textarea">Research and brainstorm various design ideas for content and marketing.</div>
                  <div contenteditable="true" class="poppins-light resume-textarea">Review the work submitted by Junior Designers and sharing feedback.</div>
                </ul>
            </div>
          </li>
          <li class="resume-experience-list-2">
              <div contenteditable="true" class="poppins-medium resume-textarea resume-experience-list-date">Ene. 2021 - Jul. 2023</div>
              <div class="resume-experience-list-bottom">
                  <div class="resume-experience-list-bottom-left">
                    <div contenteditable="true" class="poppins-medium resume-textarea resume-experience-list-position">Graphic / Web designer</div>
                    <div class="resume-experience-list-bottom-list">
                      <div contenteditable="true" class="poppins-light resume-textarea">Double Square</div>
                      <div contenteditable="true" class="poppins-light resume-textarea">|</div>
                      <div contenteditable="true" class="poppins-light resume-textarea">Full-time</div>
                    </div>
                  </div>
                  <ul class="resume-experience-list-experience">
                    <div contenteditable="true" class="poppins-light resume-textarea">Development of internal projects from scratch, product design of brands.</div>
                    <div contenteditable="true" class="poppins-light resume-textarea">Landing page, webapps and hybrid apps</div>
                    <div contenteditable="true" class="poppins-light resume-textarea">Taking decisions with stakeholders for the future of products such as Beagle labs, myur...</div>
                  </ul>
              </div>
          </li>
          <li class="resume-experience-list-3">
              <div contenteditable="true" class="poppins-medium resume-textarea resume-experience-list-date">Feb. 2021 - Jul. 2023</div>
              <div class="resume-experience-list-bottom">
                  <div class="resume-experience-list-bottom-left">
                    <div contenteditable="true" class="poppins-medium resume-textarea resume-experience-list-position">Graphic Designer</div>
                    <div class="resume-experience-list-bottom-list">
                      <div contenteditable="true" class="poppins-light resume-textarea">Freelance</div>
                    </div>
                  </div>
                  <ul class="resume-experience-list-experience">
                    <div contenteditable="true" class="poppins-light resume-textarea">Visual design for Events, Brands and Products.</div>
                    <div contenteditable="true" class="poppins-light resume-textarea">Product design, Packaging Design</div>
                    <div contenteditable="true" class="poppins-light resume-textarea">Logo Design</div>
                  </ul>
              </div>
          </li>
        </ul>
    </div>
  </section>
`;

const button = document.querySelector(".save-button");
button.addEventListener("click", buttonHandler);

document.querySelectorAll("div[contenteditable]").forEach((element) => {
  element.addEventListener("blur", () => {
    element.classList.remove("focused");
  });

  element.addEventListener("focus", () => {
    element.classList.add("focused");
  });
});
