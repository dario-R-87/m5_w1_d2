import React from "react";

function Foot() {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="text-center">
            <h5>Contatti</h5>
            <ul className="list-unstyled">
              <li>Email: example@example.com</li>
              <li>Telefono: +123456789</li>
              <li>Indirizzo: Via Example, 12345, Città, Stato</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Foot;
