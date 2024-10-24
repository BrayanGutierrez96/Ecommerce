import NavLinks from "../components/nav/NavLinks";

export default function CheckOut() {
  return (
    <>
      <NavLinks></NavLinks>
      <form>

        <div>
          <label htmlFor="name">First Name</label>
          <input
            id="name"
            type="text"
            required
          />
        </div>

        <div>
          <label htmlFor="company">Company Name</label>
          <input
            id="company"
            type="text"
            required
          />
        </div>

        <div>
          <label htmlFor="address">Street Address</label>
          <input
            id="address"
            type="text"
            required
          />
        </div>

        <div>
          <label htmlFor="apartment">Apartment, Floor, etc (optional)</label>
          <input
            id="apartment"
            type="text"
            required
          />
        </div>

        <div>
          <label htmlFor="city">Town/City</label>
          <input
            id="city"
            type="text"
            required
          />
        </div>

        <div>
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            type="text"
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="text"
            required
          />
        </div>

        <div>
          <label>
            <input
              type="checkbox"
            />
            Save this information for faster check-out next time
          </label>
        </div>

      </form>
    </>
      )
}

