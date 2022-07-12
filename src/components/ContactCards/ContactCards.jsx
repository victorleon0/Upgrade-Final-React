import React from "react";
import "./ContactCards.scss";

const ContactCards = () => {
  return (
    <div className="containercards">
      <aside className="profile-card">
        <header>
          <a href="https://github.com/Denisse-Paula">
            <img src="https://avatars.githubusercontent.com/u/100145958?v=4" alt="img" />
          </a>

          <h3>Paula Denisse</h3>

          <h2>Full Stack Developer</h2>
        </header>

        <ul className="profile-social-links">
          <li>
            <a href="mailto:pauldenisse@gmail.com">
              <img src="https://cdn-icons-png.flaticon.com/512/281/281769.png" alt="logo" />
            </a>
          </li>

          <li>
            <a href="https://github.com/Denisse-Paula">
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="logo" />
            </a>
          </li>

          <li>
            <a href="https://codepen.io/alishahab">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="logo" />
            </a>
          </li>
        </ul>
      </aside>
      <aside className="profile-card">
        <header>
          <a href="https://github.com/Nughy10">
            <img src="https://avatars.githubusercontent.com/u/47788153?v=4" alt="img" />
          </a>

          <h3>Pau Isach</h3>

          <h2>Full Stack Developer</h2>
        </header>

        <ul className="profile-social-links">
          <li>
            <a href="mailto: pending">
              <img src="https://cdn-icons-png.flaticon.com/512/281/281769.png" alt="logo" />
            </a>
          </li>

          <li>
            <a href="https://github.com/Nughy10">
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="logo" />
            </a>
          </li>

          <li>
            <a href="https://www.linkedin.com/in/pau-isach-noguera-534087195/">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="logo" />
            </a>
          </li>
        </ul>
      </aside>
      <aside className="profile-card">
        <header>
          <a href="https://github.com/victorleon0">
            <img
              src="https://media-exp1.licdn.com/dms/image/C5603AQGxpzqw5I_VhA/profile-displayphoto-shrink_800_800/0/1581615912836?e=1663200000&v=beta&t=uwHN-pCaovIwwTiDUlxoWw3tSnyasuw9ZLPi8YjKZ0M"
              alt="img"
            />
          </a>

          <h3>Víctor León</h3>

          <h2>Full Stack Developer</h2>
        </header>

        <ul className="profile-social-links">
          <li>
            <a href="mailto:victor.leon.huerta@gmail.com">
              <img src="https://cdn-icons-png.flaticon.com/512/281/281769.png" alt="logo" />
            </a>
          </li>

          <li>
            <a href="https://github.com/victorleon0">
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="logo" />
            </a>
          </li>

          <li>
            <a href="https://www.linkedin.com/in/victorleon0/">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="logo" />
            </a>
          </li>
        </ul>
      </aside>
      <aside className="profile-card">
        <header>
          <a href="https://github.com/Perillos">
            <img
              src="https://media-exp1.licdn.com/dms/image/D4E35AQEop4-K3gefqQ/profile-framedphoto-shrink_800_800/0/1643671655523?e=1658235600&v=beta&t=36jJrSdHwFE0OrIp2-3l1MUX_67pPnv5aA1CHlrCvrQ"
              alt="img"
            />
          </a>

          <h3>Fernando Valero</h3>

          <h2>Full Stack Developer</h2>
        </header>

        <ul className="profile-social-links">
          <li>
            <a href="mailto:pending">
              <img src="https://cdn-icons-png.flaticon.com/512/281/281769.png" alt="logo" />
            </a>
          </li>

          <li>
            <a href="https://github.com/Perillos">
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="logo" />
            </a>
          </li>

          <li>
            <a href="https://www.linkedin.com/in/fernando-valero-1ab5a3a0/">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="logo" />
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default ContactCards;
