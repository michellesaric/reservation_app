const ReservationReceipt = ({ apartment }) => {
  return (
    <table className="reservation-receipt__table">
      <thead className="reservation-receipt__table-header">
        <tr>
          <th className="reservation-receipt__table-header-piece">Date</th>
          <th className="reservation-receipt__table-header-piece">
            Number of nights
          </th>
          <th className="reservation-receipt__table-header-piece">
            Number of people
          </th>
          <th className="reservation-receipt__table-header-piece">Price</th>
        </tr>
      </thead>
      <tbody className="reservation-receipt__table-body">
        <tr>
          <td className="reservation-receipt__table-body-piece">
            {apartment.date}
          </td>
          <td className="reservation-receipt__table-body-piece">
            {apartment.numberOfNights}
          </td>
          <td className="reservation-receipt__table-body-piece">
            {apartment.capacity}
          </td>
          <td className="reservation-receipt__table-body-piece">
            € {apartment.totalPrice}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ReservationReceipt;
