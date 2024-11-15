import arrowUp from "../assets/faq-up-arrow.svg";
import arrowDownLight from "../assets/faq-down-arrow-light.svg";
import { useEffect, useState } from "react";

function Accordion() {
  const [questions, setQuestions] = useState([]);
  // const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggle = (i) => {
    if (isOpen === i) {
      return setIsOpen(false);
    }

    setIsOpen(i);
  };

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const response = await fetch(
          "https://win24-assignment.azurewebsites.net/api/faq"
        );

        const data = await response.json();
        setQuestions(data);
        // setError("");
      } catch (error) {
        console.log(error.message);
        // setError(error.message);
      }
    }
    fetchQuestions();
  }, []);

  return (
    <div className="accordion">
      <ul className="questions">
        {questions.map((item, i) => (
          <li key={item.id} className={isOpen === i ? "active-question" : ""}>
            <div className="question">
              <h3 className="h6">{item.title}</h3>
              <button
                onClick={() => toggle(i)}
                className={
                  isOpen === i
                    ? "btn-circle btn-circle--small btn-circle--primary"
                    : "btn-circle btn-circle--small"
                }
              >
                <img
                  src={isOpen === i ? arrowUp : arrowDownLight}
                  alt="down arrow"
                />
              </button>
            </div>
            {isOpen === i ? (
              <p className="paragraph paragraph--small">{item.content}</p>
            ) : (
              ""
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Accordion;
