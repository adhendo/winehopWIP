import Link from "next/link";

const heroButtonStyle = {
  border: "none",
  borderRadius: "30px",
  margin: "1em",
  flexDirection: "row",
  flex: 1,
  display: "inline-block",
  maxWidth: "15em",
  maxHeight: "3em",
  minHeight: "2em",
  fontSize: "1em",
  color: "white",
  textAlign: "center",
  backgroundColor: "#3D9636",
  fontFamily: "Rubik"
};

const heroContainerStyle = {
  flexDirection: "row",
  flex: 1,
  display: "flex",
  justifyContent: "space-evenly"
};

const HeroButtons = () => (
  <div style={heroContainerStyle}>
    <Link href="/">
      <button text={"wineries"} style={heroButtonStyle}>
        wineries
      </button>
    </Link>
    <Link href="/">
      <button href="/" style={heroButtonStyle}>
        tasting rooms
      </button>
    </Link>
    <Link href="/about">
      <button style={heroButtonStyle}>discover</button>
    </Link>
  </div>
);

export default HeroButtons;
