import './danmuSwitch.css';
import btn from '../btn/btn';
class danmuSwitch extends btn {
  constructor(node) {
    super();
    this.node = node;
    this.name='danmuSwitch';
    this.danmuSwitch=null;
    this.action = 'on';
  }
  render() {
    console.log('danmuSwitch render')
    this.danmuSwitch=document.createElement('div');
    this.danmuSwitch.className='M706C61796572-control-danmuSwitch btn M706C61796572-control-danmuOn';
    this.node.appendChild(this.danmuSwitch);
    this.danmuSwitch.addEventListener('click',this.onClickHandle.bind(this));
  }

  onClickHandle(e){
    if(this.action == 'on'){
      this.action = 'off';
      this.danmuSwitch.className = "M706C61796572-control-danmuSwitch btn M706C61796572-control-danmuOff";
    }else{
      this.action = 'on';
      this.danmuSwitch.className = "M706C61796572-control-danmuSwitch btn M706C61796572-control-danmuOn";
    }
    super.disptchStatusEvent(this.name,this.action)
  }

}

export default danmuSwitch;