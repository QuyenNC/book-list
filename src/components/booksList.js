import React,{ Component } from 'react';
import { Space, Card } from 'antd';
import 'antd/dist/antd.css';
import { Layout} from 'antd';
import { Input } from 'antd';

class Bookslist extends Component{
    constructor(props) {
        super(props);
        this.state = {
            query:'',
            items: [],
            filterData:[]
        };
        this.inputElemnet =  React.createRef();
        this.searchContent=this.searchContent.bind(this);
      }
      searchContent(e){
          if(e.target.value.length > 0){
              const filterData =
              this.state.items.filter((item) => {
                return item.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1;
                })
                this.setState({
                    queryquery:e.target.value,
                    filterData
                })
          }else{
            this.setState({
                filterData: this.state.items
            })
          }
      }
      
      componentDidMount() {
        this.inputElemnet.current.focus();
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
          const url = "https://dusty-slender-riverbed.glitch.me/api/books";
          fetch(proxyurl + url) 
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                items: result,
                filterData: result
              });
            },
          )
      }
  render(){
    const { filterData } = this.state;
    const { Header, Content, Footer } = Layout;
    return (
        <Layout className="layout">
        <Header>
          <div className="logo">
                <Input 
                    type="text" 
                    placeholder="Search content" 
                    ref={this.inputElemnet} 
                    // value={this.state.query}
                    onChange={this.searchContent}
                />
          </div>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
            {filterData.length > 0 && filterData.map((item, index) =>
            <Space direction="vertical">
                <Card title={item.name} style={{ width: 300 }} extra={<a href="price">{item.price}</a>}>
                <p>Name : {item.name}</p>
                <p>Decription : {item.decription}</p>
              </Card>
            </Space>
            )}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2020 Created by QuyenNC</Footer>
      </Layout>
      );
  }
}
export default Bookslist;



