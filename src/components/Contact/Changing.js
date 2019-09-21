/* eslint no-unused-vars: 0 */

import { navigate } from "gatsby";
import Button from "antd/lib/button";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import PropTypes from "prop-types";
import React from "react";

const FormItem = Form.Item;
const { TextArea } = Input;
import "antd/lib/form/style/index.css";
import "antd/lib/input/style/index.css";
import "antd/lib/button/style/index.css";
import { ThemeContext } from "../../layouts";

const Contact = props => {
  const { getFieldDecorator } = props.form;

  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        sendMessage(values);
      }
    });
  }

  function sendMessage(values) {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...values })
    })
      .then(() => {
        navigate("/success");
      })
      .catch(error => {
        console.error("Form submission error:", error);
        this.handleNetworkError();
      });
  }

  function handleNetworkError(e) {
    console.log("submit Error");
  }

  return (
    <React.Fragment>
      <ThemeContext.Consumer>
        {theme => (
          <div className="form">
            <p class="intro">Hi there!</p>
            <p>We're really pleased you’ve joined us at CyberInsurerUK! We know you’re busy and it’s easy to make little mistakes when filling in forms and providing information so if the policy has sent you has any little mistakes in it, please let us know by filling in the box below and we will fix this for you today.</p>
            <p>Hopefully, business is booming for you and you need a bit more cover, again let us know and we’ll come back to you with a new quote and policy option. Likewise if you’ve got too much cover let us know and will amend your policy and premium to reflect your needs.</p>
            <p>Thanks</p>
            <p>Si.</p>
            <Form
              name="contact"
              onSubmit={handleSubmit}
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <FormItem label="Name">
                {getFieldDecorator("name", {
                  rules: [
                    {
                      whitespace: true
                    }
                  ]
                })(<Input name="name" />)}
              </FormItem>
              <FormItem label="Policy Number:">
                {getFieldDecorator("policy", {
                  rules: [
                    {
                      whitespace: true
                    }
                  ]
                })(<Input name="policy" />)}
              </FormItem>
              <FormItem label="E-mail">
                {getFieldDecorator("email", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your e-mail address!",
                      whitespace: true,
                      type: "email"
                    }
                  ]
                })(<Input name="email" />)}
              </FormItem>
              <FormItem label="Request details:">
                {getFieldDecorator("message", {
                  rules: [
                    { required: true, message: "Please input your message!", whitespace: true }
                  ]
                })(
                  <TextArea name="message" placeholder="" autosize={{ minRows: 4, maxRows: 10 }} />
                )}
              </FormItem>
              <FormItem>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </FormItem>
            </Form>
            <p>You can also call us on 0191 375 8788</p>

            {/* --- STYLES --- */}
            <style jsx>{`
              .form {
                background: transparent;
                -webkit-animation: fadein 1s;
                -moz-animation: fadein 1s;
                  -ms-animation: fadein 1s;
                  -o-animation: fadein 1s;
                      animation: fadein 1s;
              }
              @keyframes fadein {
                  from { opacity: 0; }
                  to   { opacity: 1; }
              }

              @-moz-keyframes fadein {
                  from { opacity: 0; }
                  to   { opacity: 1; }
              }

              @-webkit-keyframes fadein {
                  from { opacity: 0; }
                  to   { opacity: 1; }
              }

              @-ms-keyframes fadein {
                  from { opacity: 0; }
                  to   { opacity: 1; }
              }

              @-o-keyframes fadein {
                  from { opacity: 0; }
                  to   { opacity: 1; }
              }
              .form :global(.ant-row.ant-form-item) {
                margin: 0 0 1em;
              }
              .form :global(.ant-row.ant-form-item:last-child) {
                margin-top: 1em;
              }
              .form :global(.ant-form-item-control) {
                line-height: 1em;
              }
              .form :global(.ant-form-item-label) {
                line-height: 1em;
                margin-bottom: 0.5em;
              }
              .form :global(.ant-form-item) {
                margin: 0;
              }
              .form :global(.ant-input) {
                appearance: none;
                height: auto;
                font-size: 1.2em;
                padding: 0.5em 0.6em;
              }
              .form :global(.ant-btn-primary) {
                height: auto;
                font-size: 1.2em;
                padding: 0.5em 3em;
                background: ${theme.color.brand.primary};
                border: 1px solid ${theme.color.brand.primary};
              }
              .form :global(.ant-form-explain) {
                margin-top: 0.2em;
              }

              p {
                  margin: 0 0 1.6em;
                  clear: both;
              }

              dt {
                font-weight: bold;
                display: block;
                float: left;
                clear: left;
                width: 180px;
              }

              dd {
                  margin: 0 0 1.6em;
                  display: block;
                  float: left;
              }

              p.intro {
                  font-size: 1.6em;
              }

              @from-width desktop {
                .form :global(input) {
                  max-width: 50%;
                }
              }
            `}</style>
          </div>
        )}
      </ThemeContext.Consumer>
    </React.Fragment>
  );
};

Contact.propTypes = {
  form: PropTypes.object
};

const ChangingForm = Form.create({})(Contact);

export default ChangingForm;
