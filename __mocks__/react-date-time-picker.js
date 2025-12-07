export default function DateTimePickerMock(props) {
  return (
    <input
      data-testid="datetime-picker"
      type="text"
      onChange={(e) => props.onChange(e.target.value)}
    />
  );
}
