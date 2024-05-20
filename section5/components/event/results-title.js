export default function ResultTitle(props) {
  const { startDate, endDate } = props;
  return (
    <div>
      <p>
        Start: {startDate} ~ End: {endDate}
      </p>
    </div>
  );
}
