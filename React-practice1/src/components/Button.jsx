const Button = (props) => {
  console.log(props);
  return (
    <div className="Button">
      <a href={props.link}>{props.title}</a>
    </div>
  );
};

{
  /*export const Link = () => {
  return <a href="#">Link</a>;
};*/
}

export default Button;
