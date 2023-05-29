import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ContectSection() {
  const location = useLocation();
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [organization, setOrganization] = useState("");
  const [organizationError, setOrganizationError] = useState("");
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState("");

  useEffect(() => {
    setEmailError("");
    setNameError("");
    setPhoneError("");
    setOrganizationError("");
    setMessageError("");
  }, [location]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (name === "") {
      setNameError("Name is required!");
    }
    if (phone === "") {
      setPhoneError("Phone number is required!");
    }
    if (email === "") {
      setEmailError("Email is required!");
    }
    if (organization === "") {
      setOrganizationError("Organization name is required!");
    }
    if (message === "") {
      setMessageError("Message is required!");
    }

    if (
      name !== "" &&
      phone !== "" &&
      email !== "" &&
      organization !== "" &&
      message !== ""
    ) {
      console.log({
        name,
        phone,
        email,
        organization,
        message,
      });
    }
  };

  return (
    <>
      <section id="contact" className="contect__wraper__main">
        <div className="contect__contaier">
          <div className="contect__contaier__col">
            <div className="contect__contaier__col__heading">
              Request for a call back
            </div>
            <div className="contect__contaier__col__form">
              <form onSubmit={submitHandler}>
                <div className="input__wraper">
                  <div className="input__wraper__entry">
                    <input
                      className="input__wraper__entry__input"
                      type="text"
                      placeholder="Name"
                      name="name"
                      defaultValue={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (e.target.value === "") {
                          setNameError(
                            "Name must be at least 3 characters long!"
                          );
                        } else {
                          setNameError("");
                        }
                      }}
                    />
                    <div className="input__wraper__entry__error">
                      {nameError}
                    </div>
                  </div>
                  <div className="input__wraper__entry">
                    <input
                      className="input__wraper__entry__input"
                      type="tel"
                      placeholder="Phone"
                      name="phone"
                      defaultValue={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (e.target.value === "") {
                          setPhoneError("Phone number must be 10 digits long!");
                        } else {
                          setPhoneError("");
                        }
                      }}
                    />
                    <div className="input__wraper__entry__error">
                      {phoneError}
                    </div>
                  </div>
                </div>
                <div className="input__wraper">
                  <div className="input__wraper__entry">
                    <input
                      className="input__wraper__entry__input"
                      type="email"
                      placeholder="Email"
                      name="email"
                      defaultValue={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (e.target.value === "") {
                          setEmailError("Email is required!");
                        } else {
                          setEmailError("");
                        }
                      }}
                    />
                    <div className="input__wraper__entry__error">
                      {emailError}
                    </div>
                  </div>
                  <div className="input__wraper__entry">
                    <input
                      className="input__wraper__entry__input"
                      type="text"
                      placeholder="Organization Name"
                      name="organization"
                      defaultValue={organization}
                      onChange={(e) => {
                        setOrganization(e.target.value);
                        if (e.target.value === "") {
                          setOrganizationError(
                            "Organization name is required!"
                          );
                        } else {
                          setOrganizationError("");
                        }
                      }}
                    />
                    <div className="input__wraper__entry__error">
                      {organizationError}
                    </div>
                  </div>
                </div>
                <div className="input__wraper input__wraper__textarea">
                  <textarea
                    className="input__wraper__entry__input input__wraper__entry__input__textarea"
                    placeholder="Message here..."
                    name="message"
                    defaultValue={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (e.target.value === "") {
                        setMessageError("Message is required!");
                      } else {
                        setMessageError("");
                      }
                    }}
                  />
                  <div className="input__wraper__entry__error">
                    {messageError}
                  </div>
                </div>
                <div className="btn__md__more">
                  <button type="submit" className="about__md__more__btn">
                    Request for a Call Back
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="contect__contaier__col">
            <div className="contect__contaier__col__text__heading">Contact</div>
            <div className="contect__contaier__col__text__entr__first">
              <div className="contect__contaier__col__text__entry__heading">
                Address:
              </div>
              <div className="contect__contaier__col__text__entry__sub__heading">
                1300 Pennsylvania Avenue, NW <br /> #190-635 Washington, DC
                20004 USA
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
      </section>
    </>
  );
}
