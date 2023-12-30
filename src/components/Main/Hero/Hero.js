function Hero(props) {
  return (
    <div
      className="roundedCircle"
      style={{ gridTemplateRows: `${props.heroHeight}px` }}
    >
      <div className="content">
        <div className="mainText">
          <h1>Frontend Development Portfolio</h1>
        </div>
      </div>
    </div>
  );
}
export default Hero;
