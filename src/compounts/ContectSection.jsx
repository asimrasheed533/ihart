import React from "react";

export default function ContectSection() {
  return (
    <>
      <div className="contect__contaier">
        <div className="contect__contaier__col">
          <div className="contect__contaier__col__heading">
            Request for a call back
          </div>
          <div className="contect__contaier__col__form">
            <form action="#">
              <div className="input__wraper">
                <div className="input__wraper__entry">
                  <input
                    className="input__wraper__entry__input"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="input__wraper__entry">
                  <input
                    className="input__wraper__entry__input"
                    type="number"
                    placeholder="Phone"
                  />
                </div>
              </div>
              <div className="input__wraper">
                <div className="input__wraper__entry">
                  <input
                    className="input__wraper__entry__input"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="input__wraper__entry">
                  <input
                    className="input__wraper__entry__input"
                    type="text"
                    placeholder="Organization Name"
                  />
                </div>
              </div>
              <div className="input__wraper">
                <textarea
                  className="input__wraper__entry__input"
                  placeholder="Message here..."
                  id="#"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="contect__contaier__col">
          <div className="contect__contaier__col__text__heading">Contact</div>
          <div className="contect__contaier__col__text__entry">
            <div className="contect__contaier__col__text__entry__heading">
              Address:
            </div>
            <div className="contect__contaier__col__text__entry__sub__heading">
              1300 Pennsylvania Avenue, NW #190-635 Washington, DC 20004 USA
            </div>
          </div>
          <div className="contect__contaier__col__text__entry">
            <div className="contect__contaier__col__text__entry__heading">
              Tel:
            </div>
            <div className="contect__contaier__col__text__entry__sub__heading">
              +1 (202) 800 9099
            </div>
          </div>
          <div className="contect__contaier__col__text__entry">
            <div className="contect__contaier__col__text__entry__heading">
              Email:
            </div>
            <div className="contect__contaier__col__text__entry__sub__heading">
              info@ihartglobal.org
            </div>
          </div>
          <div className="contect__contaier__col__text__entry">
            <div className="contect__contaier__col__text__entry__heading">
              Website:
            </div>
            <div className="contect__contaier__col__text__entry__sub__heading">
              www.ihartglobal.org
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
