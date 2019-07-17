import React, { Component } from 'react';
import { Button, InputItem, List, WhiteSpace } from 'antd-mobile';
// @ts-ignore
import { createForm } from 'rc-form';

class BasicInputExample extends Component<any, any> {
  private inputRef: any;

  componentDidMount() {
    // this.autoFocusInst.focus();
  }

  handleClick = () => {
    this.inputRef.focus();
  };

  render() {
    const { form }: any = this.props;
    const { getFieldProps } = form;
    return (
      <div>
        <Button type='primary'
                inline={true}
                activeStyle={true}>hello</Button>
        <List renderHeader={() => 'Customize to focus'}>
          <List.Item>
            <div style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
                 onClick={this.handleClick}>
              click to focus
            </div>
          </List.Item>
        </List>

        <List renderHeader={() => 'Whether is controlled'}>
          <InputItem {...getFieldProps('control')}
                     placeholder="controled input">
            受控组件
          </InputItem>
          <InputItem defaultValue="Title"
                     placeholder="please input content"
                     data-seed="logId">
            非受控组件
          </InputItem>
        </List>

        <WhiteSpace />

        <List renderHeader={() => 'Show clear'}>
          <InputItem {...getFieldProps('inputclear')}
                     clear
                     placeholder="displayed clear while typing">
            标题
          </InputItem>
        </List>

        <WhiteSpace />

        <List renderHeader={() => 'Number of words for title'}>
          <InputItem {...getFieldProps('label8')}
                     placeholder="limited title length"
                     labelNumber={5}>
            <div accessKey={'123'}
                 onClick={() => console.log('hheleo')}
                 onChange={(e) => console.log(e.currentTarget.nodeValue)}>
              hello world
            </div>
          </InputItem>
        </List>

        <WhiteSpace />

        <List renderHeader={() => 'Custom title（text / image / empty)'}>
          <InputItem
            {...getFieldProps('input3')}
            placeholder="no label"
          />
          <InputItem
            {...getFieldProps('inputtitle2')}
            placeholder="title can be icon，image or text"
          >
            <div style={{
              backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)',
              backgroundSize: 'cover',
              height: '22px',
              width: '22px',
            }} />
          </InputItem>
        </List>

        <WhiteSpace />

        <List renderHeader={() => 'Customize the extra content in the right'}>
          <InputItem
            {...getFieldProps('preice')}
            placeholder="0.00"
            extra="¥"
          >价格</InputItem>
        </List>

        <WhiteSpace />
        <List renderHeader={() => 'Format'}>
          <InputItem
            {...getFieldProps('bankCard', {
              initialValue: '8888 8888 8888 8888',
            })}
            type="bankCard"
          >银行卡</InputItem>
          <InputItem
            {...getFieldProps('phone')}
            type="phone"
            placeholder="186 1234 1234"
          >手机号码</InputItem>
          <InputItem
            {...getFieldProps('password')}
            type="password"
            placeholder="****"
          >密码</InputItem>
          <InputItem
            {...getFieldProps('number')}
            type="number"
            placeholder="click to show number keyboard"
          >数字键盘</InputItem>
          <InputItem
            {...getFieldProps('digit')}
            type="digit"
            placeholder="click to show native number keyboard"
          >数字键盘</InputItem>
        </List>

        <WhiteSpace />

        <List renderHeader={() => 'Not editable / Disabled'}>
          <InputItem
            value="not editable"
            editable={false}
          >姓名</InputItem>
          <InputItem
            value="style of disabled `InputItem`"
            disabled
          >姓名</InputItem>
        </List>
      </div>
    );
  }
}

export const AntTest = createForm()(BasicInputExample);
