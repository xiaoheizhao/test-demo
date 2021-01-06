/**
 * Created by ranyanchuan on 2018/3/11.
 */
import React from 'react';
import { connect } from 'dva';
import { Form, Icon, Input, Button } from 'antd';
import styles from './index.less';

const FormItem = Form.Item;
class Login extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.dispatch({
          type: 'User/login',
          payload: { values },
        });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={styles.login}>
        <div>
          <div className={styles.loginTitle}>Login</div>
          <Form onSubmit={this.handleSubmit} className={styles.form}>
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input prefix={<Icon type="user" className={styles.icon} />} placeholder="Username" />,
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock" className={styles.icon} />} type="password"
                  placeholder="Password"
                />,
              )}
            </FormItem>
            <FormItem>
              <div className={styles.otherAction}>
                <div>
                  <a href="/register">Register now</a>
                </div>
                <div>
                  <a href="#">Forgot password</a>
                </div>
              </div>
            </FormItem>
            <FormItem>
              <div className={styles.flex}>
                <Button type="primary" htmlType="submit" className="login-form-button">Login</Button>
              </div>
            </FormItem>
          </Form>
        </div>
      </div>
    );
  }
}
export default connect(({ User }) => ({ User }))(Form.create()(Login));
