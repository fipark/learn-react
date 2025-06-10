import { Component } from "react";



interface ClickMeProps {
  level?: number
}

interface ClickMeState{
  count: number
}

class Parent extends Component{
  render() {
    return(
      <div>
      <h1>01 클래스 컴포넌트</h1>
      <ClickMe level={10}/>
      <ClickMe level={5}/>
    </div>
    )
  }

}

class ClickMe extends Component<ClickMeProps,ClickMeState>{

  state ={count: 0}

  constructor(props:ClickMeProps){
    //부모 클래스의 생성자를 통해 this를 생성하고 초기화 하므로
    //super()를 호출해야 자식 클래스에서 this사용가능
    //super(props)를 호출헤야 자식 클래스에서 this.props 사용 가능능
    super(props)
    this.state={count: props.level || 1}
  }

  increase =() =>{
    this.setState({count: this.state.count + (this.props.level || 1)})
  }
  render(){
    return(
      <div>
        클릭 횟수 X {this.props.level}: {this.state.count}
        <button onClick={this.increase}>클릭</button>
      </div>
    )
  }

}

export default Parent