import reactDom from "react-dom";

function Home(props) {
    return <h1>Welcome to Home Page</h1>;
  }

  reactDom.render(
    <Home />,
    document.getElementById('root')
);

export default Home