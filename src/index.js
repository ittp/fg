import React from "react";
import ReactDOM from "react-dom";
import { PageHeader, Row, Form, Button, Col } from "antd";
import FormBuilder from "antd-form-builder";

//import "antd/dist/antd.css";
import "./styles.css";
import { List } from "antd/es/form/Form";
let categories = [
  { key: 1, value: "Сайты" },
  { key: 2, value: "Офис" }
];

const meta = {
  fields: [
    { key: "username", label: "Название" },
    {
      key: "category",
      label: "Категория",
      widget: "select",
      options: categories
    },

    { key: "text", label: "Описание", widget: "textarea" }
  ]
};

export class TicketForm extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();

    let data = this.props.form.getFieldsValue();

    console.log(data);
  };

  render() {
    return (
      <>
        <Row gutter={24}>
          <Col>
            <Form onSubmit={this.handleSubmit} layout={"horizontal"}>
              <FormBuilder meta={meta} form={this.props.form} />
              <Form.Item wrapperCol={{ span: 1, offset: 1 }}>
                <Button type="primary" htmlType="submit">
                  Отправить
                </Button>
              </Form.Item>
            </Form>
          </Col>
          <Col>
            <List />
          </Col>
        </Row>
      </>
    );
  }
}

//const WrappedExampleForm = Form.create(TicketForm);

function App() {
  return (
    <div>
      <TicketForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
