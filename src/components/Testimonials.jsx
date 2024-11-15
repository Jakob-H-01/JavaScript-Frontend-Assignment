import starRating1 from "../assets/rating-1.svg";
import starRating2 from "../assets/rating-2.svg";
import { useState, useEffect } from "react";

function Testimonials() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const response = await fetch(
          "https://win24-assignment.azurewebsites.net/api/testimonials"
        );

        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchTestimonials();
  }, []);

  return (
    <section className="section-testimonials">
      <div className="wrapper">
        <h2 className="h2">
          Clients are <span>Loving Our App</span>
        </h2>
        <div className="cards">
          {users.map((user) => (
            <div className="card" key={user.id}>
              <img
                src={user.starRating === 4 ? starRating1 : starRating2}
                alt=""
              />
              <p className="paragraph paragraph--large">{user.comment}</p>
              <div className="info-box">
                <img className="avatar" src={user.avatarUrl} alt="" />
                <div className="info-text">
                  <p className="name">{user.author}</p>
                  <p className="job-title">{user.jobRole}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
