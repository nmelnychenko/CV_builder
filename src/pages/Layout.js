import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Layout, Button } from "antd";
import ModalContainer from "./ModalContainer";

const { Header, Footer, Sider, Content } = Layout;

class PageStructure extends React.Component {
  constructor(props) {
    super(props);
    this.renderLayout = this.renderLayout.bind(this);
  }

  renderLayout(layout, buttonAction) {
    return Object.keys(layout).map(item => {
      switch (item) {
        case "header":
          return (
            <Header>
              <h2>Header</h2>
              <Button
                shape="circle"
                icon="plus"
                size="large"
                onClick={buttonAction}
              />
            </Header>
          );
        case "sider":
          return <Sider>Sider</Sider>;
        case "footer":
          return (
            <Footer>
              <h2>Footer</h2>
              <Button
                shape="circle"
                icon="plus"
                size="large"
                onClick={buttonAction}
              />
            </Footer>
          );
        case "content":
          return (
            <Content>
              <h2>Content</h2>
              <Button
                shape="circle"
                icon="plus"
                size="large"
                onClick={buttonAction}
              />
            </Content>
          );
        case "container":
          return <Layout>{this.renderLayout(layout[item], buttonAction)}</Layout>;
        default:
          return null;
      }
    });
  };

  render() {
    const { layout, showModalAction } = this.props;

    return (
      <div>
        <Link to="/">
          <Button
            type="secondary"
            style={{ position: "absolute", top: "20px", right: "20px" }}
          >
            to home
          </Button>
        </Link>
        {this.renderLayout(layout, showModalAction)}
        <ModalContainer />
      </div>
    );
  }
}

const mapStateToProps = state => ({ showModal: state.showModal });

const mapDispatchToProps = dispatch => ({
  showModalAction: () => dispatch({ type: "SHOW_MODAL" }),
  hideModalAction: () => dispatch({ type: "HIDE_MODAL" })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageStructure);
