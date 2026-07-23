import "../styles/reservation.css";

function Reservation() {
  return (
    <section className="reservation" id="reservation" data-aos="fade-up">

      <h4>Reservation</h4>

      <h2>Reserve Your Table</h2>

      <form className="reservation-form">

        <input type="text" placeholder="Your Name" />

        <input type="email" placeholder="Email Address" />

        <input type="tel" placeholder="Phone Number" />

        <input type="date" />

        <input type="time" />

        <select>
          <option>1 Guest</option>
          <option>2 Guests</option>
          <option>3 Guests</option>
          <option>4 Guests</option>
          <option>5+ Guests</option>
        </select>

        <button type="submit">
          Reserve Table
        </button>

      </form>

    </section>
  );
}

export default Reservation;