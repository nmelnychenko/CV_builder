import React from "react";
import Modal from "../components/Modal";
import { Button, Card, List } from "antd";
import { connect } from "react-redux";

const elements = [
  {
    title: "Text"
  },
  {
    title: "List"
  }
];

class ModalContainer extends React.Component {
  render() {
    const { showModal, hideModalAction } = this.props;

    const hideModalButton = (
      <Button onClick={hideModalAction} tabIndex="0">Hide Modal</Button>
    );

    const modal = showModal ? (
      <Modal>
        <Card
          title="Choose the element you want to add"
          style={{ width: 700 }}
          extra={hideModalButton}
        >
          <List
            grid={{ gutter: 16, column: 4 }}
            dataSource={elements}
            renderItem={item => (
              <List.Item>
                <div className={"elements-card"} tabIndex="0">
                    {item.title}
                </div>
              </List.Item>
            )}
          />
        </Card>
      </Modal>
    ) : null;

    return modal;
  }
}

const mapStateToProps = state => ({ showModal: state.showModal });

const mapDispatchToProps = dispatch => ({
  hideModalAction: () => dispatch({ type: "HIDE_MODAL" })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalContainer);
