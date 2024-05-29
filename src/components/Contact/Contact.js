import styles from "./Contact.module.scss";
import { FooterApp } from "../FooterApp";

export function Contact() {
  return (
    <>
      <div className={styles.container}>
        <h1>ANTOTEX DISTRIBUIDORA</h1>
        <div className={styles.phone}>
          <h5>Líneas de atención</h5>
          <ul>
          <li>(+57) 300 9766163</li>
          <li>(+57) 311 3666417</li>
          <li>(+57) 314 4907336</li>
          <li>(+57) 320 5283754</li>
          </ul>
        </div>

        <div className={styles.adress}>
          <h5>Ubicación:</h5>
          <p>Cra. 8 #17-38, San Nicolas, Cali, Valle del Cauca</p>
        </div>
      </div>
      <FooterApp />
    </>
  );
}
