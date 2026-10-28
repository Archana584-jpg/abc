import React from "react";
import { Typography } from "antd";
const { Text } = Typography;

class RenderErrorOnButtonClick extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: "",
    };
  }
  setError = (errorMessage) => {
    this.setState({ errorMessage });
  };
  render() {
    const { errorMessage } = this.state;
    const { render } = this.props;
    return (
      <>
        {render(this.setError)}
        {errorMessage ? (
          <Text type={"danger"} style={{ display: "block", fontSize: 13 }}>
            {errorMessage}
          </Text>
        ) : null}
      </>
    );
  }
}

export default RenderErrorOnButtonClick;
