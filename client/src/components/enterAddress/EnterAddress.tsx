import ButtonLink from "../buttonLink/ButtonLink";
import "./styles.css";

export default function EnterAddress({ title }: { title: string }) {
  return (
    <div className="wrapper">
      <div className="content">
        <h1 className="title">{title}</h1>
        <div className="inpt__wrapper">
          <label htmlFor="Address">Address</label>
          <input type="text" />
        </div>
        <ButtonLink title="Confirm"/>
      </div>
    </div>
  );
}
