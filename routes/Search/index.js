/**
 * Created by ranyanchuan on 2018/3/11.
 */
import React from 'react';
import { connect } from 'dva';
import { Icon, Button, Input, AutoComplete } from 'antd';
import styles from './index.less';

const Option = AutoComplete.Option;


class Search extends React.Component {

  state = {
    dataSource: [],
  }

  onSelect=(value) =>{
    console.log('onSelect', value);
  }

  getRandomInt=(max, min = 0)=> {
    return Math.floor(Math.random() ); // eslint-disable-line no-mixed-operators
  }

  handleSearch = (value) => {
    this.setState({
      dataSource: value ? this.searchResult(value) : [],
    });
  }

  searchResult=(query) =>{
      return (new Array(this.getRandomInt(5))).join('.').split('.')
        .map((item, idx) => ({
          query,
          category: `${query}${idx}`,
          count: this.getRandomInt(200, 100),
        }));
    }

  renderOption=(item)=> {
    return (
      <Option key={item.category} text={item.category}>
        {item.query} 在
        <a
          href={`https://s.taobao.com/search?q=${item.query}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.category}
        </a>
        区块中
        <span className="global-search-item-count">约 {item.count} 个结果</span>
      </Option>
    );
  }
  render() {
    const { dataSource } = this.state;
    return (
      <div className={styles.search}>
        <div className={styles.searchContent}>
        <div className="global-search-wrapper" style={{ width: 500 }}>
          <AutoComplete
            className="global-search"
            size="large"
            style={{ width: '100%' }}
            dataSource={dataSource.map(this.renderOption)}
            onSelect={this.onSelect}
            onSearch={this.handleSearch}
            placeholder="input here"
            optionLabelProp="text"
          >
            <Input
              suffix={(
                <Button className="search-btn" size="large" type="primary">
                  <Icon type="search" />
                </Button>
              )}
            />
          </AutoComplete>
        </div>
        </div>
        <div >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}
export default connect(({ User }) => ({ User }))(Search);
