const Button = (props) => {
  const { click, content } = props;
  return <button onClick={click}>{content}</button>;
};

export default Button;
