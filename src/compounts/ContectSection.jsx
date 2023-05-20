import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
export default function ContectSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <>
      <section id="contact" className="contect__wraper__main">
        <div className="contect__contaier">
          <div className="contect__contaier__col">
            <div className="contect__contaier__col__heading">
              Request for a call back
            </div>
            <div className="contect__contaier__col__form">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input__wraper">
                  <div className="input__wraper__entry">
                    <input
                      {...register("firstname", { required: true })}
                      className="input__wraper__entry__input"
                      type="text"
                      placeholder="Name"
                    />

                    <div className="input__wraper__entry__error">
                      {errors.name?.message}
                    </div>
                  </div>
                  <div className="input__wraper__entry">
                    <input
                      {...register("firstname", {
                        required: "This is required.",
                        minLength: 11,
                      })}
                      className="input__wraper__entry__input"
                      type="tel"
                      placeholder="Phone"
                    />
                    <div className="input__wraper__entry__error">
                      The field is required
                    </div>
                  </div>
                </div>
                <div className="input__wraper">
                  <div className="input__wraper__entry">
                    <input
                      className="input__wraper__entry__input"
                      type="text"
                      placeholder="Email"
                      {...register("Email", {
                        required: true,
                        pattern: /^\S+@\S+$/i,
                      })}
                    />
                    <div className="input__wraper__entry__error">
                      The field is required
                    </div>
                  </div>

                  <div className="input__wraper__entry">
                    <input
                      className="input__wraper__entry__input"
                      type="text"
                      placeholder="Organization Name"
                    />
                    <div className="input__wraper__entry__error">
                      The field is required
                    </div>
                  </div>
                </div>
                <div className="input__wraper">
                  <textarea
                    className="input__wraper__entry__input"
                    placeholder="Message here..."
                  />
                  <div className="input__wraper__entry__error">
                    The field is required
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
