import s from "./Description.module.css";

const Description = () => {
  return (
    <section className={s.description}>
      <h1 className={s.header}>Sip Happens Café</h1>
      <p className={s.text}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </section>
  );
};

export default Description;
