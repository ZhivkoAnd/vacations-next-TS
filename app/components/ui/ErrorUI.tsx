import error from "../../../images/error.png";
import Image from "next/image";

const Error = () => {
  return (
    <div className="container">
      <div className="error-container">
        <p className="error-container__text">Sorry, something went wrong !</p>
        <Image src={error} alt="Error-image" width={500} height={500} />
      </div>
    </div>
  );
};

export default Error;
