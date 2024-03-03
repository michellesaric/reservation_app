import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error">
      <p className="error__text">
        Whoops! You have accidently went to a page that doesn't exist! Click{" "}
        <Link to="/">here</Link> to return back!
      </p>
    </section>
  );
};

export default Error;
