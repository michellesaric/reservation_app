const ReservationReceipt = () => {
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
            14 Feb - 16 Feb
          </td>
          <td className="reservation-receipt__table-body-piece">2</td>
          <td className="reservation-receipt__table-body-piece">2</td>
          <td className="reservation-receipt__table-body-piece">€ 134</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ReservationReceipt;
